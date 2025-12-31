import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Monitor, GraduationCap } from "lucide-react";

const programs = [
  {
    name: "Career Discovery Workshop",
    description: "A comprehensive 6-week program helping students identify their strengths, interests, and potential career paths through assessments, mentorship, and exploration activities.",
    duration: "6 weeks",
    format: "Hybrid",
    idealFor: "Students (Ages 14-18)",
    category: "Career Guidance",
  },
  {
    name: "Leadership Development Bootcamp",
    description: "Intensive program focused on developing leadership skills, public speaking, team management, and emotional intelligence through practical exercises.",
    duration: "8 weeks",
    format: "In-school",
    idealFor: "Students (Ages 15-18)",
    category: "Personal Development",
  },
  {
    name: "Global Exchange Prep Program",
    description: "Prepare students for international exchange opportunities with language support, cultural awareness training, and application guidance.",
    duration: "12 weeks",
    format: "Hybrid",
    idealFor: "Students (Ages 16-19)",
    category: "International",
  },
  {
    name: "Industry Shadowing Initiative",
    description: "Connect students with professionals in their fields of interest for hands-on exposure and mentorship through workplace visits and projects.",
    duration: "4 weeks",
    format: "In-person",
    idealFor: "Students (Ages 16-18)",
    category: "Experiential Learning",
  },
  {
    name: "Parent-School Partnership Program",
    description: "Workshops and ongoing support for parents to effectively collaborate with schools in supporting student development and academic success.",
    duration: "Ongoing",
    format: "Hybrid",
    idealFor: "Parents",
    category: "Engagement",
  },
  {
    name: "Teacher Development Series",
    description: "Professional development program equipping teachers with modern counseling techniques, student engagement strategies, and well-being support skills.",
    duration: "Annual",
    format: "In-school",
    idealFor: "Teachers",
    category: "Engagement",
  },
  {
    name: "STEM Innovation Club",
    description: "Weekly club sessions focused on science, technology, engineering, and mathematics through project-based learning and competitions.",
    duration: "Annual",
    format: "In-school",
    idealFor: "Students (Ages 12-18)",
    category: "Special Programs",
  },
  {
    name: "Virtual Counseling Sessions",
    description: "Flexible one-on-one counseling sessions available online for students who need accessible support regardless of location.",
    duration: "Per session",
    format: "Online",
    idealFor: "Students",
    category: "Online Support",
  },
  {
    name: "University Application Masterclass",
    description: "Comprehensive guidance through the entire university application process, including essay writing, interviews, and scholarship applications.",
    duration: "10 weeks",
    format: "Hybrid",
    idealFor: "Students (Ages 17-19)",
    category: "Career Guidance",
  },
  {
    name: "Entrepreneurship Fundamentals",
    description: "Introduction to business concepts, startup thinking, and innovation for students interested in entrepreneurship and creative problem-solving.",
    duration: "8 weeks",
    format: "Hybrid",
    idealFor: "Students (Ages 15-18)",
    category: "Experiential Learning",
  },
];

const categories = ["All", "Career Guidance", "Personal Development", "International", "Experiential Learning", "Engagement", "Special Programs", "Online Support"];

const Programs = () => {
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
              Programs & Packages
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6"
            >
              Structured Pathways for{" "}
              <span className="text-gold">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg max-w-2xl"
            >
              Explore our range of programs designed for students, parents, and educators. Each program is carefully crafted to deliver meaningful outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-navy text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-navy/10 hover:text-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Programs Table/Cards */}
          <div className="grid gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Program Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                      {program.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Meta */}
                  <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-navy" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Monitor className="w-4 h-4 text-navy" />
                      <span>{program.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-navy" />
                      <span>{program.idealFor}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="lg:ml-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Programs CTA */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-16 h-16 text-navy mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Need a Custom Program?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We design bespoke programs tailored to your school's specific needs, culture, and goals. Let's discuss how we can create a unique solution for your institution.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Discuss Custom Solutions
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

export default Programs;
