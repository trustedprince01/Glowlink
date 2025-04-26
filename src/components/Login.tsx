import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface LoginFormData {
  email: string
  password: string
}

export function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login form submitted:', formData)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 mix-blend-multiply"></div>
        <img
          src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beauty professional at work"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center text-white p-8">
            <p className="text-lg mb-2">Keep Glowing. Keep Growing.</p>
            <h2 className="font-poppins text-4xl font-bold">Welcome Back to GlowLink ✨</h2>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-accent/5">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="font-poppins text-3xl font-bold text-gray-900">Log In to Your Account</h2>
            <p className="mt-2 text-gray-600">Continue your journey with GlowLink</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-end">
                <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              >
                Log In to My GlowLink
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                New to GlowLink?{' '}
                <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Create an Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}