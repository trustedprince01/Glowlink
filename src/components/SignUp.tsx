import { useState } from 'react'
import { Camera, Upload, Info } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  profession: string
  bio: string
  profilePhoto: File | null
  whatsappNumber: string
  instagramHandle: string
  priceListLink: string
  portfolioLink: string
  showBookingButton: boolean
}

export function SignUp() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: '',
    bio: '',
    profilePhoto: null,
    whatsappNumber: '',
    instagramHandle: '',
    priceListLink: '',
    portfolioLink: '',
    showBookingButton: true,
  })
  const [previewUrl, setPreviewUrl] = useState<string>('https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=300')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, profilePhoto: file }))
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      console.log('Form submitted:', formData)
    }
  }

  const inputClasses = "mt-1 block w-full rounded-xl border-0 bg-gray-50/50 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary/50"
  const labelClasses = "block text-sm font-medium text-gray-700"

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="fullName" className={labelClasses}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className={labelClasses}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className={labelClasses}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="profession" className={labelClasses}>
          Profession
        </label>
        <input
          type="text"
          id="profession"
          name="profession"
          placeholder="e.g. Hairstylist, MUA, Fashion Designer"
          value={formData.profession}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="bio" className={labelClasses}>
          Short Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          placeholder="Tell clients about your work in 1-2 lines"
          value={formData.bio}
          onChange={handleInputChange}
          className={inputClasses}
          rows={2}
          required
        />
      </div>
      <div>
        <label className={labelClasses}>
          Profile Photo
        </label>
        <div className="mt-1 flex items-center gap-4">
          <label className="group relative flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 transition-all hover:border-primary hover:bg-gray-50">
            {formData.profilePhoto ? (
              <img
                src={previewUrl}
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
          <div className="text-sm text-gray-500">
            Click to upload your profile photo
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="whatsappNumber" className={labelClasses}>
          WhatsApp Number
        </label>
        <input
          type="tel"
          id="whatsappNumber"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="instagramHandle" className={labelClasses}>
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
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="priceListLink" className={labelClasses}>
          Price List Link (optional)
        </label>
        <div className="group relative">
          <input
            type="url"
            id="priceListLink"
            name="priceListLink"
            value={formData.priceListLink}
            onChange={handleInputChange}
            placeholder="https://"
            className={inputClasses}
          />
          <div className="invisible absolute left-0 top-full mt-2 rounded-xl bg-gray-900 p-2 text-xs text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
            Link to your price list PDF or Google Drive
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="portfolioLink" className={labelClasses}>
          Portfolio Link (optional)
        </label>
        <input
          type="url"
          id="portfolioLink"
          name="portfolioLink"
          value={formData.portfolioLink}
          onChange={handleInputChange}
          placeholder="https://"
          className={inputClasses}
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
    </div>
  )

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-accent/5 px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text font-poppins text-3xl font-bold text-transparent">
              Let's Glow Up Your Brand ✨
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 1 ? 'bg-primary' : 'bg-gray-200'
                } text-white transition-colors`}>
                  1
                </div>
                <div className={`ml-2 h-1 w-16 ${
                  step > 1 ? 'bg-primary' : 'bg-gray-200'
                } transition-colors`} />
              </div>
              <div className="flex items-center">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 2 ? 'bg-primary' : 'bg-gray-200'
                } text-white transition-colors`}>
                  2
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-8">
              {step === 1 ? renderStep1() : renderStep2()}
              <div className="mt-8 flex justify-end">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mr-4 rounded-xl px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  {step === 1 ? 'Next Step' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-8">
            <div className="overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-sm">
              <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                <img
                  src={previewUrl}
                  alt="Profile preview"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="font-poppins text-xl font-semibold text-gray-900">
                {formData.fullName || 'Your Name'}
              </h2>
              <p className="text-primary">{formData.profession || 'Your Profession'}</p>
              <p className="mt-2 text-sm text-gray-600">
                {formData.bio || 'Your bio will appear here...'}
              </p>
              {formData.showBookingButton && (
                <button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white shadow transition-all hover:bg-primary/90 hover:shadow-primary/25">
                  Book Now
                </button>
              )}
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                {formData.instagramHandle && (
                  <p>Instagram: @{formData.instagramHandle}</p>
                )}
                {formData.whatsappNumber && (
                  <p>WhatsApp: {formData.whatsappNumber}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}