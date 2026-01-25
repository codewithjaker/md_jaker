// components/about.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Rocket,
  Users,
  BookOpen,
  Target,
  Coffee,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Zap,
  Palette,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    { icon: <Code className="h-4 w-4" />, label: "Open Source" },
    { icon: <Rocket className="h-4 w-4" />, label: "Startups" },
    { icon: <BookOpen className="h-4 w-4" />, label: "Technical Writing" },
    { icon: <Users className="h-4 w-4" />, label: "Mentoring" },
    { icon: <Globe className="h-4 w-4" />, label: "Web3" },
    { icon: <Coffee className="h-4 w-4" />, label: "Coffee Brewing" },
  ];

  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "80%", label: "Client Satisfaction" },
    { value: "10k+", label: "Lines of Code" },
  ];

  const principles = [
    {
      title: "User-Centric Design",
      description:
        "Building with the end-user in mind, ensuring intuitive and accessible interfaces.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code that stands the test of time.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Continuous Learning",
      description:
        "Staying current with emerging technologies and industry best practices.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Performance First",
      description:
        "Optimizing for speed and efficiency at every layer of the application.",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 py-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Crafting Digital Solutions with Precision
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I bridge the gap between complex technical requirements and
            intuitive user experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          <div className="lg:col-span-2">
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-lg">
                  I'm a passionate software engineer with over 1.5 years of
                  experience building scalable web applications. My journey
                  started with tinkering with HTML/CSS as a teenager, which
                  evolved into a deep fascination with solving complex problems
                  through code.
                </p>
                <p>
                  Today, I specialize in full-stack development with a focus on
                  creating performant, accessible, and maintainable
                  applications. I believe that great software is built through
                  collaboration, continuous learning, and attention to detail.
                </p>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-2xl font-semibold">What Drives Me</h3>
                <p>
                  I'm motivated by the challenge of transforming complex
                  requirements into elegant solutions. Whether it's optimizing a
                  slow database query, architecting a new microservice, or
                  polishing a user interface, I find joy in the craftsmanship of
                  software development.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={statVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Core Principles
                  </h3>
                  <div className="space-y-6">
                    {principles.map((principle, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <div className="text-primary">{principle.icon}</div>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {principle.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs
            defaultValue="overview"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Overview
                </motion.div>
              </TabsTrigger>
              <TabsTrigger value="approach" asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  My Approach
                </motion.div>
              </TabsTrigger>
              <TabsTrigger value="interests" asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Interests
                </motion.div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">
                          Technical Philosophy
                        </h4>
                        <p>
                          I believe in using the right tool for the job. While I
                          have my preferred technologies, I'm always open to
                          learning new ones that better solve the problem at
                          hand. My focus is on creating solutions that are not
                          only functional today but maintainable for years to
                          come.
                        </p>
                        <motion.div
                          className="flex items-center gap-2 pt-2"
                          whileHover={{ x: 5 }}
                        >
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">
                            Current Focus: Building scalable SaaS platforms with
                            Next.js and cloud-native technologies
                          </span>
                        </motion.div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Beyond Code</h4>
                        <p>
                          When I'm not coding, you'll find me contributing to
                          open-source projects, writing technical articles, or
                          mentoring junior developers. I'm passionate about
                          sharing knowledge and helping others grow in their
                          tech careers.
                        </p>
                        <motion.div
                          className="flex items-center gap-2 pt-2"
                          whileHover={{ x: 5 }}
                        >
                          <Database className="h-5 w-5 text-primary" />
                          <span className="font-medium">
                            Always Learning: Currently exploring distributed
                            systems and edge computing
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="approach" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">
                          Development Workflow
                        </h4>
                        <p>
                          My process begins with understanding the problem
                          deeply before writing any code. I prioritize clear
                          communication with stakeholders, thorough planning,
                          and iterative development with frequent feedback
                          loops.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h5 className="font-semibold">Key Practices:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              number: 1,
                              title: "Test-Driven Development",
                              desc: "Writing tests first ensures robust, reliable code",
                            },
                            {
                              number: 2,
                              title: "Continuous Integration",
                              desc: "Automated testing and deployment pipelines",
                            },
                            {
                              number: 3,
                              title: "Code Reviews",
                              desc: "Collaborative improvement and knowledge sharing",
                            },
                            {
                              number: 4,
                              title: "Performance Monitoring",
                              desc: "Proactive optimization based on real metrics",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                                whileHover={{ scale: 1.2 }}
                              >
                                <span className="text-xs font-bold">
                                  {item.number}
                                </span>
                              </motion.div>
                              <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {item.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="interests" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">
                          Beyond the Keyboard
                        </h4>
                        <p>
                          A balanced life fuels creativity and productivity.
                          Here's what I enjoy when I'm not solving technical
                          challenges:
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          {interests.map((interest, index) => (
                            <motion.div
                              key={index}
                              className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent/20 cursor-pointer"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                                ease: "easeOut",
                              }}
                              whileHover={{
                                y: -4,
                                scale: 1.02,
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                                borderColor: "rgb(59, 130, 246)",
                                transition: {
                                  type: "spring",
                                  stiffness: 400, // Higher = snappier
                                  damping: 25, // Lower = more bounce
                                  mass: 0.5, // Lower = faster response
                                  duration: 0.2,
                                },
                              }}
                              whileTap={{
                                scale: 0.98,
                                transition: { duration: 0.1 },
                              }}
                            >
                              <motion.div
                                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                                whileHover={{
                                  rotate: 180,
                                  scale: 1.1,
                                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                                  transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 15,
                                    duration: 0.3,
                                  },
                                }}
                              >
                                {interest.icon}
                              </motion.div>
                              <span className="text-sm font-medium text-center">
                                {interest.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-4">
                        <h5 className="font-semibold">Current Side Projects</h5>
                        <ul className="space-y-2">
                          {[
                            "Building an open-source developer tool for API testing",
                            "Contributing to a TypeScript framework for edge functions",
                            "Writing a technical blog series on modern web architecture",
                          ].map((project, index) => (
                            <motion.li
                              key={index}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <motion.div
                                className="h-2 w-2 rounded-full bg-primary"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2,
                                  delay: index * 0.5,
                                }}
                              ></motion.div>
                              <span>{project}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}
