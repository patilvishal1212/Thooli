import React from 'react'
import Home from '../components/pages/Home/Home'
import Contact from '../components/pages/Contact/Contact'
// import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    // <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/pathway" element={<Pathway />} />
    //     <Route path="/jobs" element={<Jobs />} />
    //     <Route path="/*" element={<PageNotFound />} />
    //   </Routes>
    <div>
        {/* <Home/> */}
        <Contact/>
    </div>
  )
}

export default AppRoutes
