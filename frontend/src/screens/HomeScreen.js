import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './../components/Header'
import ShopSection from './../components/homecomponents/ShopSection'
import ContactInfo from './../components/homecomponents/Contactinfo'
import CalltoActionScreen from './../components/homecomponents/CalltoActionSection'
import Footer from './../components/Footer'

const HomeScreen = () => {
  const { keyword, pagenumber } = useParams();
    window.scrollTo(0,0)
  return (
    <div>
        <Header />
        <ShopSection keyword={keyword} pagenumber={pagenumber} />
        <CalltoActionScreen />
        <ContactInfo />
        <Footer />
    </div>
  )
}

export default HomeScreen