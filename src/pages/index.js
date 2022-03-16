import React, { useState } from 'react'
import Header from '../components/Header/header'
import MainSection from '../components/MainSection/mainSection'
import SideBar from '../components/SideBar/sideBar'
function Index() {

  const [first, setfirst] = useState()
  console.log("first",first)
  return (
    <div>
      <Header/>
      <SideBar value={setfirst} />
      <MainSection  id={first}/>
    </div>
  )
}

export default Index