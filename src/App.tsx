import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SignUp } from './components/SignUp'
import { Login } from './auth/Login'
import { Dashboard } from './components/Dashboard'
import { PublicProfile } from './components/PublicProfile'
import { Settings } from './components/Settings'
import { BookAppointment } from './components/BookAppointment'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-accent/5">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div id="features">
                <Features />
              </div>
              <div id="how-it-works">
                <HowItWorks />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <Footer />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/PublicProfile" element={<PublicProfile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App