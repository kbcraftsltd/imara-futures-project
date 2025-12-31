import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 border border-border/50 hover:border-gold/30 overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-navy transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};
