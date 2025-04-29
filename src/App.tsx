import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SignUp } from './auth/SignUp'
import { Login } from './auth/Login'
import { Dashboard } from './components/Dashboard'
import { PublicProfile } from './components/PublicProfile'
import { Settings } from './components/Settings'
import { BookAppointment } from './BookAppointment/BookAppointment'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-accent/5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar showLogoAsHomeButton />
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
            }
          />
          <Route path="/signup" element={<><Navbar showLogoAsHomeButton minimal /><SignUp /></>} />
          <Route path="/login" element={<><Navbar showLogoAsHomeButton minimal /><Login /></>} />
          <Route path="/auth/Login" element={<><Navbar showLogoAsHomeButton minimal /><Login /></>} />
          
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar showLogoAsHomeButton />
                <Dashboard />
              </>
            }
          />
          <Route path="/PublicProfile" element={<><Navbar showLogoAsHomeButton /><PublicProfile /></>} />
          <Route path="/Settings" element={<><Navbar showLogoAsHomeButton /><Settings /></>} />
          <Route path="/BookAppointment" element={<><Navbar showLogoAsHomeButton /><BookAppointment /></>} />
          <Route path="/HowItWorks" element={<><Navbar showLogoAsHomeButton /><HowItWorks /></>} />
          <Route path="/Testimonials" element={<><Navbar showLogoAsHomeButton /><Testimonials /></>} />
          <Route path="/Features" element={<><Navbar showLogoAsHomeButton /><Features /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App