import { useState, useEffect } from 'react'
import { ArrowRight, Camera } from 'lucide-react'

const professionOptions = [
  'Hairstylist',
  'Makeup Artist',
  'Photographer',
  'Tailor',
  'Home Decor Seller',
  'Kitchenware Seller',
  'Fashion/Clothing Seller',
  'Shoe & Bag Seller',
  'Handmade Crafts Seller',
  'Caterer/Home Food Seller',
  'Event Planner',
  'Fitness Trainer',
  'Skincare/Spa Owner',
  'Freelancer',
  'Other (Please specify)'
]

const professionImages = [
  'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

interface FormData {
  email: string
  password: string
  fullName: string
  profession: string
  customProfession: string
  bio: string
  profilePhoto: File | null
  previewUrl: string
  whatsappNumber: string
  instagramHandle: string
  priceListLink: string
  portfolioLink: string
  showBookingButton: boolean
}

export function SignUp() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    fullName: '',
    profession: '',
    customProfession: '',
    bio: '',
    profilePhoto: null,
    previewUrl: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=300',
    whatsappNumber: '',
    instagramHandle: '',
    priceListLink: '',
    portfolioLink: '',
    showBookingButton: true,
  })

  const [currentImage, setCurrentImage] = useState(() => {
    const idx = Math.floor(Math.random() * professionImages.length)
    return professionImages[idx]
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * professionImages.length)
      setCurrentImage(professionImages[idx])
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      profession: e.target.value,
      customProfession: ''
    }))
  }

  const handleCustomProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      customProfession: e.target.value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePhoto: file,
        previewUrl: URL.createObjectURL(file)
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Submit logic here
      const finalProfession = formData.profession === 'Other (Please specify)'
        ? formData.customProfession.trim() || 'Other'
        : formData.profession
      console.log('Form submitted:', { ...formData, profession: finalProfession })
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 mix-blend-multiply"></div>
        <img
          src={currentImage}
          alt="Beauty professional at work"
          className="h-full w-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center text-white p-8">
            <h2 className="font-poppins text-4xl font-bold mb-4">
              {step === 1 ? 'Join Our Creative Community' : 'Set Up Your Profile'}
            </h2>
            <p className="text-lg text-white/90">
              {step === 1
                ? 'Connect with clients, showcase your work, and grow your business with GlowLink.'
                : 'Complete your profile to attract more clients and stand out!'}
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="font-poppins text-3xl font-bold text-gray-900">
              {step === 1 ? 'Create Your Account' : 'Profile Setup'}
            </h2>
            <p className="mt-2 text-gray-600">
              {step === 1 ? 'Start your journey with GlowLink today' : 'Tell us about yourself'}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Create a password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Profession
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleProfessionChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Select your profession</option>
                    {professionOptions.map(option => (
                      <option value={option} key={option}>{option}</option>
                    ))}
                  </select>
                  {formData.profession === 'Other (Please specify)' && (
                    <input
                      type="text"
                      name="customProfession"
                      value={formData.customProfession}
                      onChange={handleCustomProfessionChange}
                      className="mt-3 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="Please specify your profession"
                      required
                    />
                  )}
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Short Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Tell clients about your work in 1-2 lines"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                  <label className="group relative flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 transition-all hover:border-primary hover:bg-gray-50">
                    {formData.profilePhoto ? (
                      <img
                        src={formData.previewUrl}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Camera className="h-8 w-8 text-gray-400 transition-colors group-hover:text-primary" />
                    )}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                  <div className="text-xs text-gray-500 mt-1">Click to upload your profile photo</div>
                </div>
                <div>
                  <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Enter your WhatsApp number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram Handle
                  </label>
                  <div className="mt-1 flex overflow-hidden rounded-xl bg-gray-50/50 ring-1 ring-inset ring-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/50">
                    <span className="inline-flex items-center border-r border-gray-200 px-4 text-gray-500">@</span>
                    <input
                      type="text"
                      id="instagramHandle"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      className="block w-full border-0 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
                      placeholder="yourhandle"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="priceListLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Price List Link (optional)
                  </label>
                  <input
                    type="url"
                    id="priceListLink"
                    name="priceListLink"
                    value={formData.priceListLink}
                    onChange={handleInputChange}
                    placeholder="https://"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Portfolio Link (optional)
                  </label>
                  <input
                    type="url"
                    id="portfolioLink"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleInputChange}
                    placeholder="https://"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showBookingButton"
                    name="showBookingButton"
                    checked={formData.showBookingButton}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="showBookingButton" className="text-sm font-medium text-gray-700">
                    Show Booking Button on My Profile
                  </label>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="rounded-xl px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                  >
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </>
            )}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Sign in
              </a>
            </p>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}