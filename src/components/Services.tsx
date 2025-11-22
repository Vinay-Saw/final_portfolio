import { BarChart3, Brain, PieChart, LucideIcon } from "lucide-react";
import { personalConfig } from "@/config/personal";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Brain,
  PieChart,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block tracking-wider">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What I Do</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || BarChart3; // Default to BarChart3 if not found

            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
