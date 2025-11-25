import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Mail, Phone, Linkedin, ExternalLink, Send } from "lucide-react";
import { Button } from "./ui/button";

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
    <BentoCard className="col-span-full lg:col-span-1 space-y-6" delay={0.6} glow>
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 glass-card rounded-xl relative"
        >
          <Mail className="w-6 h-6 text-accent relative z-10" />
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-xl animate-glow-pulse" />
        </motion.div>
        <h2 className="text-3xl font-bold gradient-text-accent">Get In Touch</h2>
      </div>

      <p className="text-muted-foreground text-sm">
        Let's collaborate on something amazing. Reach out and let's build the future together.
      </p>

      <div className="space-y-3">
        {contactInfo.map((contact, idx) => (
          <motion.a
            key={idx}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + idx * 0.1 }}
            whileHover={{ x: 4, scale: 1.02 }}
            className="flex items-center gap-4 p-4 rounded-xl glass-card transition-all duration-300 group"
          >
            <div className="p-2.5 glass-card rounded-lg relative">
              <contact.icon className="w-5 h-5 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{contact.label}</p>
              <p className="text-sm font-medium text-foreground truncate">
                {contact.value}
              </p>
            </div>

            {contact.href.startsWith("http") && (
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            )}
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <Button
          className="w-full relative overflow-hidden group glass-card border-primary/30 hover:border-primary/50"
          size="lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </Button>
      </motion.div>
    </BentoCard>
  );
};
