import { useState } from 'react'
import { ArrowLeft, Package, Truck, MapPin, User, Phone, Mail, Plus, Minus } from 'lucide-react'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

type DeliveryMethod = 'delivery' | 'pickup'

export function ProductSellerOrder() {
  const [selectedProduct, setSelectedProduct] = useState<string>('')
  const [quantity, setQuantity] = useState(1)
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  })

  const products: Product[] = [
    {
      id: '1',
      name: 'Ankara Tote Bag',
      price: 45,
      description: 'Handmade African print tote bag',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Ceramic Vase Set',
      price: 65,
      description: 'Set of 3 handcrafted ceramic vases',
      image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Throw Pillow Cover',
      price: 25,
      description: 'Decorative pillow cover with modern design',
      image: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  const selectedProductDetails = products.find(product => product.id === selectedProduct)
  const deliveryFee = deliveryMethod === 'delivery' ? 10 : 0
  const total = (selectedProductDetails?.price || 0) * quantity + deliveryFee

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Order submitted:', {
      product: selectedProductDetails,
      quantity,
      deliveryMethod,
      total,
      ...formData
    })
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center py-8 px-2 bg-[url('https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&fit=crop&w=1200&q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:z-0">
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-poppins text-3xl font-bold text-gray-900">Place an Order</h1>
            <p className="mt-1 text-gray-600">Select your items and delivery preferences</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Product Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-white/90 p-6 shadow-sm"
              >
                <h2 className="font-poppins text-lg font-semibold text-gray-900">Select Product</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setSelectedProduct(product.id)}
                      className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all hover:shadow-md ${
                        selectedProduct === product.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="mb-3 aspect-square overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="mt-1 text-sm text-primary">${product.price}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
  
              {/* Quantity & Delivery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-white/90 p-6 shadow-sm"
              >
                <h2 className="font-poppins text-lg font-semibold text-gray-900">Quantity & Delivery</h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <div className="mt-1 flex w-36 items-center rounded-xl border border-gray-300 bg-gray-50">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(-1)}
                        className="flex h-10 w-10 items-center justify-center text-gray-600 hover:text-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        readOnly
                        className="w-16 border-0 bg-transparent text-center focus:ring-0"
                      />
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(1)}
                        className="flex h-10 w-10 items-center justify-center text-gray-600 hover:text-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Method</label>
                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`flex items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                          deliveryMethod === 'delivery'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Truck className="h-5 w-5 text-gray-600" />
                        <div className="text-left">
                          <p className="font-medium text-gray-900">Home Delivery</p>
                          <p className="text-sm text-gray-500">Delivered to your address</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`flex items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                          deliveryMethod === 'pickup'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <MapPin className="h-5 w-5 text-gray-600" />
                        <div className="text-left">
                          <p className="font-medium text-gray-900">Store Pickup</p>
                          <p className="text-sm text-gray-500">Collect from our store</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
  
              {/* User Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-white/90 p-6 shadow-sm"
              >
                <h2 className="font-poppins text-lg font-semibold text-gray-900">Your Details</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="h-4 w-4" />
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Phone className="h-4 w-4" />
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                    />
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <div>
                      <label htmlFor="address" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <MapPin className="h-4 w-4" />
                        Delivery Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 shadow-sm transition-colors focus:border-primary focus:bg-white focus:ring-primary"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </form>
  
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl bg-white/90 p-6 shadow-sm lg:sticky lg:top-8"
          >
            <h2 className="font-poppins text-lg font-semibold text-gray-900">Order Summary</h2>
            {selectedProductDetails ? (
              <div className="mt-4 space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={selectedProductDetails.image}
                    alt={selectedProductDetails.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Selected Product</p>
                  <p className="font-medium text-gray-900">{selectedProductDetails.name}</p>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-medium text-gray-900">{quantity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price per unit</p>
                    <p className="font-medium text-gray-900">${selectedProductDetails.price}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="font-medium text-gray-900">
                      ${selectedProductDetails.price * quantity}
                    </p>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <p className="text-sm text-gray-500">
                      {deliveryMethod === 'delivery' ? 'Delivery Fee' : 'Pickup'}
                    </p>
                    <p className="font-medium text-gray-900">
                      {deliveryMethod === 'delivery' ? `$${deliveryFee}` : 'Free'}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-gray-100 pt-4">
                    <p className="text-lg font-semibold text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-primary">${total}</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!selectedProduct}
                  className="mt-6 w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Place Order
                </button>
              </div>
            ) : (
              <p className="mt-4 text-center text-gray-500">Select a product to see the summary</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}