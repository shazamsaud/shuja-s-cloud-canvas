import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail, Sparkles } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Code2, label: "Projects", id: "projects" },
  { icon: Sparkles, label: "Skills", id: "skills" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-card px-6 py-3 flex items-center gap-2">
        {navItems.map((item, idx) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 rounded-xl transition-all duration-300 hover:bg-primary/10 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
