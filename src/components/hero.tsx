// components/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
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
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 90 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03 + 0.3,
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    }),
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const scrollButtonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  // Split the title into words and letters for character animation
  const titleWords = "Building digital experiences that make a difference".split(" ");
 
  return (
    <section
      id="home"
      className="container mx-auto px-4 sm:px-6 py-10 overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div
          variants={badgeVariants}
          className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 backdrop-blur-sm bg-background/50"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-green-500 mr-2"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Main Title with Character Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          variants={titleVariants}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {titleWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    custom={wordIndex * 10 + letterIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={paragraphVariants}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a software engineer specializing in building exceptional digital
          experiences. Currently focused on creating accessible, human-centered
          products at scale.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={buttonContainerVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" className="gap-2" asChild>
              <Link href="#projects">
                View my work
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={socialVariants}
          className="flex gap-6 justify-center mb-10"
        >
          {[
            { icon: Github, href:"https://github.com/codewithjaker" , label: "GitHub" },
            { icon: Linkedin, href:"https://www.linkedin.com/in/mohammad-jaker-hossain-114308295", label: "LinkedIn" },
            { icon: Mail, href: "mailto:programmingwithjaker@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.div
              key={index}
              variants={socialItemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  },
                }}
              >
                <Button variant="ghost" size="icon" asChild className="relative group">
                  <Link href={social.href} target={social.label !== "Email" ? "_blank" : "_self"}>
                    <social.icon className="h-5 w-5" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      text-xs whitespace-nowrap bg-background px-2 py-1 rounded border">
                      {social.label}
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Animated Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}