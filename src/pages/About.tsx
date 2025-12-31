import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Globe,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Personalized",
    description: "Tailored solutions for each student's unique journey and goals.",
  },
  {
    icon: Lightbulb,
    title: "Practical",
    description: "Real-world applicable skills and experiences that matter.",
  },
  {
    icon: Award,
    title: "Impactful",
    description: "Measurable outcomes that create lasting change.",
  },
  {
    icon: Heart,
    title: "Holistic",
    description: "Nurturing academic, personal, and professional growth together.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Preparing students for success in an interconnected world.",
  },
];

const teamAreas = [
  "Career Counseling & Guidance",
  "Educational Psychology",
  "International Programs",
  "Life Skills & Leadership",
  "Parent-Teacher Collaboration",
  "Digital Learning Solutions",
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            >
              Building Strong Foundations for{" "}
              <span className="text-gold">Lifelong Success</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg max-w-2xl"
            >
              Guiding students today for the leaders of tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-teal font-medium text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Nurturing Well-Rounded Individuals
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Imara Education Services is a school consulting and student development firm dedicated to nurturing well-rounded individuals. The name "Imara" means strong and resilient — embodying our commitment to building lasting foundations for student success.
                </p>
                <p>
                  We offer a comprehensive suite of services including career guidance, personal development, international opportunities, experiential learning, parental and teacher engagement, and specialized programs — all designed to prepare students for real-world success.
                </p>
                <p>
                  Our approach fosters collaboration between schools, families, and learners, creating an ecosystem where every stakeholder is invested in the student's journey toward excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-navy rounded-2xl p-10 text-primary-foreground">
                <h3 className="font-heading text-2xl font-bold mb-4">Our Belief</h3>
                <p className="text-primary-foreground/80 text-lg italic leading-relaxed">
                  "We believe in building strong foundations for lifelong success — guiding students today for the leaders of tomorrow."
                </p>
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <p className="text-gold font-heading text-xl font-semibold">
                    Empowering Students. Guiding Futures.
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-teal font-medium text-sm uppercase tracking-wider"
            >
              Why Choose Imara
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            >
              Our Core <span className="text-navy">Values</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-10 h-10 text-navy" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Our Capacity</h3>
                    <p className="text-muted-foreground">Expert Team & Global Network</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-4xl font-heading font-bold text-navy mb-2">6+</div>
                  <p className="text-muted-foreground">Core specialist counselors and advisors</p>
                </div>

                <h4 className="font-semibold text-foreground mb-4">Areas of Expertise:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teamAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-muted-foreground text-sm">{area}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4 text-teal" />
                    On-demand staffing & global partnerships for scalable solutions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-teal font-medium text-sm uppercase tracking-wider">
                The Imara Team
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Experts Dedicated to{" "}
                <span className="text-navy">Your Success</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our core team of experienced counselors and advisors brings together decades of expertise in education, career development, and student support. Each team member is passionate about nurturing potential and creating pathways to success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Beyond our core team, we maintain a network of on-demand specialists and global partners, allowing us to scale our services and provide specialized expertise whenever needed.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
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

export default About;
