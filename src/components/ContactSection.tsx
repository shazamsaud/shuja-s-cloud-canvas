import { BentoCard } from "./BentoCard";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shujamsi22@gmail.com",
    href: "mailto:shujamsi22@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7385107433",
    href: "tel:+447385107433"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com"
  }
];

export const ContactSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-1 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-xl">
          <Mail className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
      </div>

      <div className="space-y-4">
        {contactInfo.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-105 group"
          >
            <div className="p-2 bg-background rounded-lg">
              <contact.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">{contact.label}</p>
              <p className="text-sm font-medium text-foreground truncate">
                {contact.value}
              </p>
            </div>
            {contact.href.startsWith("http") && (
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </a>
        ))}
      </div>
    </BentoCard>
  );
};
