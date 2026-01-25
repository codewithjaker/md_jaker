// components/hero-section.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users, Award, Clock, Star } from 'lucide-react';
import Image from 'next/image';
// import { Logo, LogoHorizontal } from '@/components/logo';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Logo and Badge */}
            <div className="space-y-4">
              {/* <LogoHorizontal size="lg" className="text-white" /> */}
              <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                Premier Software Training Institute
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Develop Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  IT Skills
                </span>
                Become Industry Expert
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Skill Based IT is the premier software training institute with the highest number of seats 
                and departments in the greater Fen/Moaknail area. With experienced mentors and updated curriculum, 
                we're ready to help you advance your career in technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-blue-400 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold">5K+</span>
                </div>
                <p className="text-sm text-gray-300">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-green-400 mb-2">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <p className="text-sm text-gray-300">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm text-gray-300">Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-red-400 mb-2">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-sm text-gray-300">Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Seminar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Government Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Job Placement</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Skill Based IT Students"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Certified</p>
                    <p className="text-gray-300 text-sm">Courses</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">5K+</p>
                    <p className="text-gray-300 text-sm">Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}