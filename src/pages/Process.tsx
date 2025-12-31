import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProcessStep } from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Pencil,
  HeartHandshake,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Understanding your unique needs and goals",
    details: [
      "Initial discovery meeting with key stakeholders",
      "Assessment of current programs and challenges",
      "Identification of student and institutional goals",
      "Understanding school culture and values",
    ],
  },
  {
    icon: Pencil,
    title: "Program Design",
    description: "Creating personalized development plans",
    details: [
      "Custom program architecture based on findings",
      "Selection of appropriate service pillars",
      "Timeline and milestone planning",
      "Resource allocation and team assignment",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Implementation",
    description: "Expert facilitation and guidance",
    details: [
      "Program launch with dedicated support team",
      "Regular sessions and workshops",
      "Ongoing communication with all stakeholders",
      "Real-time adjustments based on feedback",
    ],
  },
  {
    icon: BarChart3,
    title: "Follow-up & Review",
    description: "Measuring impact and refining approach",
    details: [
      "Comprehensive outcome assessment",
      "Student progress reports and analytics",
      "Stakeholder feedback collection",
      "Recommendations for continued development",
    ],
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-medium text-sm uppercase tracking-wider"
            >
              How We Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            >
              Your Roadmap to{" "}
              <span className="text-gold">Impact</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg max-w-2xl"
            >
              Our proven 4-step methodology ensures every engagement delivers personalized, measurable, and lasting results for students and institutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground"
            >
              The Imara <span className="text-navy">Process</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-20">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shadow-medium">
                      <step.icon className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {step.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-cream rounded-2xl p-8">
                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gold rounded-full" />
                      What Happens in This Stage
                    </h4>
                    <div className="space-y-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 text-lg mb-10"
            >
              Start with a free consultation to explore how Imara can support your school's unique needs and goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
