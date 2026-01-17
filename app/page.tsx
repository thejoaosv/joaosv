"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Rocket,
  Camera,
  Music,
  Plane,
  Car,
  Database,
  Server,
  Sparkles,
  Zap,
  Globe,
  Cpu,
  Cloud,
  GitBranch,
  Terminal,
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Heart,
  Store,
  Image as ImageIcon,
  Film,
  Wrench
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const projects = [
    {
      name: "WODBox.org",
      description: "Comprehensive SaaS platform for CrossFit gym management featuring member tracking, workout scheduling, performance analytics, billing integration, and coach-athlete communication tools.",
      tags: ["SaaS", "React", "PostgreSQL", "Stripe", "Analytics"],
      link: "https://wodbox.org",
      icon: Briefcase
    },
    {
      name: "LorkAI.org",
      description: "Advanced AI chat platform integrating multiple language models with custom tool integration through n8n workflow automation. Features real-time collaboration, context-aware responses, and seamless third-party integrations.",
      tags: ["AI/ML", "n8n", "Automation", "WebSockets", "Node.js"],
      link: "https://lorkai.org",
      icon: Sparkles
    },
    {
      name: "The Gallery",
      description: "Photography and art gallery website showcasing creative work including photos, videos, music, and AI animations. A digital space for artistic expression and visual storytelling.",
      tags: ["Photography", "Art", "Portfolio", "Creative"],
      link: "https://joaovasconcelos.com",
      icon: ImageIcon
    }
  ];

  const skills = [
    { name: "TypeScript", icon: Code, color: "text-primary" },
    { name: "React/Next.js", icon: Globe, color: "text-secondary" },
    { name: "Node.js", icon: Server, color: "text-primary" },
    { name: "Python", icon: Terminal, color: "text-secondary" },
    { name: "AI/ML", icon: Cpu, color: "text-secondary" },
    { name: "PostgreSQL", icon: Database, color: "text-primary" },
    { name: "Cloud/DevOps", icon: Cloud, color: "text-secondary" },
    { name: "Git", icon: GitBranch, color: "text-primary" },
  ];

  const timeline = [
    {
      year: "Nov 2025",
      title: "WODBox.org",
      description: "Launched comprehensive SaaS platform for CrossFit gym management",
      icon: Briefcase
    },
    {
      year: "Early 2025",
      title: "LorkAI.org",
      description: "Launched advanced AI platform with n8n integrations and multiple language models",
      icon: Sparkles
    },
    {
      year: "Late 2024-Mid 2025",
      title: "Racing/Lifestyle Server",
      description: "Managed a racing and lifestyle community server - learning experience in community building",
      icon: Car
    },
    {
      year: "Early 2021-2024",
      title: "FIVEM Roleplay Server",
      description: "Developed custom roleplay server with economy systems and mechanics - valuable learning experience",
      icon: Users
    },
    {
      year: "2017-Present",
      title: "The Gallery",
      description: "Photography and art portfolio showcasing creative work at joaovasconcelos.com",
      icon: ImageIcon
    },
    {
      year: "2015-2016",
      title: "Douro Farm Store",
      description: "Fun project creating an online store concept for grandma's farm vegetables and fruits with my uncle",
      icon: Store
    }
  ];

  const stats = [
    { number: "6+", label: "Years Coding", icon: Code },
    { number: "10+", label: "Projects Built", icon: Rocket },
    { number: "500+", label: "Commits", icon: GitBranch },
    { number: "∞", label: "Ideas", icon: Sparkles }
  ];

  const interests = [
    { icon: Code, label: "Programming", description: "Innovative solutions" },
    { icon: Wrench, label: "Engineering", description: "Problem-solving" },
    { icon: Rocket, label: "Space", description: "Exploring the cosmos" },
    { icon: Film, label: "Films", description: "Cinema & storytelling" },
    { icon: Car, label: "Motorsport", description: "Formula 1 & racing" },
    { icon: Plane, label: "Travel", description: "Discovering the world" },
    { icon: Camera, label: "Photography", description: "Capturing moments" },
    { icon: Music, label: "Music", description: "All genres" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="João Vasconcelos"
            width={50}
            height={50}
            className="rounded-lg transition-all duration-300"
          />
        </motion.a>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="mb-6 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                João
              </motion.span>{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  backgroundPosition: ["0% center", "200% center", "0% center"]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.6 },
                  x: { duration: 0.6, delay: 0.6 },
                  backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
                }}
              >
                Vasconcelos
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 space-y-2"
          >
            <p className="text-2xl text-muted-foreground sm:text-3xl font-light">
              Developer & Engineering Enthusiast
            </p>
            <p className="text-lg text-muted-foreground sm:text-xl">
              High School Student from Portugal
            </p>
          </motion.div>
          
          <motion.p 
            className="mb-10 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Passionate about crafting innovative solutions at the intersection of{" "}
            <span className="text-primary font-medium">technology</span>,{" "}
            <span className="text-secondary font-medium">engineering</span>, and{" "}
            <span className="text-primary font-medium">artificial intelligence</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 relative overflow-hidden cursor-pointer"
                asChild
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground hover:text-foreground text-lg px-8 py-6 cursor-pointer"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 cursor-pointer" asChild>
                <a href="https://github.com/thejoaosv" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 cursor-pointer" asChild>
                <a href="https://www.linkedin.com/in/joaosvasconcelos/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="px-6 py-20 relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-center p-6 rounded-lg hover:bg-primary/5 transition-all duration-300">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-5xl font-bold tracking-tight">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with daily
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <AnimatedCard key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 text-center rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className={`mb-3 h-10 w-10 ${skill.color}`} />
                  </motion.div>
                  <p className="font-medium">{skill.name}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Separator className="mx-auto w-1/2" />

      {/* Projects Section */}
      <AnimatedSection id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Building solutions that make a difference
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-8 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 h-full"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="h-10 w-10 text-primary" />
                    </motion.div>
                    <ExternalLink className="h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                    />
                  )}
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Separator className="mx-auto w-1/2" />

      {/* Timeline Section */}
      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-5xl font-bold tracking-tight">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in my development career
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative pl-20"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </motion.div>
                    
                    <div className="p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                      <div className="mb-3">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-base text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Separator className="mx-auto w-1/2" />

      {/* Interests Section */}
      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-5xl font-bold tracking-tight">Beyond Code</h2>
            <p className="text-lg text-muted-foreground">
              Passions that fuel my creativity and innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {interests.map((interest, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{interest.label}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedCard delay={0.3}>
            <div className="p-8 rounded-lg bg-primary/5">
              <div className="flex items-center gap-2 text-2xl font-bold mb-6">
                <Heart className="h-6 w-6 text-primary" />
                About Me
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a high school student in{" "}
                  <span className="text-primary font-medium">Portugal</span> with an insatiable
                  curiosity for{" "}
                  <span className="text-primary font-medium">engineering</span> and{" "}
                  <span className="text-secondary font-medium">technology</span>.
                  My journey started with simple scripts and has evolved into building
                  full-scale applications that serve real users.
                </p>
                <p className="text-lg">
                  I believe in the power of{" "}
                  <span className="text-primary font-medium">artificial intelligence</span>{" "}
                  to transform how we solve problems, which led me to create LorkAI.org.
                  I'm constantly learning, experimenting, and pushing the boundaries of what's possible
                  with code.
                </p>
                <p className="text-lg">
                  Beyond the screen, I'm passionate about{" "}
                  <span className="text-secondary font-medium">engineering</span>,{" "}
                  captivated by{" "}
                  <span className="text-primary font-medium">motorsport</span>,{" "}
                  dreaming of{" "}
                  <span className="text-secondary font-medium">space exploration</span>,{" "}
                  exploring{" "}
                  <span className="text-primary font-medium">cinema</span>,{" "}
                  capturing the world through{" "}
                  <span className="text-secondary font-medium">photography</span>,{" "}
                  enjoying{" "}
                  <span className="text-primary font-medium">music</span>,{" "}
                  and planning my next{" "}
                  <span className="text-secondary font-medium">travel</span> adventure. These passions fuel my creativity and remind me
                  that the best solutions come from diverse perspectives.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-lg bg-primary/5"
          >
            <Zap className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have an idea or just want to chat about technology? I'm always open to
              new opportunities and collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 cursor-pointer" asChild>
                  <a href="mailto:contact@joaosv.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Me an Email
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground hover:text-foreground text-lg px-8 py-6 cursor-pointer" asChild>
                  <a href="https://github.com/thejoaosv" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12 bg-card/30 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 João Vasconcelos. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                <Button variant="ghost" size="icon" className="hover:text-primary cursor-pointer" asChild>
                  <a href="https://github.com/thejoaosv" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                <Button variant="ghost" size="icon" className="hover:text-primary cursor-pointer" asChild>
                  <a href="https://www.linkedin.com/in/joaosvasconcelos/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                <Button variant="ghost" size="icon" className="hover:text-primary cursor-pointer" asChild>
                  <a href="mailto:contact@joaosv.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
