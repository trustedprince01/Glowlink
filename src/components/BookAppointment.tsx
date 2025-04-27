import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, Loader2, Package2, Scissors } from 'lucide-react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

interface Item {
  id: string
  name: string
  price: string
  image: string
  description: string
}

type BusinessType = 'service' | 'product'

export function BookAppointment() {
  const [businessType] = useState<BusinessType>('service') // This would come from user settings
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const services: Item[] = [
    {
      id: '1',
      name: 'Haircut & Styling',
      price: '50',
      description: 'Professional haircut and styling service',
      image: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: '2',
      name: 'Color Treatment',
      price: '120',
      description: 'Full hair coloring service',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: '3',
      name: 'Hair Extension',
      price: '200',
      description: 'Premium hair extension service',
      image: 'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]

  const products: Item[] = [
    {
      id: '1',
      name: 'Handmade Necklace',
      price: '45',
      description: 'Beautiful handcrafted necklace',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: '2',
      name: 'Custom T-Shirt',
      price: '35',
      description: 'Personalized design t-shirt',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: '3',
      name: 'Artisan Soap Set',
      price: '25',
      description: 'Handmade organic soap collection',
      image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]

  const items = businessType === 'service' ? services : products
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setShowSuccess(true)
  }

  const handleNewBooking = () => {
    setShowSuccess(false)
    setSelectedDate(null)
    setSelectedTime('')
    setSelectedItem('')
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 flex items-center justify-center bg-black/50 px-4"
      >
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            {businessType === 'service' ? (
              <Calendar className="h-10 w-10 text-primary" />
            ) : (
              <Package2 className="h-10 w-10 text-primary" />
            )}
          </div>
          <h2 className="font-poppins text-2xl font-bold text-gray-900">
            {businessType === 'service' ? 'Booking Successful! 🎉' : 'Order Placed! 🎉'}
          </h2>
          <p className="mt-4 text-gray-600">
            {businessType === 'service'
              ? "We'll confirm your appointment via WhatsApp shortly."
              : "We'll process your order and contact you via WhatsApp for delivery details."}
          </p>
          <div className="mt-8">
            <button
              onClick={handleNewBooking}
              className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90"
            >
              {businessType === 'service' ? 'Make Another Booking' : 'Place Another Order'}
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-poppins text-2xl font-bold text-accent">GlowLink</h1>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
            <ArrowLeft className="h-4 w-4" />
            Back to Profile
          </button>
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl bg-white shadow-xl"
        >
          <div className="border-b border-gray-200 bg-white/50 px-8 py-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              {businessType === 'service' ? (
                <Scissors className="h-6 w-6 text-primary" />
              ) : (
                <Package2 className="h-6 w-6 text-primary" />
              )}
              <h2 className="font-poppins text-xl font-semibold text-gray-900">
                {businessType === 'service' ? 'Book an Appointment' : 'Place an Order'}
              </h2>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {businessType === 'service'
                ? 'Fill in the details below to schedule your appointment'
                : 'Select your items and preferred delivery time'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-8">
              {/* Item Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {businessType === 'service' ? 'Select Service' : 'Select Product'}
                </label>
                <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedItem(item.id)}
                      className={`group relative overflow-hidden rounded-2xl border-2 p-4 text-left transition-all hover:shadow-md ${
                        selectedItem === item.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="mb-3 aspect-square overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-primary">${item.price}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {businessType === 'service' ? 'Select Date' : 'Preferred Delivery Date'}
                  </label>
                  <div className="mt-2">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      className="w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                      placeholderText="Choose a date"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {businessType === 'service' ? 'Select Time' : 'Preferred Delivery Time'}
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-xl px-4 py-3 text-sm transition-all ${
                          selectedTime === time
                            ? 'bg-primary text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
                {businessType === 'product' && (
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                      placeholder="Enter your delivery address"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    placeholder={businessType === 'service' 
                      ? "Any special requests or information?"
                      : "Any special instructions for delivery?"}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedItem || !selectedDate || !selectedTime || isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {businessType === 'service' ? (
                      <>
                        <Clock className="h-5 w-5" />
                        Book Appointment
                      </>
                    ) : (
                      <>
                        <Package2 className="h-5 w-5" />
                        Place Order
                      </>
                    )}
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}