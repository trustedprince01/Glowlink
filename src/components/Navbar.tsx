import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-accent">GlowLink</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Features', 'How It Works', 'Testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link to="/login">
                <button className="text-accent hover:text-accent/80 transition-colors">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-full bg-primary px-6 py-2 text-white shadow-sm hover:bg-primary/90 transition-all">
                  Create Your GlowLink
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-accent hover:bg-accent/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {['Features', 'How It Works', 'Testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="block w-full rounded-md px-3 py-2 text-left text-gray-600 hover:bg-accent/5 hover:text-accent"
                >
                  {item}
                </button>
              ))}
              <Link to="/login">
                <button className="block w-full rounded-md px-3 py-2 text-left text-accent hover:bg-accent/5">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="mt-2 block w-full rounded-full bg-primary px-6 py-2 text-center text-white shadow-sm hover:bg-primary/90">
                  Create Your GlowLink
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}