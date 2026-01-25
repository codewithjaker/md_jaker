// components/footer.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">MJ</span>
              </div>
              <span className="font-bold text-xl">MD Jaker Hossain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Software engineer crafting exceptional digital experiences
            </p>
          </div>

          <div className="flex gap-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/codewithjaker" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/mohammad-jaker-hossain-114308295" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hidden md:flex"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MD Jaker Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
