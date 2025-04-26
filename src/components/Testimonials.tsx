export function Testimonials() {
  const testimonials = [
    {
      quote: "GlowLink has transformed how I manage my salon bookings. It's so easy to use!",
      author: "Sarah Johnson",
      role: "Hair Stylist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "My clients love how easy it is to book appointments through my GlowLink profile.",
      author: "Michael Chen",
      role: "Makeup Artist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "The Instagram integration is perfect for showcasing my latest work!",
      author: "Emma Davis",
      role: "Nail Artist",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
  ]

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-accent/5"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-accent sm:text-5xl">
            Loved by Creators
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of creative professionals who trust GlowLink
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group relative overflow-hidden rounded-3xl bg-white/40 p-8 shadow-lg backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-xl"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl transition-all group-hover:opacity-70"></div>
              <div className="relative">
                <blockquote className="text-lg text-gray-600">"{testimonial.quote}"</blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      className="h-14 w-14 object-cover"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div>
                    <div className="font-poppins text-lg font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}