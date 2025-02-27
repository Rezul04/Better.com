"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-32 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
                Better
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Mortgage</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/mortgage-calculator"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Mortgage Calculator</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Estimate your monthly payments and see how much house you can afford.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">Purchase</div>
                          <p className="text-xs text-gray-500">Buy a new home</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">Refinance</div>
                          <p className="text-xs text-gray-500">Lower your rate or get cash</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">Rates</div>
                          <p className="text-xs text-gray-500">See today's mortgage rates</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">Mortgage Guides</div>
                          <p className="text-xs text-gray-500">Learn about the mortgage process</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">FAQ</div>
                          <p className="text-xs text-gray-500">Answers to common questions</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="text-sm font-medium">Blog</div>
                          <p className="text-xs text-gray-500">Tips and insights</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button asChild>
              <Link href="/start">Get started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link
              href="/mortgage-calculator"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Button>
              </div>
              <div className="mt-3 px-3">
                <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/start">Get started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

