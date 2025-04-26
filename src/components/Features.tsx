import { MessageCircle, Instagram, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Instant bookings via WhatsApp',
      description: 'Connect with clients directly through WhatsApp for seamless communication and booking.',
      image: 'https://images.pexels.com/photos/5702281/pexels-photo-5702281.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Instagram,
      title: 'Showcase your work on Instagram',
      description: 'Display your portfolio by integrating your Instagram feed directly into your GlowLink.',
      image: 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FileText,
      title: 'Easy price list & appointments',
      description: 'Manage your services, prices, and availability all in one place.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ]

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-accent/10"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-4xl font-bold tracking-tight text-accent sm:text-5xl"
          >
            Elevate Your Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Powerful features designed to help you grow and manage your creative business
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-white/40 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 inline-flex rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-gray-900/5">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}