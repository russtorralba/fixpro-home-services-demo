import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import ServiceAreas from './components/ServiceAreas'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingFlow from './components/BookingFlow'
import LegalPage from './components/LegalPage'

function routeFromHash() { return window.location.hash.replace('#', '') || 'home' }

export default function App() {
  const [route, setRoute] = useState(routeFromHash)
  const [bookingSeed, setBookingSeed] = useState({})

  useEffect(() => {
    const updateRoute = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  function startBooking(seed = {}) {
    setBookingSeed(seed)
    window.location.hash = 'book'
  }
  function exitBooking() { window.location.hash = 'top' }

  if (route === 'book') return <div className="min-h-screen bg-[#f8f9ff] text-[#0d1c2f]"><Header /><BookingFlow initialData={bookingSeed} onExit={exitBooking} /></div>
  if (['privacy', 'terms', 'disclaimer'].includes(route)) return <div className="min-h-screen bg-[#f8f9ff] text-[#0d1c2f]"><Header /><LegalPage page={route} onExit={exitBooking} /></div>
  return <div className="min-h-screen bg-[#f8f9ff] text-[#0d1c2f]"><Header /><main id="main-content"><Hero onStartBooking={startBooking} /><Services /><WhyChooseUs /><HowItWorks /><Reviews /><ServiceAreas /><FAQ /><FinalCTA /></main><Footer /></div>
}
