import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SideBar from '../components/SideBar'
import PetAdoptionForm from '../components/PetAdoptionForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetAnimalForm from '../components/PetAnimalForm';

const Index = () => {
  return (
    <div>
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path='/:subid' element={<MainSection />} />
          <Route path='/AnimalForm' element={<PetAnimalForm />} />
          <Route path={'/:subid/'+`AdaptionForm/&petId:petID`} element={<PetAdoptionForm />} />
        </Routes>        
      </Router>
    </div>
  )
}
export default Index