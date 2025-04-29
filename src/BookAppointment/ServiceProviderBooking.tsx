import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import { ChevronDown, UserCircle2 } from 'lucide-react';

// Example service data
const services = [
  { id: '1', name: 'Braiding', duration: '2h', price: 60 },
  { id: '2', name: 'Makeup', duration: '1h', price: 40 },
  { id: '3', name: 'Photography Session', duration: '1.5h', price: 100 },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
];

export function ServiceProviderBooking() {
  // State
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [contactMethods, setContactMethods] = useState({ whatsapp: '', instagram: '', other: '' });

  // Derived
  const service = services.find(s => s.id === selectedService);

  // Load contact methods from localStorage (simulate settings persistence)
  useEffect(() => {
    const saved = localStorage.getItem('glowlink_contact_methods');
    if (saved) setContactMethods(JSON.parse(saved));
  }, []);

  // WhatsApp message generator
  const getWhatsAppLink = () => {
    if (!contactMethods.whatsapp) return null;
    const msg = encodeURIComponent(
      `Appointment Request for ${service?.name}\nDate: ${selectedDate ? selectedDate.toLocaleDateString() : ''}\nTime: ${selectedTime}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNotes: ${notes}`
    );
    return `https://wa.me/${contactMethods.whatsapp.replace(/\D/g, '')}?text=${msg}`;
  };

  // Handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!name || !phone || !email || !selectedDate || !selectedTime) {
      setError('Please fill in all required fields.');
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-8 px-2 bg-[url('https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&fit=crop&w=1200&q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:z-0">
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/90 p-6 flex flex-col md:flex-row gap-8">
          {/* Left: Form Fields */}
          <div className="flex-1 space-y-6">
            {/* Service Selector */}
            <div>
              <label className="block font-poppins text-sm mb-1 text-accent">Service</label>
              <div className="relative">
                <select
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-8 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                >
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* Date Picker */}
            <div>
              <label className="block font-poppins text-sm mb-1 text-accent">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                placeholderText="Select a date"
                calendarClassName="font-inter"
              />
            </div>
            {/* Time Selector */}
            <div>
              <label className="block font-poppins text-sm mb-1 text-accent">Time</label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                value={selectedTime}
                onChange={e => setSelectedTime(e.target.value)}
              >
                <option value="">Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            {/* Customer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins text-sm mb-1 text-accent">Name</label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block font-poppins text-sm mb-1 text-accent">Phone Number</label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-poppins text-sm mb-1 text-accent">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            {/* Notes Section */}
            <div>
              <label className="block font-poppins text-sm mb-1 text-accent">Notes (optional)</label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-2 font-inter text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Special requests or notes for your provider"
                rows={3}
              />
            </div>
          </div>
          {/* Right: Summary Card */}
          <div className="w-full md:w-72 flex-shrink-0 flex flex-col gap-4 bg-white/90 rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="font-poppins text-lg font-semibold text-accent mb-2">Summary</div>
            <div className="flex flex-col gap-2 text-sm font-inter">
              <div className="flex justify-between"><span>Service:</span> <span>{service?.name}</span></div>
              <div className="flex justify-between"><span>Duration:</span> <span>{service?.duration}</span></div>
              <div className="flex justify-between"><span>Price:</span> <span className="text-primary font-semibold">${service?.price}</span></div>
              <div className="flex justify-between"><span>Date:</span> <span>{selectedDate ? selectedDate.toLocaleDateString() : '-'}</span></div>
              <div className="flex justify-between"><span>Time:</span> <span>{selectedTime || '-'}</span></div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-4 w-full rounded-full bg-primary text-white font-poppins font-semibold py-3 shadow-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Confirm Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="mt-4 w-full rounded-full bg-[#25D366] text-white font-poppins font-semibold py-3 shadow-md transition-all hover:bg-[#128C7E]/90 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 flex items-center justify-center gap-2"
              onClick={() => {
                const link = getWhatsAppLink();
                if (link) window.open(link, '_blank');
              }}
              disabled={!contactMethods.whatsapp || !name || !phone || !email || !selectedDate || !selectedTime}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />
              Send Booking via WhatsApp
            </motion.button>
            {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
            {success && <div className="mt-2 text-green-600 text-sm">Appointment confirmed!</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceProviderBooking;