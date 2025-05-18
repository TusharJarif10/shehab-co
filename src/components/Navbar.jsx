"use client"

import { usePathname } from "next/navigation"
import {
  HomeIcon,
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

const navItems = [
  { name: "About", href: "/about", icon: <GlobeAltIcon className="h-5 w-5" /> },
  { name: "Consulting", href: "/consulting",
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
  { name: "Shehab & Co", href: "/shehab", icon: <StarIcon className="h-5 w-5" /> },
  { name: "Blogs", href: "/blogs", icon: <DocumentTextIcon className="h-5 w-5" /> },
]

export default function Navbar() {
  const pathname = usePathname()

  const [theme, setTheme] = useState("corporate") // Default theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenus, setActiveSubmenus] = useState(new Array(navItems.length).fill(false))
  const [isMounted, setIsMounted] = useState(false)

  // Set theme from localStorage only after the component is mounted
  useEffect(() => {
    setIsMounted(true) // Ensure the client-side rendering logic runs only after mounting
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    // Update the theme attribute in the HTML tag
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme)

      // Store the theme in localStorage whenever it changes
      localStorage.setItem("theme", theme)
    }
  }, [theme, isMounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "corporate" ? "business" : "corporate"))
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const toggleSubmenu = (index, event) => {
    // Prevent default link behavior (navigation)
    if (navItems[index].submenu) {
      event.preventDefault()
    }

    // Toggle submenu visibility
    setActiveSubmenus((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  if (!isMounted) {
    return null // Return null or a loading spinner until the component is mounted on the client
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-full md:top-4">
      <div className="flex md:justify-between items-center gap-2 bg-base-100 text-base-content p-2 px-4 rounded-full shadow-md backdrop-blur-md w-full">
        {/* Home Button */}
        <a href="/" className="btn btn-circle btn-ghost">
          <HomeIcon className="h-5 w-5" />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden btn btn-circle btn-ghost"
          onClick={toggleMobileMenu}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>

        {/* Navigation Items */}
        <div className="hidden md:flex gap-4 items-center w-full">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className={`btn btn-ghost btn-sm rounded-full flex gap-2 items-center ${pathname === item.href ? "bg-base-300" : ""}`}
                onClick={(event) => item.submenu && toggleSubmenu(index, event)} // Handle submenu toggle
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
              </a>

              {/* Submenu */}
              {item.submenu && activeSubmenus[index] && (
                <div className=" absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 flex flex-col bg-base-100 shadow-md rounded-lg p-2 z-50">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className=" px-4 py-2 hover:bg-base-200 rounded-md whitespace-nowrap"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-circle btn-ghost">
            {theme === "corporate" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 bg-base-100 rounded-lg shadow-md w-max p-4 flex flex-col gap-4 items-start justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={`btn btn-ghost btn-sm rounded-full flex gap-2 items-center ${pathname === item.href ? "bg-base-300" : ""}`}
                  onClick={(event) => item.submenu && toggleSubmenu(index, event)} // Handle submenu toggle
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
                {/* Submenu for Mobile */}
                {item.submenu && activeSubmenus[index] && (
                  <div className="flex flex-col mt-2">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className=" px-4 py-2 hover:bg-base-200 rounded-md"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="btn btn-circle btn-ghost mt-4">
              {theme === "corporate" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
