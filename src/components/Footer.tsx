import { Instagram, Twitter, MessageCircle } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'WhatsApp', icon: MessageCircle, href: '#' },
  ]

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-accent/10 opacity-50"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="font-poppins text-2xl font-bold text-white">GlowLink</h3>
            <p className="mt-4 text-gray-300">
              Helping creatives and freelancers shine online. Manage bookings, showcase your work, and grow your business with ease.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="font-poppins text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="font-poppins text-lg font-semibold text-white">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 p-3 transition-colors hover:bg-primary"
                  aria-label={link.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <link.icon className="relative h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} GlowLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}