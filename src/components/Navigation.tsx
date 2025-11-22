import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalConfig } from "@/config/personal";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", type: "route" },
    { label: "About", href: "#about", type: "anchor" },
    { label: "Resume", href: personalConfig.resume.downloadUrl, type: "external" },
    { label: "Portfolio", href: "#projects", type: "anchor" },
    { label: "Contact", href: "#contact", type: "anchor" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { label: string; href: string; type: string }
  ) => {
    if (item.type === "external") return; // Let default behavior happen for external links

    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.type === "route" && item.href === "/") {
       if (location.pathname !== "/") {
         navigate("/");
       } else {
         window.scrollTo({ top: 0, behavior: "smooth" });
       }
       return;
    }

    if (item.type === "anchor") {
      const targetId = item.href.substring(1);
      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: targetId } });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, { label: "Home", href: "/", type: "route" })}
          className="text-2xl font-bold text-slate-800"
        >
          {personalConfig.fullName}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.type === "external" ? "_blank" : undefined}
              rel={item.type === "external" ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-slate-600" : "text-slate-800"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden flex flex-col gap-4 shadow-lg animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                onClick={(e) => handleNavClick(e, item)}
                className="text-slate-600 hover:text-primary font-medium py-2 text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
