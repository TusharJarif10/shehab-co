"use client"

import { usePathname } from "next/navigation"
import {
  Cog6ToothIcon,
  GlobeAltIcon,
  StarIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhotoIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const navItems = [
  { name: "About", href: "/about", icon: <GlobeAltIcon className="h-5 w-5" /> },
  {
    name: "Consulting", href: "/consulting",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    submenu: [
      { name: "Advisory Hour", href: "/consulting/advisory" },
      { name: "Marketing Audit & Strategy", href: "/consulting/audit" },
      { name: "Build My Marketing Team", href: "/consulting/marketingteam" },
      { name: "Business Consultancy", href: "/consulting/consultancy" },
      { name: "One to One Mentorship", href: "/consulting/mentorship" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    icon: <Cog6ToothIcon className="h-5 w-5" />,
    submenu: [
      { name: "ITES/Software", href: "/industries/software" },
      { name: "Ecommerce", href: "/industries/ecommerce" },
      { name: "Real Estate", href: "/industries/realEstate" },
      { name: "Fashion", href: "/industries/fashion" },
      { name: "Education", href: "/industries/education" },
    ],
  },
  { name: "Portfolio", href: "/portfolio", icon: <PhotoIcon className="h-5 w-5" /> },
  {
    name: "Shehab & Co", href: "/shehab",
    icon: <StarIcon className="h-5 w-5" />,
    submenu: [
      {
        name: "Services", href: "/shehab/services",
        submenu: [
          { name: "SEO", href: "/shehab/services/seo" },
          { name: "PPC", href: "/shehab/services/ppc" },
          { name: "Social Media", href: "/shehab/services/social" },
          { name: "Content", href: "/shehab/services/content" },
          { name: "Email Marketing", href: "/shehab/services/email" },
        ],
      },
      { name: "Case Studies", href: "/shehab/caseStudies" },
      { name: "Team", href: "/shehab/team" },
      { name: "Partners", href: "/shehab/partners" },
    ],
  },
  { name: "Blogs", href: "/blogs", icon: <DocumentTextIcon className="h-5 w-5" /> },
]

export default function Navbar() {
  const pathname = usePathname()
  const [theme, setTheme] = useState("corporate")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) setTheme(storedTheme)
  }, [])

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "corporate" ? "business" : "corporate"))
  }

  const toggleMenu = (key, event) => {
    if (event) event.preventDefault()
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isMounted) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-full md:top-4">
      <div className="flex md:justify-between items-center gap-2 bg-base-200 text-base-content p-2 px-4 rounded-full shadow-md backdrop-blur-md w-full">
        {/* Logo - Replaced HomeIcon */}
        <a href="/" className="flex items-center gap-2 mr-2">
          <div className="relative h-8 w-8 min-w-[72px]">
            <Image
              src="/shehab.png" // Make sure to add your logo.png to public folder
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* <span className="font-bold hidden sm:inline">StratEdge</span> */}
        </a>

        <button
          className="md:hidden btn btn-circle btn-ghost"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>

        <div className="hidden md:flex gap-4 items-center w-full">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={(e) => item.submenu && toggleMenu(item.name, e)}
                className={`btn btn-ghost btn-sm rounded-full flex gap-2 items-center ${pathname === item.href ? "bg-base-300" : ""}`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
              </a>

              {item.submenu && openMenus[item.name] && (
                <div className="absolute left-0 top-full mt-2 bg-base-100 shadow-md rounded-lg p-2 z-50">
                  {item.submenu.map((sub) => (
                    <div key={sub.name} className="relative group">
                      <a
                        href={sub.href}
                        onClick={(e) => sub.submenu && toggleMenu(sub.name, e)}
                        className="px-4 py-2 hover:bg-base-200 rounded-md whitespace-nowrap flex justify-between items-center w-full"
                      >
                        {sub.name}
                        {sub.submenu && <span className="ml-2">▸</span>}
                      </a>

                      {sub.submenu && openMenus[sub.name] && (
                        <div className="absolute left-full top-0 ml-2 bg-base-100 shadow-md rounded-lg p-2 z-50">
                          {sub.submenu.map((nested) => (
                            <a
                              key={nested.name}
                              href={nested.href}
                              className="px-4 py-2 hover:bg-base-200 rounded-md whitespace-nowrap block"
                            >
                              {nested.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button onClick={toggleTheme} className="btn btn-circle btn-ghost">
            {theme === "corporate" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 bg-base-100 rounded-lg shadow-md w-max p-4 flex flex-col gap-4 items-start justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Logo */}
            {/* <div className="flex items-center gap-2 mb-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/shehab.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold">StratEdge</span>
            </div> */}

            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => item.submenu && toggleMenu(item.name, e)}
                  className={`btn btn-ghost btn-sm rounded-full flex gap-2 items-center ${pathname === item.href ? "bg-base-300" : ""}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>

                {item.submenu && openMenus[item.name] && (
                  <div className="flex flex-col mt-2 ml-4">
                    {item.submenu.map((sub) => (
                      <div key={sub.name}>
                        <a
                          href={sub.href}
                          onClick={(e) => sub.submenu && toggleMenu(sub.name, e)}
                          className="px-4 py-2 hover:bg-base-200 rounded-md flex justify-between items-center"
                        >
                          {sub.name}
                          {sub.submenu && <span>▸</span>}
                        </a>

                        {sub.submenu && openMenus[sub.name] && (
                          <div className="flex flex-col ml-4">
                            {sub.submenu.map((nested) => (
                              <a
                                key={nested.name}
                                href={nested.href}
                                className="px-4 py-2 hover:bg-base-200 rounded-md"
                              >
                                {nested.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button onClick={toggleTheme} className="btn btn-circle btn-ghost mt-4">
              {theme === "corporate" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}