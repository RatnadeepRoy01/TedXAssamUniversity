"use client"
import React from "react";
import SpeakerPhotoGrid from "../expandable-cards";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Speakers() {
  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden">
      {/* Intro Section */}
      <section className="py-10 bg-[#232526] border-b border-gray-800 md:mt-0 mt-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Welcome to TEDx Assam University 2024</h2>
          <p className="text-lg text-gray-300 mb-2">Experience a day of inspiration, innovation, and connection as we bring together thought leaders, visionaries, and changemakers from across the region.</p>
        </div>
      </section>
      {/* Theme Highlight */}
      <section className="py-6  border-b border-gray-800">
        <div className="max-w-2xl mx-auto text-center px-4">
          <span className="inline-block bg-white text-red-600 font-bold px-6 py-2 rounded-full text-lg shadow-lg tracking-wider">2025 Theme: "Voice of the East"</span>
        </div>
      </section>
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-10 text-center flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <span className="inline-block w-10 h-1 bg-red-500 rounded-full mr-2" />
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-red-500"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="currentColor" /></svg>
              <span className="inline-block w-10 h-1 bg-red-500 rounded-full ml-2" />
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-2 tracking-wide">Our Speakers</h3>
            <div className="flex justify-center gap-4 mb-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-red-400"><rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/></svg>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-red-400"><rect x="11" y="4" width="2" height="16" rx="1" fill="currentColor"/></svg>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-red-400"><rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/></svg>
            </div>
          </div>
          <SpeakerPhotoGrid bgColor="black" showNameAndBioBelow={true} />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Be Part of the Movement</h2>
          <p className="text-xl text-red-100 mb-8">Join us in spreading ideas that matter. Whether you want to attend, volunteer, or partner with us, your journey starts here.</p>
          <a href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Contact Us</a>
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
                <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
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