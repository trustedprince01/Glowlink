import { useState } from 'react'
import { Camera, Plus, X, Save } from 'lucide-react'
import { motion } from 'framer-motion'

interface Service {
  id: string
  name: string
  price: string
}

export function Settings() {
  const [profileImage, setProfileImage] = useState<string>("https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400")
  const [services, setServices] = useState<Service[]>([
    { id: '1', name: 'Haircut', price: '50' },
    { id: '2', name: 'Color Treatment', price: '120' }
  ])
  const [gallery, setGallery] = useState<string[]>([
    "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
  ])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
    }
  }

  const addService = () => {
    setServices([...services, { id: Date.now().toString(), name: '', price: '' }])
  }

  const removeService = (id: string) => {
    setServices(services.filter(service => service.id !== id))
  }

  const updateService = (id: string, field: 'name' | 'price', value: string) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ))
  }

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && gallery.length < 5) {
      const newImages = Array.from(files).slice(0, 5 - gallery.length).map(file => URL.createObjectURL(file))
      setGallery([...gallery, ...newImages])
    }
  }

  const removeGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Saving changes...')
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="font-poppins text-xl font-semibold text-gray-900">Profile Information</h2>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <div className="mt-2 flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur"></div>
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white">
                  <img
                    src={profileImage}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <label className="group flex cursor-pointer items-center gap-2 rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10">
                <Camera className="h-5 w-5 text-gray-400 transition-colors group-hover:text-primary" />
                Change Photo
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                placeholder="Your professional name"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                rows={3}
                className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                placeholder="Tell clients about your work (max 160 characters)"
                maxLength={160}
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="font-poppins text-xl font-semibold text-gray-900">Contact Information</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsapp"
                className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram Username</label>
              <div className="mt-1 flex rounded-xl bg-gray-50 shadow-sm">
                <span className="inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-4 text-gray-500">@</span>
                <input
                  type="text"
                  id="instagram"
                  className="block w-full rounded-r-xl border-gray-300 bg-gray-50 px-4 py-3 transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                  placeholder="yourusername"
                />
              </div>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website (Optional)</label>
              <input
                type="url"
                id="website"
                className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="font-poppins text-xl font-semibold text-gray-900">Services & Pricing</h2>
          <div className="mt-6 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1">
                  <input
                    type="text"
                    value={service.name}
                    onChange={(e) => updateService(service.id, 'name', e.target.value)}
                    className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    placeholder="Service name"
                  />
                </div>
                <div className="w-32">
                  <div className="flex rounded-xl bg-gray-50 shadow-sm">
                    <span className="inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={service.price}
                      onChange={(e) => updateService(service.id, 'price', e.target.value)}
                      className="block w-full rounded-r-xl border-gray-300 bg-gray-50 px-3 py-3 transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                      placeholder="0"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeService(service.id)}
                  className="rounded-xl p-3 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
            <button
              type="button"
              onClick={addService}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Plus className="h-4 w-4" />
              Add Service
            </button>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="font-poppins text-xl font-semibold text-gray-900">Gallery</h2>
          <p className="mt-1 text-sm text-gray-500">Upload up to 5 photos of your work</p>
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {gallery.map((image, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                  <img src={image} alt={`Gallery ${index + 1}`} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute right-2 top-2 rounded-lg bg-white/90 p-1.5 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {gallery.length < 5 && (
                <label className="group relative flex aspect-square cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-primary hover:bg-primary/5">
                  <div className="flex flex-col items-center gap-1">
                    <Plus className="h-8 w-8 text-gray-400 transition-colors group-hover:text-primary" />
                    <span className="text-xs text-gray-500">Add Photo</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleGalleryUpload}
                    className="hidden"
                    multiple
                  />
                </label>
              )}
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              <Save className="h-5 w-5" />
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}