import React from 'react'
import Hero from '../components/Hero'
import TrustSection from '../components/TrustSection'
import AIPrescription from '../components/AIPrescription'
import MedicineCategories from '../components/MedicineCategories'
import PopularMedicines from '../components/PopularMedicine'
import HowItWorks from '../components/HowItWorks'

const LandingPage = () => {
  return (
    <div>
    <Hero/>
    <TrustSection />
    <AIPrescription/>
    <MedicineCategories/>
    <PopularMedicines/>
    <HowItWorks/>
    

    </div>
  )
}

export default LandingPage