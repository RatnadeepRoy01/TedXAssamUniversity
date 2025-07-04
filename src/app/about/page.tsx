"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.18, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div ref={aboutRef} className="max-w-3xl mx-auto py-20 px-4 flex flex-col gap-10">
      <section>
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">About TED & TEDx</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          <b>TED</b> is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. Founded in 1984, TED covers almost all topics — from science to business to global issues — in more than 100 languages.
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          <b>TEDx</b> events are independently organized under license from TED, bringing people together to share a TED-like experience in local communities around the globe.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Our Mission & Vision</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          TEDxAssam University aims to foster a culture of curiosity, creativity, and collaboration. Our mission is to inspire and empower the Assam University community and beyond by sharing ideas that matter, sparking meaningful conversations, and igniting positive change.
        </p>
      </section>
      <section className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50 dark:bg-gray-900/40">
        <blockquote className="text-xl italic text-gray-900 dark:text-white font-serif">
               TEDxAssam University is not just an event&mdash;it&apos;s a movement to celebrate ideas, innovation, and the spirit of Assam.
        </blockquote>
        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-semibold">— Dr. Ananya Sharma, Organizer</div>
      </section>
    </div>
  );
} 