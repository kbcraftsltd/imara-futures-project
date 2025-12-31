import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export const ProcessStep = ({ number, title, description, icon: Icon, isLast }: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-gold/50 to-teal/50" />
      )}

      {/* Step circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: number * 0.1 }}
        className="relative"
      >
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-gold" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy-dark font-heading font-bold text-sm shadow-soft">
          {number}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: number * 0.1 + 0.2 }}
        className="mt-6"
      >
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
