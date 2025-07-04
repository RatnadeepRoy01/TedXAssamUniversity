"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const SOCIALS = [
  { name: "Instagram", url: "https://instagram.com/", icon: "/instagram.svg" },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: "/linkedin.svg" },
  { name: "YouTube", url: "https://youtube.com/", icon: "/youtube.svg" },
];

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.18, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col gap-12">
      <h1 className="text-4xl font-extrabold text-red-600 mb-2 text-center">Contact Us</h1>
      <div ref={formRef} className="flex flex-col md:flex-row gap-10 items-start">
        {/* Contact Form */}
        <form
          className="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-6"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <EnvelopeIcon className="w-6 h-6 text-red-600" />
            <span className="text-xl font-bold text-black dark:text-white">Send us a message</span>
          </div>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200"
          >
            {submitted ? "Thank you!" : "Send Message"}
          </button>
        </form>
        {/* Socials & Map */}
        <div className="flex-1 flex flex-col gap-8 items-center w-full">
          <div className="flex gap-6 mb-4">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
               <Image src={s.icon} alt={s.name} width={36} height={36} className="w-9 h-9" />
              </a>
            ))}
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border-2 border-red-600">
            <iframe
              title="Assam University Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.019370176794!2d92.7631453154326!3d24.68100798413459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374f1b6e2e2e2e2b%3A0x2e2e2e2e2e2e2e2e!2sAssam%20University!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 