import React, { useEffect, useState } from 'react';
import './filterpage.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import Choice from './Choice';
import { GrPowerReset } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";
import "./responsive.css";

const FilterPage = ({ showModal, setShowModal, setData }) => {

  const [reset, setReset] = useState(false);
  
  const yearGeneration = (beginning, end) => {
    const no = end - beginning + 1
    let listOfYear = [] 
    for (let i = 0; i < no; i++) { 
      listOfYear.push(beginning + i)
    }
    return listOfYear
  }

  useEffect(() => {
    if (showModal) {
      document.querySelector(".backdrop").style.display = "flex";
    } else {
      document.querySelector(".backdrop").style.display = "none";
    }
  }, [showModal])
  
  return (
    <div className='backdrop flex-center-end'>
      <div className='temp' onClick={() => setShowModal(false)}></div>
      <div className="filter-page flex-start-between">
        <div className="close" onClick={() => setShowModal(false)}><AiOutlineCloseCircle /></div>
        <div className="choices">
          <Choice selection={["Construction", "Renovation"]} name='type' setData={setData} reset={reset}/>
          <Choice selection={["On Going", "Completed"]} name='status' setData={setData} reset={reset}/>
          <Choice selection={yearGeneration(2009, new Date().getFullYear())} name='completion' setData={setData} reset={reset}/>
        </div>
        <div className="complete flex-center-center">
          <button className="default-button flex-center-center" onClick={() => {setData({"type": [], "status": [], "duration": []}); setReset(prev => !prev)}}><GrPowerReset />Reset</button>
          <button className="default-button flex-center-center" onClick={() => setShowModal(false)}><FiFilter />Filter</button>
        </div>
      </div>
    </div>
  )
}

export default FilterPage