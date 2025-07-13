"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CalendarDays, Mail, Phone, MapPin, Mic, Users, Music } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <Mic size={32} className="text-red-500" />, 
    title: "Keynote Speaker",
    description: "Hear from Riya Das on the future of Human-AI Collaboration."
  },
  {
    icon: <Users size={32} className="text-red-500" />, 
    title: "Panel Discussion",
    description: "Experts discuss Innovation in Assam and the region's bright future."
  },
  {
    icon: <Music size={32} className="text-red-500" />, 
    title: "Cultural Performance",
    description: "Experience the vibrant culture of Assam through live performances."
  },
];

const schedule = [
  { time: "09:00 AM", type: "opening", label: "Registration & Welcome Tea" },
  { time: "10:00 AM", type: "talk", speaker: "Riya Das", topic: "The Future of Human-AI Collaboration" },
  { time: "10:40 AM", type: "talk", speaker: "Dr. Arup Kalita", topic: "Rivers of Assam: Lifelines at Risk" },
  { time: "11:20 AM", type: "break", label: "Tea Break" },
  { time: "11:40 AM", type: "talk", speaker: "Meghna Baruah", topic: "Storytelling Through Visual Art" },
  { time: "12:20 PM", type: "break", label: "Lunch Break" },
  { time: "01:30 PM", type: "panel", label: "Panel Discussion: Innovation in Assam" },
  { time: "02:30 PM", type: "performance", label: "Cultural Performance" },
  { time: "03:00 PM", type: "closing", label: "Closing Remarks & Networking" },
];

export default function Schedule() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    timelineRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden flex flex-col">
      <div className="max-w-3xl mx-auto py-20 px-4 w-full">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <CalendarDays size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Event Schedule</h1>
        </div>
        <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">A day packed with inspiring talks, engaging sessions, and networking opportunities. Here’s what’s in store for TEDx Assam University!</p>
        {/* Event Highlights Section */}
        <section className="mb-14">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <CalendarDays size={28} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Event Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="bg-[#232323] rounded-xl p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300 flex flex-col items-center text-center shadow-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Decorative SVG Wave */}
        <div className="relative w-full overflow-hidden mb-10" style={{ height: '60px', background: 'transparent' }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <path fill="url(#waveGradient)" fillOpacity="0.7" d="M0,30 C360,90 1080,-30 1440,30 L1440,60 L0,60 Z" />
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.03" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Timeline with scroll-triggered animation */}
        <div className="relative border-l-4 border-red-600 pl-8 flex flex-col gap-10">
          {schedule.map((item, i) => (
            <div
              key={i}
              ref={el => { timelineRefs.current[i] = el; }}
              className="relative group"
            >
              <div className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white dark:border-black shadow-lg group-hover:scale-125 transition-transform" />
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="font-mono text-lg text-red-600 min-w-[100px]">{item.time}</div>
                <div>
                  {item.type === "talk" && (
                    <div>
                      <div className="font-bold text-black dark:text-white">{item.speaker}</div>
                      <div className="text-gray-700 dark:text-gray-300">{item.topic}</div>
                    </div>
                  )}
                  {item.type !== "talk" && (
                    <div className="font-semibold text-black dark:text-white">{item.label}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action Section */}
      <section className="py-16 bg-red-600 mt-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Don’t Miss Out!</h2>
          <p className="text-xl text-red-100 mb-8">Be part of an unforgettable day of ideas, inspiration, and connection. Reserve your spot or reach out for more info.</p>
          <Link href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Contact Us</Link>
        </div>
      </section>
      {/* Footer (copied from About) */}
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
} 