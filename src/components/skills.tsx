// components/skills.tsx - Alternative Modern Version
"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code2, Database, Cloud, Zap, TrendingUp } from "lucide-react";
import { skillCategories } from "@/data/homeData";



const SkillBar = ({ skill, delay }: { skill: any; delay: number }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, amount: 0.5 });

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{skill.name}</span>
        <motion.span
          className="text-xs font-semibold bg-secondary px-2 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.8 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 0.2,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "100%" } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      className="relative overflow-hidden container mx-auto px-4 sm:px-6 py-10"
      ref={ref}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Zap className="h-6 w-6 text-primary" />
            <Badge variant="secondary" className="text-sm">
              <TrendingUp className="h-3 w-3 mr-1" />
              Expertise Growth
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Continuously evolving with modern technologies. Here's my current
            expertise breakdown.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="pt-8 pb-6 relative z-10">
                    <motion.div
                      className="flex items-center justify-center mb-6"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-center mb-8"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                    >
                      {category.category}
                    </motion.h3>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill}
                          delay={0.4 + categoryIndex * 0.1 + skillIndex * 0.05}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating animated elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [-20, 20, -20],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-secondary"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [-20, 20, -20],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}
