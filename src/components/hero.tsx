// // components/hero.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToAbout = () => {
//     const element = document.querySelector("#about");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const badgeVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       rotateX: 90
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: {
//       opacity: 0,
//       y: 40
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.2,
//       },
//     },
//   };

//   const letterVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.03 + 0.3,
//         type: "spring",
//         stiffness: 150,
//         damping: 12,
//       },
//     }),
//   };

//   const paragraphVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.6,
//       },
//     },
//   };

//   const buttonContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.8,
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   const socialVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 1.1,
//       },
//     },
//   };

//   const socialItemVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 12,
//       },
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   };

//   const scrollButtonVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 1.5,
//         type: "spring",
//         stiffness: 150,
//         damping: 12,
//       },
//     },
//     hover: {
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 10,
//       },
//     },
//   };

//   const floatingVariants = {
//     float: {
//       y: [-10, 10],
//       transition: {
//         y: {
//           repeat: Infinity,
//           repeatType: "reverse",
//           duration: 2,
//           ease: "easeInOut",
//         },
//       },
//     },
//   };

//   // Split the title into words and letters for character animation
//   const titleWords = "Building digital experiences that make a difference".split(" ");

//   return (
//     <section
//       id="home"
//       className="container mx-auto px-4 sm:px-6 py-10 overflow-hidden"
//     >
//       <motion.div
//         className="max-w-4xl mx-auto text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Availability Badge */}
//         <motion.div
//           variants={badgeVariants}
//           className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 backdrop-blur-sm bg-background/50"
//         >
//           <motion.span
//             className="h-2 w-2 rounded-full bg-green-500 mr-2"
//             animate={{
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 2,
//               ease: "easeInOut",
//             }}
//           />
//           <span>Available for new opportunities</span>
//         </motion.div>

//         {/* Main Title with Character Animation */}
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
//           variants={titleVariants}
//         >
//           <div className="flex flex-wrap justify-center gap-2 mb-2">
//             {titleWords.map((word, wordIndex) => (
//               <motion.span
//                 key={wordIndex}
//                 className="inline-block"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {word.split("").map((letter, letterIndex) => (
//                   <motion.span
//                     key={`${wordIndex}-${letterIndex}`}
//                     custom={wordIndex * 10 + letterIndex}
//                     variants={letterVariants}
//                     className="inline-block"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//                 <span className="inline-block">&nbsp;</span>
//               </motion.span>
//             ))}
//           </div>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           variants={paragraphVariants}
//           className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
//         >
//           I'm a software engineer specializing in building exceptional digital
//           experiences. Currently focused on creating accessible, human-centered
//           products at scale.
//         </motion.p>

