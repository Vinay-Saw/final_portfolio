import profileImage from "@/assets/Vinay-Kumar-Saw-pic.png";
import { personalConfig } from "@/config/personal";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/10 transform translate-x-4 translate-y-4"></div>
              <img
                src={profileImage}
                alt={personalConfig.fullName}
                className="relative w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {personalConfig.description.long}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {personalConfig.expertise.slice(0, 4).map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white text-primary font-medium rounded-full shadow-sm border border-primary/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
