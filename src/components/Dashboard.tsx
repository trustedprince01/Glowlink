import { useState } from 'react'
import { Bell, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <span className="font-poppins text-xl font-bold text-accent">GlowLink</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="overflow-hidden rounded-full">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="h-8 w-8 object-cover"
            />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed bottom-0 left-0 top-16 z-40 w-64 transform bg-white/80 backdrop-blur-md transition-transform lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="pt-16 lg:pl-64">
        <div className="p-6">
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-poppins text-2xl font-bold text-accent"
            >
              Welcome back, Sarah! 👋
            </motion.h1>
            <p className="text-gray-600">Here's what's happening with your GlowLink today.</p>
          </div>

          <Stats />
          <Appointments />
          <QuickActions />
          <TipBanner />
        </div>
      </main>
    </div>
  )
}

function Sidebar() {
  const navigation = [
    { name: 'Home', icon: '🏠' },
    { name: 'My Page', icon: '✨' },
    { name: 'Appointments', icon: '📅' },
    { name: 'My Clients', icon: '👥' },
    { name: 'Settings', icon: '⚙️' },
  ]

  return (
    <nav className="flex h-full flex-col gap-2 p-4">
      {navigation.map((item) => (
        <button
          key={item.name}
          className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
      <button className="mt-auto flex items-center gap-3 rounded-lg px-4 py-2 text-red-600 transition-colors hover:bg-red-50">
        <span className="text-xl">🚪</span>
        <span>Logout</span>
      </button>
    </nav>
  )
}

function Stats() {
  const stats = [
    { label: 'Profile Views', value: '2.4k', change: '+12%' },
    { label: 'Total Bookings', value: '186', change: '+8%' },
    { label: 'New Messages', value: '24', change: '+16%' },
  ]

  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div className="relative">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="mt-2 font-poppins text-3xl font-bold text-accent">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-green-600">{stat.change}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function Appointments() {
  const appointments = [
    {
      client: 'Emma Thompson',
      service: 'Hair Styling',
      time: '2:00 PM',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      client: 'Sophie Chen',
      service: 'Makeup Session',
      time: '3:30 PM',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      client: 'Maria Garcia',
      service: 'Hair Coloring',
      time: '5:00 PM',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 overflow-hidden rounded-2xl bg-white shadow-sm"
    >
      <div className="border-b border-gray-100 p-6">
        <h2 className="font-poppins text-xl font-semibold text-accent">Today's Appointments</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {appointments.map((appointment) => (
          <div
            key={appointment.client}
            className="flex items-center gap-4 p-4 transition-colors hover:bg-gray-50"
          >
            <img
              src={appointment.image}
              alt={appointment.client}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{appointment.client}</p>
              <p className="text-sm text-gray-600">{appointment.service}</p>
            </div>
            <p className="text-sm font-medium text-primary">{appointment.time}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function QuickActions() {
  const actions = [
    { name: 'Update Profile', description: 'Keep your information fresh', icon: '✏️' },
    { name: 'Share Link', description: 'Grow your audience', icon: '🔗' },
    { name: 'View Analytics', description: 'Track your growth', icon: '📊' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {actions.map((action) => (
        <button
          key={action.name}
          className="group relative overflow-hidden rounded-2xl bg-white p-6 text-left shadow-sm transition-all hover:shadow-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div className="relative">
            <span className="text-2xl">{action.icon}</span>
            <h3 className="mt-4 font-poppins text-lg font-semibold text-accent">{action.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{action.description}</p>
          </div>
        </button>
      ))}
    </motion.div>
  )
}

function TipBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">💡</span>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-accent">Pro Tip!</h3>
          <p className="text-gray-600">
            Regular updates keep your profile fresh and engaging. Why not add your latest work samples?
          </p>
        </div>
      </div>
    </motion.div>
  )
}