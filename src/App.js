import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Homepage from './Components/Homepage';
import ProjectsPage from "./Components/ProjectsPage";
import ProjectDetails from "./Components/ProjectDetails";
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";
import { onValue, ref } from 'firebase/database';
import { db } from "./database";
import About from "./Components/About";

const auth = getAuth(app); 

const App = () => {

  const [ccx, setCCX] = useState(false);
  
  useEffect(() => {
    signInAnonymously(auth).then(() => {
      onValue(ref(db, '/1psJiCrkNCjMeSCeQ0JKEUHODLiB8__jzo_iEaVinbXg/Sheet1'), (snapshot) => {
        const data = snapshot.val(); 
        if (data !== null) {
          setCCX(Object.values(data))
        }
      }, {onlyOnce: true})
    });
  }, [])

  useEffect(() => {
    document.title = "Yuan Thoong SDN BHD | Construction and Renovations";
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage ccx={ccx}/>}></Route>
        <Route path="/projects" element={<ProjectsPage ccx={ccx}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails ccx={ccx}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App