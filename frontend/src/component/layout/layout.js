import React from 'react'
import Header from './Header/Header.js'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/footer.js'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout


