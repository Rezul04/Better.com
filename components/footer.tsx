import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and social */}
          <div>
            <div className="w-32 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold mb-6">
              Better
            </div>
            <p className="text-gray-400 mb-4">A simpler way to buy and refinance your home.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Mortgage
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Refinance
                </Link>
              </li>
              <li>
                <Link href="/mortgage-calculator" className="text-gray-400 hover:text-white">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home Equity
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Mortgage Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Better. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-white">
                Licenses
              </Link>
              <Link href="/" className="hover:text-white">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

