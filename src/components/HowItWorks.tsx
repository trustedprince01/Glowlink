import { Link, Megaphone, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      icon: Link,
      title: 'Create your GlowLink',
      description: 'Sign up and customize your profile in minutes.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Megaphone,
      title: 'Share your link',
      description: 'Share your unique GlowLink across all your social platforms.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Calendar,
      title: 'Get booked & start working',
      description: 'Accept bookings and manage your schedule effortlessly.',
      image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ]

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-primary/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-4xl font-bold tracking-tight text-accent sm:text-5xl"
          >
            Start Growing Today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Three simple steps to transform your online presence
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-white/40 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-sm ring-1 ring-gray-900/5">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{step.description}</p>
                </div>
                <div className="absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-1/3"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}