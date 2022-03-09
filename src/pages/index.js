import React from 'react'
import Forms from '../components/forms'
import User from '../components/user'
import Header from '../components/Header/header'
import MainSection from '../components/MainSection/mainSection'
import SideBar from '../components/SideBar/sideBar'
function Index() {
  return (
    <div>
      <Header/>
      <SideBar/>
      <MainSection/>
        {/* <User/>
        <Forms/> */}
    </div>
  )
}

export default Index