import { ArrowRight, Star, Users, Calendar } from 'lucide-react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, latest => Math.round(latest))
  
  useEffect(() => {
    const controls = animate(count, to, { duration })
    return controls.stop
  }, [count, to, duration])

  return <motion.span>{rounded}</motion.span>
}

export function Hero() {
  const stats = [
    { icon: Star, label: 'Rating', value: 4.9, suffix: '/5', prefix: '', countFrom: 0 },
    { icon: Users, label: 'Active Users', value: 10000, suffix: '+', prefix: '', countFrom: 0 },
    { icon: Calendar, label: 'Bookings Made', value: 100000, suffix: '+', prefix: '', countFrom: 0 },
  ]

  return (
    <div className="relative overflow-hidden px-6 pt-32 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Now serving 50+ countries worldwide
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 font-poppins text-5xl font-bold tracking-tight text-accent sm:text-6xl md:text-7xl"
              >
                Your Digital Presence,{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Elevated
                  </span>
                  <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-primary/20"></span>
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg leading-relaxed text-gray-600"
              >
                Transform your creative business with a stunning digital storefront. Showcase your work, manage bookings, and connect with clients—all in one beautiful link.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  Create Your GlowLink
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-8 py-4 text-lg font-semibold text-accent shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-accent/5">
                  See Examples
                </button>
              </motion.div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-poppins text-2xl font-bold text-accent">
                    {stat.prefix}<Counter from={stat.countFrom} to={stat.value} duration={2.5} />{stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Makeup artist at work"
                className="h-full w-full rounded-2xl object-cover"
              />
              <motion.div 
                initial={{ rotate: 12, x: '100%' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 -top-4 rotate-12"
              >
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Portfolio example"
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ rotate: -6, x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 -rotate-6"
              >
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Portfolio example"
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}