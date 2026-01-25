import { Code, Link } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
        <Code className="text-white text-lg" />
      </div>
      <span className="text-xl font-bold">SkillBasedIT</span>
    </Link>
  );
};

export default Logo;
