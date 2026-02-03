import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Quote,
} from "lucide-react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const portfolioItems = [
  {
    title: "Leadership Workshop Series",
    category: "Personal Development",
    description: "A comprehensive 6-month leadership development program for high school students, focusing on communication, decision-making, and team management skills.",
    image: portfolio1,
    stats: { students: "120+", duration: "6 months", location: "Nairobi" },
  },
  {
    title: "Career Guidance Program",
    category: "Career Counseling",
    description: "Personalized career assessment and guidance for Form 4 students, including aptitude testing, university application support, and mentorship connections.",
    image: portfolio2,
    stats: { students: "250+", duration: "4 months", location: "Multiple Schools" },
  },
  {
    title: "International Exchange Prep",
    category: "International Opportunities",
    description: "Prepared students for international scholarship applications and exchange programs, resulting in successful placements in universities abroad.",
    image: portfolio3,
    stats: { students: "45+", duration: "Ongoing", location: "Kenya" },
  },
  {
    title: "Parent-Student Workshop",
    category: "Parental Engagement",
    description: "Interactive workshops bridging the gap between parents and students, fostering better communication and shared educational goals.",
    image: portfolio4,
    stats: { students: "80 families", duration: "2 months", location: "Nairobi" },
  },
  {
    title: "Experiential Learning Camp",
    category: "Experiential Learning",
    description: "Outdoor education camp combining adventure activities with life skills training, building confidence and resilience in students.",
    image: portfolio5,
    stats: { students: "60+", duration: "1 week", location: "Mt. Kenya" },
  },
];

const testimonials = [
  {
    quote: "Imara's programs transformed how our students approach their future. The career guidance sessions were eye-opening for both students and parents.",
    author: "Principal Mary K.",
    school: "Nairobi Academy",
  },
  {
    quote: "The leadership workshop gave me skills I use every day. I'm now more confident in speaking up and taking initiative.",
    author: "James O.",
    school: "Student, Form 4",
  },
  {
    quote: "As a parent, the family workshops helped me understand my child's aspirations better. We now communicate more openly about their future.",
    author: "Mrs. Wanjiku",
    school: "Parent",
  },
];

const impactStats = [
  { number: "500+", label: "Students Impacted" },
  { number: "15+", label: "Partner Schools" },
  { number: "50+", label: "Programs Delivered" },
  { number: "95%", label: "Satisfaction Rate" },
];

const Portfolio = () => {
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
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            >
              Stories of <span className="text-gold">Impact</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg max-w-2xl"
            >
              Explore our journey of empowering students and transforming educational experiences across Kenya.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Featured <span className="text-navy">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of programs and initiatives that showcase our commitment to student development.
            </motion.p>
          </div>

          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-navy-dark text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <Users className="w-5 h-5 text-navy mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">
                        {item.stats.students}
                      </div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <Calendar className="w-5 h-5 text-navy mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">
                        {item.stats.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 text-center">
                      <MapPin className="w-5 h-5 text-navy mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground truncate">
                        {item.stats.location}
                      </div>
                      <div className="text-xs text-muted-foreground">Location</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              What People <span className="text-navy">Say</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.school}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              Partner With Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Ready to Create Your Success Story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 text-lg mb-10"
            >
              Join the growing community of schools and institutions that have partnered with Imara to transform student experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
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

export default Portfolio;
