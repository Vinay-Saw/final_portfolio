import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground font-sans">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background/80 backdrop-blur z-50">
        <span className="font-bold text-lg">Vinay Saw</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[300px] bg-sidebar-background border-r border-border">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar - Fixed on desktop */}
      <aside className="hidden md:block w-[280px] lg:w-[320px] xl:w-[25%] max-w-[400px] h-screen sticky top-0 border-r border-border bg-sidebar-background overflow-hidden">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
