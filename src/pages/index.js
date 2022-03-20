import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import SideBar from '../components/SideBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Index=()=> {

  return (
    <div>
      <Header/>
      <Router>
        <SideBar />
        <Routes>
          <Route exact path='/' element={<MainSection  />}/>
          <Route path='/:subid' element={<MainSection  />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Index

