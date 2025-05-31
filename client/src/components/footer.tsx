import { Link } from "wouter";

export function Footer() {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        { href: "/store", label: "Store" },
        { href: "/products/laptops", label: "Mac" },
        { href: "/products/tablets", label: "iPad" },
        { href: "/products/phones", label: "iPhone" },
        { href: "/products/watches", label: "Watch" },
        { href: "/products/headphones", label: "AirPods" },
      ]
    },
    {
      title: "Services",
      links: [
        { href: "/store", label: "Zenith Store" },
        { href: "/today", label: "Today at Zenith" },
        { href: "/camp", label: "Zenith Camp" },
        { href: "/financing", label: "Financing" },
        { href: "/trade-in", label: "Trade In" },
      ]
    },
    {
      title: "Account",
      links: [
        { href: "/account", label: "Manage Your ID" },
        { href: "/store-account", label: "Zenith Store Account" },
        { href: "/icloud", label: "iCloud.com" },
      ]
    },
    {
      title: "Zenith Values",
      links: [
        { href: "/accessibility", label: "Accessibility" },
        { href: "/environment", label: "Environment" },
        { href: "/privacy", label: "Privacy" },
        { href: "/responsibility", label: "Supplier Responsibility" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-black dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">z</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Copyright © 2024 Zenith Inc. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.198 14.895 3.72 13.744 3.72 12.447s.478-2.448 1.401-3.328c.88-.88 2.031-1.297 3.328-1.297s2.448.417 3.328 1.297c.88.88 1.297 2.031 1.297 3.328s-.417 2.448-1.297 3.328c-.88.807-2.031 1.297-3.328 1.297zm7.718-4.541c0-1.297-.478-2.448-1.297-3.328-.88-.88-2.031-1.297-3.328-1.297s-2.448.417-3.328 1.297c-.88.88-1.297 2.031-1.297 3.328s.417 2.448 1.297 3.328c.88.88 2.031 1.297 3.328 1.297s2.448-.417 3.328-1.297c.819-.88 1.297-2.031 1.297-3.328z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
