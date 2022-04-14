import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SideBar from '../components/SideBar'
import PetAdoptionForm from '../components/PetAdoptionForm'
import RightSideBar from '../components/RightSideBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useAction } from '../context/action'

const Index=()=> {

  // const {  success  } = useAction();

  return (
    <div>
     
      <Router>
        <Header/>        
        <SideBar />
        <Routes>
          <Route exact path='/' element={<MainSection  />}/>
          <Route path='/:subid' element={<MainSection  />}/>
          <Route path='/:subid/AdaptionForm' element={<PetAdoptionForm  />}/>
        </Routes>
        <RightSideBar/>
        
      </Router>
    </div>
  )
}

export default Index