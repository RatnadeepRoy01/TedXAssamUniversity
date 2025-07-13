"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Calendar, Users, Mail, Info, Home, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Speakers", href: "/speakers", icon: Users },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Sponsors", href: "/sponsors", icon: Star },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false)
  const [aboutDropdownHover, setAboutDropdownHover] = React.useState(false)

  // Dropdown is open if either hover or click is active
  const aboutDropdownVisible = aboutDropdownOpen || aboutDropdownHover;

  return (
    <nav className="fixed top-0 z-50 w-full bg-black md:sticky text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="TEDx Assam University Logo"
                width={56}
                height={56}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-lg"
                priority
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">
                  TED<span className="text-red-600">x</span>
                </div>
                <div className="text-sm text-white -mt-1">Assam University</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => {
                if (item.name === "About") {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setAboutDropdownHover(true)}
                      onMouseLeave={() => setAboutDropdownHover(false)}
                    >
                      <button
                        type="button"
                        className="relative px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:text-red-600 focus:outline-none flex items-center gap-1"
                        onClick={() => setAboutDropdownOpen((open) => !open)}
                        aria-haspopup="true"
                        aria-expanded={aboutDropdownVisible}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${aboutDropdownVisible ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </button>
                      {/* Dropdown */}
                      {aboutDropdownVisible && (
                        <div className="absolute left-0 mt-2 min-w-[180px] bg-black text-white rounded-lg shadow-lg translate-y-0 pointer-events-auto transition-all duration-200 z-50 flex flex-col items-center pt-4 pb-2">        
                          <div className="w-full">
                            <Link
                              href="/team"
                              className="block px-4 py-3 hover:text-red-600 rounded-t-lg transition-colors"
                              onClick={() => setAboutDropdownOpen(false)}
                            >
                              TEDx Team
                            </Link>
                            <Link
                              href="/about"
                              className="block px-4 py-3 hover:text-red-600 rounded-b-lg transition-colors"
                              onClick={() => setAboutDropdownOpen(false)}
                            >
                              About Us
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:text-red-600 group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd43MK5bTGJjG1zFvTQZFwQyGdlMpgMXQltBeYClAyjkmawmw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
            >
              Get Tickets
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? ( 
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2">
                      {navigation.map((item) => {
                        const Icon = item.icon
                        if (item.name === "About") {
                          return (
                            <div key={item.name} className="flex flex-col">
                              <button
                                type="button"
                                className="flex ml-2 items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-black hover:text-red-600 hover:bg-red-50 transition-all duration-200 w-full justify-between focus:outline-none"
                                onClick={() => setAboutDropdownOpen((open) => !open)}
                              >
                                <span className="flex items-center space-x-3">
                                  <Icon className="h-5 w-5" />
                                  <span>{item.name}</span>
                                </span>
                                <svg
                                  className={`h-4 w-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {aboutDropdownOpen && (
                                <div className="ml-8 flex flex-col bg-white rounded-lg shadow-lg mt-1">
                                  <Link
                                    href="/team"
                                    className="block px-4 py-3 text-black hover:text-red-600 rounded-t-lg transition-colors"
                                    onClick={() => { setIsOpen(false); setAboutDropdownOpen(false); }}
                                  >
                                    TEDx Team
                                  </Link>
                                  <Link
                                    href="/about"
                                    className="block px-4 py-3 text-black hover:text-red-600 rounded-b-lg transition-colors"
                                    onClick={() => { setIsOpen(false); setAboutDropdownOpen(false); }}
                                  >
                                    About Us
                                  </Link>
                                </div>
                              )}
                            </div>
                          )
                        }
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex ml-2 items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-black hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="border-t pt-6 flex justify-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd43MK5bTGJjG1zFvTQZFwQyGdlMpgMXQltBeYClAyjkmawmw/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 mb-4 w-[90%] bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-200 text-center"
                    >
                      Get Tickets
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    </nav>
  )
}
