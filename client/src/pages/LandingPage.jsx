import React from 'react'
import Hero from '../components/LandingPage/Hero'
import TrustSection from '../components/LandingPage/TrustSection'
import AIPrescription from '../components/LandingPage/AIPrescription'
import MedicineCategories from '../components/LandingPage/MedicineCategories'
import PopularMedicines from '../components/LandingPage/PopularMedicine'
import HowItWorks from '../components/LandingPage/HowItWorks'
import LandingFooter from '../components/LandingPage/LandingFooter'

const LandingPage = () => {
  return (
    <div>
    <Hero/>
    <TrustSection />
    <AIPrescription/>
    <MedicineCategories/>
    <PopularMedicines/>
    <HowItWorks/>
    <LandingFooter/>


    </div>
  )
}

export default LandingPage