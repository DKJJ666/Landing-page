import './App.css'
import './components/Sidebar/style.css'
import './components/Hero/style.css'
import './components/OurStore/style.css'
import './components/LookBook/style.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Tour from './components/Tour'
import OurStore from './components/OurStore'
import LookBook from './components/LookBook'
import Retail from './components/Retail'
import LocationSection from "./components/LocationSection";
import StoreSection from "./components/StoreSection";
import Footer from './components/Footer'


function App() {
  
  return (
    <>
    <LocationSection />
      <StoreSection />
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Tour />
        <OurStore />
        <LookBook />
        <Retail />
        <Footer />
      </main>
    </>
  )
}

export default App
