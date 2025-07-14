"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: "Instagram", url: "https://instagram.com/", icon: <Instagram className="w-7 h-7 text-red-500" /> },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: <Linkedin className="w-7 h-7 text-red-500" /> },
  { name: "YouTube", url: "https://youtube.com/", icon: <Youtube className="w-7 h-7 text-red-500" /> },
];

export default function Contact() {
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    if (formSectionRef.current) {
      gsap.fromTo(
        formSectionRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  function validate() {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Here you would send the form data to your backend or email service
    }
  }

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden flex flex-col">
      <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col gap-12 w-full">
        {/* Header with icon and subtitle */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <Mail size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
        <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">We&apos;d love to hear from you! Reach out for event info, partnership, or just to say hello.</p>
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
        {/* Contact Form & Info Section with scroll animation */}
        <div ref={formSectionRef} className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Contact Form */}
          <form
            className="flex-1 bg-[#232323] dark:bg-[#232323] rounded-xl shadow-lg p-8 flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex items-center gap-2 mb-2">
              <EnvelopeIcon className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-white">Send us a message</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-200">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 bg-[#232323] text-white focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-200">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 bg-[#232323] text-white focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 bg-[#232323] text-white focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200"
            >
              {submitted ? "Thank you!" : "Send Message"}
            </button>
          </form>
          {/* Info Cards Section */}
          <div className="flex-1 flex flex-col gap-6 items-center w-full justify-center">
            <div className="w-full grid gap-6">
              <div className="bg-[#232323] rounded-xl p-6 border border-red-500/30 flex items-center gap-4 w-full">
                <MapPin className="w-7 h-7 text-red-500" />
                <div>
                  <div className="font-bold text-white text-lg mb-1">Our Address</div>
                  <div className="text-gray-300 text-sm">Assam University, Silchar</div>
                </div>
              </div>
              <div className="bg-[#232323] rounded-xl p-6 border border-red-500/30 flex items-center gap-4 w-full">
                <Mail className="w-7 h-7 text-red-500" />
                <div>
                  <div className="font-bold text-white text-lg mb-1">Email Us</div>
                  <div className="text-gray-300 text-sm">tedxassamuniversity@gmail.com </div>
                </div>
              </div>
              <div className="bg-[#232323] rounded-xl p-6 border border-red-500/30 flex items-center gap-4 w-full">
                <Phone className="w-7 h-7 text-red-500" />
                <div>
                  <div className="font-bold text-white text-lg mb-1">Contact Us</div>
                  <div className="text-gray-300 text-sm">+91 86384 24729</div>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-6 mt-4 justify-center w-full">
              {SOCIALS.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform flex items-center justify-center">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <section className="py-16 bg-red-600 mt-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let’s Connect!</h2>
          <p className="text-xl text-red-100 mb-8">Have questions or want to partner with us? Reach out and be part of the TEDx Assam University journey.</p>
          <a href="mailto:tedxassamuniversity@gmail.com " className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Email Us</a>
        </div>
      </section>
      {/* Footer (copied from About/Schedule) */}
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
                <li><a href="/contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /><span>tedxassamuniversity@gmail.com </span></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /><span>+91 86384 24729</span></div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span>Assam University, Silchar</span></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Designed with ❤️ by TEDx Assam University Team | © 2025 All rights reserved</p>
            <p className="text-sm text-gray-500 mt-2">This independent TEDx event is operated under license from TED</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 