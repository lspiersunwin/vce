import React, { useState, useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import { GatsbyContext } from "../context/context" am I needed
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
