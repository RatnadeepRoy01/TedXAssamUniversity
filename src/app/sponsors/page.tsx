"use client";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const sponsors = [
  { name: "Explore Valley", type:"Official Media Partener", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.06%20PM%20(1).jpeg?updatedAt=1752427921284", url: "#" },
  { name: "Just Assam Things", type:"Regional Buzz Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.16.13%20PM.jpeg?updatedAt=1752427921171", url: "#" },
  { name: "NIT Silchar", type:"Tech Synergy Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM%20(5).jpeg?updatedAt=1752427927157", url: "#" },
  { name: "Silchar Live", type:"Outreach Media Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM.jpeg?updatedAt=1752427927225", url: "#" },
  { name: "Gplus", type:"Associate Media Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.06%20PM.jpeg?updatedAt=1752427925322", url: "#" },

  { name: "AD MANDI", type:"Brochure Design Partner", logo: "https://admandi.in/wp-content/uploads/2024/12/Asset-2@500x.png", url: "#" },
  { name: "Adons", type:"Social Media Post Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/official%20logo%20of%20AdOns%20(1).jpg?updatedAt=1752429174580", url: "#" },
  { name: "bikecentersilchar", type:"Gear Garage Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.16.11%20PM.jpeg?updatedAt=1752427921245", url: "#" },
  { name: "Korou Lab", type:"Visual Production Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.08%20PM.jpeg?updatedAt=1752427926840", url: "#" },
  { name: "Agartala Smart City Limited", type:"Strategic Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.06%20PM%20(2).jpeg?updatedAt=1752427921248", url: "#" },
  { name: "Qelica", type:"Oral Care Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM%20(3).jpeg?updatedAt=1752427926761", url: "#" },
  
  { name: "Pratha", type:"Knowledge and strategy Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.22.07%20PM.jpeg?updatedAt=1752427921358", url: "#" },
  { name: "Unnoti Classes", type:"Supporting Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM%20(1).jpeg?updatedAt=1752427926752", url: "#" },
  { name: "Leo Club of Greater Silchar", type:"Supporting Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM%20(4).jpeg?updatedAt=1752427926747", url: "#" },
  { name: "Adbark Threads", type:"Merchandise Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.16.12%20PM.jpeg?updatedAt=1752427921124", url: "#" },
  { name: "Assam Startup", type:"Ecosystem Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.38.07%20PM%20(2).jpeg?updatedAt=1752427926839", url: "#" },


  { name: "Upanjali", type:"PR and Communication Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.16.12%20PM%20(1).jpeg?updatedAt=1752427920975", url: "#" },
  { name: "The Assam Tribune News", type:"Digital News Media Partner", logo: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Sponsors/WhatsApp%20Image%202025-07-13%20at%209.16.13%20PM%20(1).jpeg?updatedAt=1752427921273", url: "#" },
];

const sponsorAccents = [
  "from-yellow-400 to-red-400",
  "from-blue-400 to-cyan-400",
  "from-pink-400 to-purple-400",
  "from-green-400 to-lime-400",
  "from-orange-400 to-yellow-500",
  "from-indigo-500 to-blue-400",
  "from-fuchsia-500 to-pink-400",
  "from-emerald-400 to-teal-400",
  "from-amber-500 to-orange-400",
  "from-rose-400 to-pink-500",
  "from-sky-400 to-blue-500",
  "from-lime-400 to-green-500",
  "from-violet-500 to-purple-400",
  "from-red-400 to-amber-500",
  "from-cyan-400 to-teal-500",
  "from-purple-400 to-fuchsia-500",
  "from-blue-400 to-indigo-500",
  "from-orange-400 to-rose-400",
  "from-teal-400 to-emerald-500",
  "from-pink-400 to-red-500",
];

const SponsorCard = ({ sponsor, accentIndex }: { sponsor: typeof sponsors[0]; accentIndex: number }) => {
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
  const accent = sponsorAccents[accentIndex % sponsorAccents.length];
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} group w-full max-w-xs mx-auto bg-[#232323] rounded-2xl shadow-xl p-6`}
    >
      <div className={`w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg relative bg-gradient-to-br ${accent} flex items-center justify-center`}>
        <Image src={sponsor.logo} alt={sponsor.name} width={128} height={128} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className={`h-2 w-12 rounded-full mb-3 bg-gradient-to-r ${accent}`}></div>
      <span className="text-white font-bold text-base md:text-xl mb-1 drop-shadow-lg">{sponsor.name}</span>
      <span className="text-gray-400 text-xs md:text-sm mb-2">{sponsor.type}</span>
      {/* Optionally add a description or link */}
      {sponsor.url !== "#" && (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-red-700 transition-colors shadow"
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {sponsors.map((sponsor, i) => (
              <SponsorCard key={i} sponsor={sponsor} accentIndex={i} />
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
                <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
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