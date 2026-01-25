// components/projects.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Code, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/homeData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverCardVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const imageHoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Add image optimization to next.config.js
  useEffect(() => {
    console.log("Projects component mounted with Unsplash images");
  }, []);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 sm:px-6 py-10 scroll-mt-20"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection of my recent work. Each project demonstrates my
            approach to
            <span className="text-primary font-medium">
              {" "}
              problem-solving
            </span>{" "}
            and
            <span className="text-primary font-medium">
              {" "}
              attention to detail
            </span>
            .
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              variants={hoverCardVariants}
              initial="rest"
              whileHover="hover"
              animate={hoveredCard === index ? "hover" : "rest"}
              className="h-full"
            >
              <Card className="overflow-hidden group h-full border-2 hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm pt-0">
                {/* Project Image with Overlay */}
                <div className="relative h-70 w-full overflow-hidden">
                  <motion.div
                    variants={imageHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    animate={hoveredCard === index ? "hover" : "rest"}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700"
                      priority={index < 2}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                          Featured
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 5 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-primary"
                    >
                      <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Project Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs px-3 py-1 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex w-full gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 group/btn hover:border-primary transition-all"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Github className="h-4 w-4" />
                        </motion.div>
                        <span>Code</span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-xs opacity-0 group-hover/btn:opacity-100 transition-all"
                        >
                          <Code className="h-3 w-3" />
                        </motion.div>
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 group/btn hover:shadow-lg transition-all"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ rotate: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Eye className="h-4 w-4" />
                        </motion.div>
                        <span>Live Demo</span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-xs opacity-0 group-hover/btn:opacity-100 transition-all"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </motion.div>
                      </a>
                    </Button>
                  </div>
                </CardFooter>

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
