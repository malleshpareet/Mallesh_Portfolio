import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:malleshpareet360@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    malleshpareet360@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+91-8431893369"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8431893369
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bengaluru, Karanataka, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/mallesh-pareet/" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="https://github.com/malleshpareet" target="_blank" className="hover:text-primary transition-colors">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-card p-8 rounded-2xl shadow-md border border-border/50 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
              {/* WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-10 h-10">
                <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.638 4.638 1.848 6.638L2.667 29.333l6.862-1.799A13.27 13.27 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11.022 11.022 0 0 1-5.62-1.538l-.403-.239-4.072 1.068 1.086-3.966-.263-.416A10.99 10.99 0 0 1 5.06 16c0-6.042 4.902-10.933 10.943-10.933S26.94 9.958 26.94 16c0 6.034-4.895 10.934-10.937 10.934zm6.004-8.189c-.328-.165-1.943-.958-2.244-1.068-.3-.11-.519-.165-.737.165-.22.328-.848 1.068-1.04 1.287-.191.22-.383.247-.711.082-.328-.165-1.387-.511-2.641-1.628-.976-.87-1.636-1.944-1.827-2.272-.191-.328-.02-.505.144-.668.147-.146.328-.383.492-.574.164-.191.219-.328.328-.547.11-.22.055-.41-.027-.574-.082-.165-.737-1.777-1.01-2.434-.265-.636-.537-.549-.737-.559l-.628-.011c-.22 0-.574.082-.875.41-.3.328-1.147 1.122-1.147 2.735s1.174 3.173 1.338 3.392c.164.22 2.31 3.528 5.597 4.945.782.338 1.393.54 1.869.691.785.25 1.5.215 2.065.13.63-.094 1.943-.794 2.216-1.561.274-.765.274-1.42.192-1.558-.082-.137-.3-.22-.628-.383z"/>
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Want to connect instantly? Click the button below and send me a message directly on WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/918431893369?text=Hi%20Mallesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 24px rgba(37,211,102,0.35)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-5 h-5">
                <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.638 4.638 1.848 6.638L2.667 29.333l6.862-1.799A13.27 13.27 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11.022 11.022 0 0 1-5.62-1.538l-.403-.239-4.072 1.068 1.086-3.966-.263-.416A10.99 10.99 0 0 1 5.06 16c0-6.042 4.902-10.933 10.943-10.933S26.94 9.958 26.94 16c0 6.034-4.895 10.934-10.937 10.934zm6.004-8.189c-.328-.165-1.943-.958-2.244-1.068-.3-.11-.519-.165-.737.165-.22.328-.848 1.068-1.04 1.287-.191.22-.383.247-.711.082-.328-.165-1.387-.511-2.641-1.628-.976-.87-1.636-1.944-1.827-2.272-.191-.328-.02-.505.144-.668.147-.146.328-.383.492-.574.164-.191.219-.328.328-.547.11-.22.055-.41-.027-.574-.082-.165-.737-1.777-1.01-2.434-.265-.636-.537-.549-.737-.559l-.628-.011c-.22 0-.574.082-.875.41-.3.328-1.147 1.122-1.147 2.735s1.174 3.173 1.338 3.392c.164.22 2.31 3.528 5.597 4.945.782.338 1.393.54 1.869.691.785.25 1.5.215 2.065.13.63-.094 1.943-.794 2.216-1.561.274-.765.274-1.42.192-1.558-.082-.137-.3-.22-.628-.383z"/>
              </svg>
              Message on WhatsApp
            </a>


          </div>
        </div>
      </div>
    </section>
  );
};
