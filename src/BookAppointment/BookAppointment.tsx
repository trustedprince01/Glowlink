import { useState } from 'react';
import { ServiceProviderBooking } from './ServiceProviderBooking';
import { ProductSellerOrder } from './ProductSellerOrder';

export function BookAppointment() {
  // User can toggle between service and product booking
  const [businessType, setBusinessType] = useState<'service' | 'product'>('service');

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center py-8 px-2">
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full font-poppins font-semibold text-sm shadow transition-all border-2 focus:outline-none ${businessType === 'service' ? 'bg-primary text-white border-primary' : 'bg-white text-accent border-gray-200 hover:bg-primary/10'}`}
          onClick={() => setBusinessType('service')}
        >
          Book Appointment
        </button>
        <button
          className={`px-4 py-2 rounded-full font-poppins font-semibold text-sm shadow transition-all border-2 focus:outline-none ${businessType === 'product' ? 'bg-primary text-white border-primary' : 'bg-white text-accent border-gray-200 hover:bg-primary/10'}`}
          onClick={() => setBusinessType('product')}
        >
          Place Order
        </button>
      </div>
      <div className="w-full max-w-4xl">
        {businessType === 'service' ? (
          <ServiceProviderBooking />
        ) : (
          <ProductSellerOrder />
        )}
      </div>
    </div>
  );
}