//         {/* Call-to-Action Buttons */}
//         <motion.div
//           variants={buttonContainerVariants}
//           className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//         >
//           <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//             <Button size="lg" className="gap-2" asChild>
//               <Link href="#projects">
//                 View my work
//               </Link>
//             </Button>
//           </motion.div>
//           <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//             <Button size="lg" variant="outline" className="gap-2" asChild>
//               <Link href="#contact">
//                 <Mail className="h-4 w-4" />
//                 Get in touch
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           variants={socialVariants}
//           className="flex gap-6 justify-center mb-10"
//         >
//           {[
//             { icon: Github, href:"https://github.com/codewithjaker" , label: "GitHub" },
//             { icon: Linkedin, href:"https://www.linkedin.com/in/mohammad-jaker-hossain-114308295", label: "LinkedIn" },
//             { icon: Mail, href: "mailto:programmingwithjaker@gmail.com", label: "Email" },
//           ].map((social, index) => (
//             <motion.div
//               key={index}
//               variants={socialItemVariants}
//               whileHover="hover"
//               whileTap={{ scale: 0.9 }}
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 360,
//                   transition: {
//                     type: "spring",
//                     stiffness: 200,
//                     damping: 10,
//                   },
//                 }}
//               >
//                 <Button variant="ghost" size="icon" asChild className="relative group">
//                   <Link href={social.href} target={social.label !== "Email" ? "_blank" : "_self"}>
//                     <social.icon className="h-5 w-5" />
//                     <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                       text-xs whitespace-nowrap bg-background px-2 py-1 rounded border">
//                       {social.label}
//                     </span>
//                   </Link>
//                 </Button>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Background Animated Elements */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//           animate={{
//             scale: [1, 1.1, 1],
//             x: [0, 30, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, -20, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 0.5,
//           }}
//         />
//       </motion.div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-primary/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -100],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// components/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90,
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
      y: 40,
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
      y: 20,
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
      y: 30,
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
      scale: 0.8,
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
      scale: 0,
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Split the title into words and letters for character animation
  const titleWords =
    "Building digital experiences that make a difference ".split(" ");

  return (
    <section
      id="home"
      className="container mx-auto px-4 sm:px-6 pt-6 overflow-hidden"
    >
      {/* Your Hero component with mobile-responsive order swapping */}
      <div className="flex flex-col lg:flex-row items-center py-6 justify-between gap-12 max-w-7xl mx-auto">
        {/* For Mobile: Image First (Right Content) */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center order-1 lg:order-2 lg:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-background shadow-2xl group">
              {/* Placeholder Image - Replace with your actual image */}
              <Image
                src="/profile.jpg" // Replace with your actual image path
                alt="Mohammad Jaker Hossain - React Developer"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <p className="text-sm lg:hidden">Mohammed Zohirul Islam</p>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-4 border-primary/30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border-4 border-secondary/30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />

            {/* Info Cards */}
            {/* <motion.div
              className="absolute -top-3 -left-3 bg-background p-2 rounded-md shadow border w-32 md:w-36"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-green-500 font-semibold text-[11px]">
                    5+
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold leading-tight">
                    Years Experience
                  </p>
                  <p className="text-[9px] text-muted-foreground leading-tight">
                    Project Management
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -right-3 bg-background p-2 rounded-md shadow border w-32 md:w-36"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500 font-semibold text-[11px]">
                    25+
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold leading-tight">
                    Projects Delivered
                  </p>
                  <p className="text-[9px] text-muted-foreground leading-tight">
                    On Time & Budget
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* Info Cards - Mobile First Design */}
            <motion.div
              className="absolute bg-background rounded-md shadow-lg border backdrop-blur-sm"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                top: "-0.75rem",
                left: "-0.75rem",
                padding: "0.5rem",
                width: "6.5rem",
              }}
              // Responsive styles using CSS variables
              // sm:top-[-0.75rem] sm:left-[-0.75rem] md:top-[-1rem] md:left-[-1rem]
              // lg:top-[-1.25rem] lg:left-[-1.25rem]
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-400/20 flex items-center justify-center flex-shrink-0 ring-1 ring-green-500/30">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                    1+
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-tight text-foreground">
                    Years
                  </p>
                  <p className="text-[8px] text-muted-foreground leading-tight">
                    Management
                  </p>
                  {/* <p className="text-[10px] font-bold leading-tight text-foreground">
                    Years 
                  </p>
                  <p className="text-[8px] text-muted-foreground leading-tight">
                    Management
                  </p> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bg-background rounded-md shadow-lg border backdrop-blur-sm"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              style={{
                bottom: "-0.75rem",
                right: "-0.75rem",
                padding: "0.5rem",
                width: "6.5rem",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center flex-shrink-0 ring-1 ring-blue-500/30">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                    15+
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-tight text-foreground">
                    Projects
                  </p>
                  <p className="text-[8px] text-muted-foreground leading-tight">
                    Delivered
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* For Mobile: Text Second (Left Content) */}
        <motion.div
          className="lg:w-1/2 order-2 lg:order-1"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center lg:text-left"
            variants={titleVariants}
          >
            <div className="flex flex-wrap gap-2 mb-2 justify-center lg:justify-start">
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
            className="text-xl text-muted-foreground mb-10 max-w-2xl text-center lg:text-left leading-relaxed mx-auto lg:mx-0"
          >
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently focused on creating accessible,
            human-centered products at scale.
          </motion.p>

          {/* Content Wrapper for Buttons and Social Links */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
            {/* Call-to-Action Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-16"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" className="gap-2" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
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
              className="flex gap-2 justify-center lg:justify-start mb-10 lg:mb-10"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/codewithjaker",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mohammad-jaker-hossain-114308295",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:programmingwithjaker@gmail.com",
                  label: "Email",
                },
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
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="relative group"
                    >
                      <Link
                        href={social.href}
                        target={social.label !== "Email" ? "_blank" : "_self"}
                      >
                        <social.icon className="h-5 w-5" />
                        <span
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    text-xs whitespace-nowrap bg-background px-2 py-1 rounded border"
                        >
                          {social.label}
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Animated Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"
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
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"
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
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
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
