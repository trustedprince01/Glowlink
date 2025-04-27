import { motion } from 'framer-motion'
import { MessageCircle, FileText, Instagram, Calendar } from 'lucide-react'

export function PublicProfile() {
  // This would come from the database in a real app
  const profile = {
    name: "Sarah Johnson",
    profession: "Hair Stylist & Color Specialist",
    bio: "Creating beautiful, healthy hair transformations in Los Angeles 🌟",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3993402/pexels-photo-3993402.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    links: {
      whatsapp: "https://wa.me/1234567890",
      priceList: "#",
      instagram: "https://instagram.com/sarahstylist",
      booking: "#"
    }
  }

  const actionButtons = [
    {
      icon: MessageCircle,
      label: "Chat on WhatsApp",
      href: profile.links.whatsapp,
      color: "bg-[#25D366]"
    },
    {
      icon: FileText,
      label: "View Price List",
      href: profile.links.priceList,
      color: "bg-accent"
    },
    {
      icon: Instagram,
      label: "Follow on Instagram",
      href: profile.links.instagram,
      color: "bg-[#E4405F]"
    },
    {
      icon: Calendar,
      label: "Book Appointment",
      href: profile.links.booking,
      color: "bg-primary"
    }
  ]

  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur"></div>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative aspect-square h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-3xl font-bold text-accent sm:text-4xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-lg text-primary"
          >
            {profile.profession}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-600"
          >
            {profile.bio}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 space-y-4"
        >
          {actionButtons.map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`group relative block overflow-hidden rounded-2xl ${button.color} p-1 transition-all hover:shadow-lg hover:shadow-black/5`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative flex items-center gap-4 rounded-xl bg-white/95 px-6 py-4 transition-colors group-hover:bg-white">
                <button.icon className={`h-6 w-6 ${button.color} text-white rounded-lg p-1`} />
                <span className="font-medium text-gray-900">{button.label}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Gallery Section */}
        {profile.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16"
          >
            <h2 className="mb-6 font-poppins text-2xl font-semibold text-accent">Recent Work</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur-sm">
            <span>Powered by</span>
            <span className="font-poppins font-semibold text-accent">GlowLink</span>
            <span className="text-primary">✨</span>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}