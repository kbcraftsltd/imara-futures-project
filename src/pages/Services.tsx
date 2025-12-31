import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Compass,
  Sprout,
  Globe,
  Briefcase,
  Users,
  Sparkles,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Guidance & Counseling",
    description: "Personalized career mapping and counseling to help students discover their potential and chart their professional journey with confidence.",
    formats: ["One-on-one counseling sessions", "Career aptitude assessments", "University application support", "Professional mentorship programs"],
    color: "from-navy to-navy-light",
  },
  {
    icon: Sprout,
    title: "Personal Development & Life Skills",
    description: "Building essential life skills, emotional intelligence, and leadership qualities for holistic growth and success in all areas of life.",
    formats: ["Leadership workshops", "Emotional intelligence training", "Public speaking programs", "Time management courses"],
    color: "from-teal to-teal-light",
  },
  {
    icon: Globe,
    title: "International Opportunities & Exchanges",
    description: "Access to global exchange programs, international scholarships, and cross-cultural learning experiences that broaden horizons.",
    formats: ["Student exchange programs", "International summer schools", "Scholarship guidance", "Cultural immersion trips"],
    color: "from-gold-dark to-gold",
  },
  {
    icon: Briefcase,
    title: "Experiential Learning & Work Exposure",
    description: "Hands-on work exposure, internships, and real-world projects that bridge classroom learning with practical application.",
    formats: ["Internship placements", "Industry shadowing", "Project-based learning", "Entrepreneurship bootcamps"],
    color: "from-navy-light to-navy",
  },
  {
    icon: Users,
    title: "Parental & Teacher Engagement",
    description: "Collaborative programs that align educators and parents to support student success through coordinated effort.",
    formats: ["Parent workshops", "Teacher training sessions", "Family counseling", "Communication frameworks"],
    color: "from-teal-dark to-teal",
  },
  {
    icon: Sparkles,
    title: "Special Programs & Clubs",
    description: "Curated extracurricular activities, clubs, and specialized programs designed to nurture diverse interests and talents.",
    formats: ["STEM clubs", "Arts & creativity programs", "Debate & Model UN", "Community service initiatives"],
    color: "from-gold to-gold-light",
  },
  {
    icon: Laptop,
    title: "Online & Hybrid Support",
    description: "Flexible digital learning solutions and virtual counseling for accessible education support anytime, anywhere.",
    formats: ["Virtual counseling sessions", "Online skill courses", "Hybrid workshops", "Digital resource library"],
    color: "from-navy to-teal",
  },
];

const Services = () => {
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            >
              Our Holistic Framework for{" "}
              <span className="text-gold">Student Success</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg max-w-2xl"
            >
              Seven core pillars designed to support every dimension of student development — from career clarity to personal growth and global readiness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-medium`}>
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Pillar {index + 1}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/programs">
                      View Related Programs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-cream rounded-2xl p-8">
                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gold rounded-full" />
                      Available Formats
                    </h4>
                    <div className="space-y-4">
                      {service.formats.map((format) => (
                        <div key={format} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{format}</span>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 text-lg mb-10"
            >
              Contact us to discuss how our services can be tailored to meet your school's or student's specific needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/programs">View Programs</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
