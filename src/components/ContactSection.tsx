import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "bg-[#0077B5]"
    },
    {
      name: "Twitter", 
      icon: Twitter,
      href: "#",
      color: "bg-[#1DA1F2]"
    },
    {
      name: "GitHub",
      icon: Github, 
      href: "#",
      color: "bg-[#333333]"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-contact-background text-contact-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-16">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:ericr0senbauM77@gmail.com"
              className="text-lg hover:text-contact-foreground/80 transition-colors duration-200"
            >
              ericr0senbauM77@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a 
              href="tel:+16107313848"
              className="text-lg hover:text-contact-foreground/80 transition-colors duration-200"
            >
              (610) 731-3848
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={`${social.color} p-4 rounded-lg hover:scale-110 transition-transform duration-200 shadow-lg`}
                aria-label={social.name}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;