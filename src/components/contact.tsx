// components/contact.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
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
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const fieldVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const contactItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const iconVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
};

const checkIconVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // For scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // For form field focus animations
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with animation
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        duration: 3000,
        position: "top-center",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 py-10 overflow-hidden"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="relative overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    I typically respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-center py-12"
                      >
                        <div className="relative h-20 w-20 mx-auto mb-6">
                          <motion.div
                            className="absolute inset-0 rounded-full bg-green-500/20"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                          />
                          <CheckCircle className="h-20 w-20 text-green-500 relative" />
                        </div>
                        <motion.h3
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl font-bold mb-2"
                        >
                          Message Sent!
                        </motion.h3>
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-muted-foreground mb-6"
                        >
                          Thanks for reaching out. I'll get back to you as soon
                          as possible.
                        </motion.p>
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Button onClick={() => setIsSubmitted(false)}>
                            Send another message
                          </Button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            variants={fieldVariants}
                            className="space-y-2"
                          >
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Name
                            </label>
                            <motion.div
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Your name"
                                required
                                className={`transition-all duration-300 ${
                                  focusedField === "name"
                                    ? "ring-2 ring-primary ring-offset-2"
                                    : ""
                                }`}
                              />
                            </motion.div>
                          </motion.div>
                          <motion.div
                            variants={fieldVariants}
                            className="space-y-2"
                          >
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email
                            </label>
                            <motion.div
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Your email"
                                required
                                className={`transition-all duration-300 ${
                                  focusedField === "email"
                                    ? "ring-2 ring-primary ring-offset-2"
                                    : ""
                                }`}
                              />
                            </motion.div>
                          </motion.div>
                        </div>

                        <motion.div
                          variants={fieldVariants}
                          className="space-y-2"
                        >
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <motion.div
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("subject")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="What is this regarding?"
                              required
                              className={`transition-all duration-300 ${
                                focusedField === "subject"
                                  ? "ring-2 ring-primary ring-offset-2"
                                  : ""
                              }`}
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          variants={fieldVariants}
                          className="space-y-2"
                        >
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <motion.div
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Your message here..."
                              rows={6}
                              required
                              className={`transition-all duration-300 ${
                                focusedField === "message"
                                  ? "ring-2 ring-primary ring-offset-2"
                                  : ""
                              }`}
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          variants={fieldVariants}
                          onHoverStart={() => setIsHovered(true)}
                          onHoverEnd={() => setIsHovered(false)}
                        >
                          <motion.div
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <Button
                              type="submit"
                              className="w-full group relative overflow-hidden"
                              disabled={isSubmitting}
                            >
                              {/* Animated background */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                                initial={false}
                                animate={{
                                  x: isHovered ? "0%" : "-100%",
                                }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className="relative flex items-center justify-center">
                                {isSubmitting ? (
                                  <>
                                    <motion.div
                                      className="h-4 w-4 rounded-full border-2 border-current border-t-transparent mr-2"
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                    />
                                    Sending...
                                  </>
                                ) : (
                                  <>
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                    <motion.div
                                      className="ml-2"
                                      initial={{ x: -5, opacity: 0 }}
                                      animate={{
                                        x: isHovered ? 0 : -5,
                                        opacity: isHovered ? 1 : 0,
                                      }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ArrowRight className="h-4 w-4" />
                                    </motion.div>
                                  </>
                                )}
                              </span>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -3,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: <Mail className="h-5 w-5 text-primary" />,
                    title: "Email",
                    value: "programmingwithjaker@gmail.com",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5 text-primary" />,
                    title: "Linkedin",
                    value:
                      "https://www.linkedin.com",
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-primary" />,
                    title: "Phone",
                    value: "+8801329859741",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-primary" />,
                    title: "Location",
                    value: "Feni, Bangladesh",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={contactItemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-1/4 left-5 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-5 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.section>
  );
}
