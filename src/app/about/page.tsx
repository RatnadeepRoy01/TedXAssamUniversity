"use client"
import React from "react";
import Image from "next/image";
import { Users, Award, Heart, Target, Eye, Globe, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Attendees" },
  { number: "25+", label: "Speakers" },
  { number: "5", label: "Years" },
  { number: "50+", label: "Ideas Shared" },
];

const values = [
  {
    icon: <Heart size={32} className="text-red-500" />, title: "Passion",
    description: "Celebrating the drive and dedication that turns ideas into reality."
  },
  {
    icon: <Globe size={32} className="text-red-500" />, title: "Global Impact",
    description: "Connecting local voices with worldwide movements to create meaningful change."
  },
  {
    icon: <Users size={32} className="text-red-500" />, title: "Community",
    description: "Building a diverse ecosystem of thinkers, creators, and changemakers."
  },
  {
    icon: <Target size={32} className="text-red-500" />, title: "Innovation",
    description: "Fostering breakthrough ideas that challenge conventional thinking and inspire creative solutions."
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden">
      {/* Hero Section with Fixed, Bright Background */}
      <section className="relative h-[60vh] w-[100vw] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full hero-bg"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/ptcg0bvf3/TEDx/Others/sivasagar1.jpg?updatedAt=1752335873617')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            filter: "contrast(1.15) saturate(1.3)",
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-[#232323] rounded-xl p-8 border border-red-500/30 hover:border-red-500 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Section Break - SVG Wave with transparency */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', background: 'transparent' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <path fill="url(#waveGradient)" fillOpacity="0.7" d="M0,40 C360,120 1080,-40 1440,40 L1440,80 L0,80 Z" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* About Section */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <Award size={28} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Are</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            TEDx Assam University is an independently organized TED event that brings together brilliant minds, innovative ideas, and inspiring stories from across the Northeast region of India. We are committed to creating a platform where ideas worth spreading can flourish and reach audiences who can turn them into action.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our event showcases the rich diversity of thought, culture, and innovation that defines our region, while connecting local voices to global conversations that matter.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <div className="bg-[#232323] rounded-2xl p-8 border border-red-500/30">
            <div className="flex items-center mb-4">
              <Target size={28} className="text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To foster a culture of innovation and intellectual curiosity by providing a platform for groundbreaking ideas, inspiring stories, and transformative conversations that can shape our collective future.
            </p>
          </div>
          <div className="bg-[#232323] rounded-2xl p-8 border border-red-500/30">
            <div className="flex items-center mb-4">
              <Eye size={28} className="text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the premier intellectual gathering in Northeast India, where diverse minds converge to share ideas that inspire action, drive innovation, and create lasting positive impact in our communities and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image 
              src="/rev.png" 
              alt="TEDx Event" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-2xl object-cover w-full h-48 sm:h-64 md:h-80 lg:h-[400px]" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">Celebrating Ideas, Inspiring Change</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Our events are more than just talks—they are experiences that ignite curiosity, foster connections, and inspire action. Join us as we celebrate the power of ideas to transform our world.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Engaging speakers from diverse backgrounds</li>
              <li>Interactive sessions and workshops</li>
              <li>Networking with changemakers</li>
              <li>Celebration of local culture and innovation</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <Heart size={28} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-[#232323] rounded-xl p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Be Part of the Movement</h2>
          <p className="text-xl text-red-100 mb-8">Join us in spreading ideas that matter. Whether you want to attend, volunteer, or partner with us, your journey starts here.</p>
          <Link href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-red-500 mb-4">TEDx Assam University</h3>
              <p className="text-gray-400 mb-4">Bringing ideas worth spreading to the heart of Northeast India.</p>
              <div className="flex space-x-4">
                {/* Social icons can be added here */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="/speakers" className="hover:text-red-500 transition-colors">Speakers</a></li>
                <li><a href="/schedule" className="hover:text-red-500 transition-colors">Schedule</a></li>
                <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /><span>info@tedxassamuniversity.com</span></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /><span>+91 98765 43210</span></div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span>Assam University, Silchar</span></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Designed with ❤️ by TEDx Assam University Team | © 2024 All rights reserved</p>
            <p className="text-sm text-gray-500 mt-2">This independent TEDx event is operated under license from TED</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;