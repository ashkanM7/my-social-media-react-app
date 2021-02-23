import React from "react"
import ReactDOM from "react-dom"

// My Compoenents
import Header from "./components/Header"
import HomeGeust from "./components/HomeGuest"
import Footer from "./components/Footer"

function Main() {
  return (
    <>
      <Header />
      <HomeGeust />
      <Footer />
    </>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
