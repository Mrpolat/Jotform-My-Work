import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SideBar from '../components/SideBar'
import PetAdoptionForm from '../components/PetAdoptionForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path='/:subid' element={<MainSection />} />
          <Route path='/:subid/AdaptionForm' element={<PetAdoptionForm />} />
        </Routes>        
      </Router>
    </div>
  )
}

export default Index