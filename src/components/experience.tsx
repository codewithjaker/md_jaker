// components/experience.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { experiences } from "@/data/homeData";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (custom: number) => ({
    scale: 1,
    transition: {
      delay: 0.5 + custom * 0.3,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax effect for section title
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const toggleCardExpansion = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="experience"
      className="container mx-auto px-4 sm:px-6 py-10"
      ref={sectionRef}
    >
      <motion.div
        className="text-center mb-12 relative"
        style={{ y: titleY, opacity }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My journey through the tech industry, with roles that have shaped my
          skills and approach to software development.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated Timeline line */}
        <motion.div
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"
          variants={lineVariants}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            variants={itemVariants}
            custom={index}
          >
            {/* Animated Timeline dot */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background hidden md:block z-10"
              variants={dotVariants}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Date indicator on mobile */}
            <motion.div
              className="md:hidden mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              <Badge variant="outline" className="text-sm font-normal">
                <Calendar className="h-3 w-3 mr-1" />
                {exp.period}
              </Badge>
            </motion.div>

            {/* Content */}
            <motion.div
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => toggleCardExpansion(index)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.div
                        initial={false}
                        animate={{
                          color: expandedCards.includes(index)
                            ? "hsl(var(--primary))"
                            : "hsl(var(--foreground))",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardTitle className="flex items-center">
                          {exp.role}
                          <motion.div
                            animate={{
                              rotate: expandedCards.includes(index) ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="ml-2"
                          >
                            {expandedCards.includes(index) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </motion.div>
                        </CardTitle>
                      </motion.div>
                      <CardDescription className="text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="ml-2 hidden md:inline-flex"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <motion.div
                    className="flex items-center text-sm text-muted-foreground mt-2"
                    initial={false}
                    animate={{
                      opacity: expandedCards.includes(index) ? 0.8 : 1,
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </motion.div>
                </CardHeader>

                <CardContent>
                  <motion.p
                    className="mb-4"
                    initial={false}
                    animate={{
                      color: expandedCards.includes(index)
                        ? "hsl(var(--muted-foreground))"
                        : "hsl(var(--foreground))",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.description}
                  </motion.p>

                  <AnimatePresence>
                    {expandedCards.includes(index) && (
                      <motion.ul
                        className="space-y-2 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            opacity: { duration: 0.3 },
                            height: { duration: 0.4, ease: "easeInOut" },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3, ease: "easeInOut" },
                          },
                        }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: i * 0.1 },
                            }}
                          >
                            <motion.span
                              className="mr-2 text-primary"
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeInOut",
                              }}
                            >
                              •
                            </motion.span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="flex flex-wrap gap-2 mt-4"
                    layout
                    transition={{ duration: 0.3 }}
                  >
                    {exp.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.1 * i },
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="cursor-default">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Spacing for timeline */}
            <div className="hidden md:block w-2/12"></div>

            {/* Empty div for opposite side */}
            <div className="hidden md:block w-5/12"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating action button for expanding/collapsing all */}
      <motion.div
        className="fixed bottom-8 right-8 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (expandedCards.length === experiences.length) {
              setExpandedCards([]);
            } else {
              setExpandedCards(experiences.map((_, i) => i));
            }
          }}
        >
          {expandedCards.length === experiences.length
            ? "Collapse All"
            : "Expand All"}
        </motion.button>
      </motion.div>
    </section>
  );
}




// // For even more advanced animations, add these imports and hooks:

// import { useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'

// // Inside your component, add mouse tracking effects:
// const mouseX = useMotionValue(0)
// const mouseY = useMotionValue(0)

// function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
//   const { left, top } = currentTarget.getBoundingClientRect()
//   mouseX.set(clientX - left)
//   mouseY.set(clientY - top)
// }

// // And add this to your cards for mouse-follow spotlight effect:
// <motion.div
//   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
//   style={{
//     background: useMotionTemplate`
//       radial-gradient(
//         600px circle at ${mouseX}px ${mouseY}px,
//         rgba(120, 119, 198, 0.15),
//         transparent 80%
//       )
//     `
//   }}
// />