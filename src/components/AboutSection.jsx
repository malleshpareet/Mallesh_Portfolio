import { Briefcase, Code, User } from "lucide-react";
import cvPdf from "@/assets/Mallesh_Pareet (3).pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Fullstack Developer with Mobile Expertise
            </h3>

            <p className="text-muted-foreground">
              I craft exceptional digital experiences across web and mobile
              platforms. As a fullstack developer, I build powerful end-to-end
              solutions that seamlessly integrate web, iOS, and Android
              technologies.
            </p>

            <p className="text-muted-foreground">
              My passion lies in creating seamless, cross-platform experiences that bridge
              the web and mobile worlds. I stay current with the latest technologies and
              best practices across the full development stack, from cloud infrastructure
              to responsive UI design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={cvPdf}
                download="Mallesh_Pareet.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building complete web applications with modern frameworks,
                    RESTful APIs, and cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Creating native iOS and Android applications using Swift,
                    Flutter, and cross-platform frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">System Architecture</h4>
                  <p className="text-muted-foreground">
                    Deep expertise in Low-Level Design (LLD) and intermediate
                    process in High-Level Design (HLD) for scalable systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
