import React, { Children } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/shared_components/Header"
import Footer from "./components/shared_components/Footer"
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
