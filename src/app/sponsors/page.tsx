"use client";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const sponsors = [
  { name: "Adons", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/official%20logo%20of%20AdOns%20(1).jpg?updatedAt=1752328713850", url: "#" },
  { name: "Adbark Threads", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/IMG-20250708-WA0004.jpg?updatedAt=1752328713825", url: "#" },
  { name: "GPlus", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/Gplulogo.jpg?updatedAt=1752328695494", url: "#" },
  { name: "HealthFab", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/1717406592Photo%20by%20%20-%202024-06-03T145215.721.png?updatedAt=1752328680880", url: "#" },
  { name: "HealthFab", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/43sssss_583846cc-aaae-4dd4-8093-ae2031254476.png?updatedAt=1752328651719", url: "#" },
];

const SponsorCard = ({ sponsor }: { sponsor: typeof sponsors[0] }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} bg-[#232323] border border-red-500 rounded-xl shadow hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 p-4 md:p-6 relative w-full min-h-[300px]`}
      style={{ maxWidth: 340 }}
    >
      <div className="w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
        <Image src={sponsor.logo} alt={sponsor.name} width={220} height={110} className="object-contain w-full h-full" />
      </div>
      <span className="text-white font-bold text-lg md:text-xl mb-1">{sponsor.name}</span>
      <span className="text-gray-400 text-xs md:text-sm mb-2">Proud Partner</span>
      <span className="text-gray-300 text-sm md:text-base mb-3">Leading supporter of TEDx Assam University.</span>
      {sponsor.url !== "#" && (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-red-700 transition-colors shadow"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default function Sponsors() {
  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden flex flex-col md:mt-0 mt-10">
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <Star size={28} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Sponsors</h2>
          </div>
          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
            {sponsors.map((sponsor, i) => (
              <SponsorCard key={i} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action for Potential Sponsors */}
      <section className="py-16 bg-red-600 mt-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Become a Sponsor</h2>
          <p className="text-xl text-red-100 mb-8">Partner with us to support ideas worth spreading and gain visibility among changemakers. Get in touch to learn more about sponsorship opportunities.</p>
          <a href="mailto:info@tedxassamuniversity.com" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Contact Us</a>
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
                <li><a href="/contact" className="hover:text-red-500 transition-colors">Contact</a></li>
                <li><a href="/sponsors" className="hover:text-red-500 transition-colors">Sponsors</a></li>
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