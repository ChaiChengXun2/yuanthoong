import React, { useEffect, useState } from 'react';
import "./choice.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Selection from './Selection';

const Choice = ({ name, selection, setData, reset }) => {
  
  const [openChoice, setOpenChoice] = useState(false);
  const [checkBox, setCheckBox] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setData(prev => ({
      ...prev, [`${name}`]: checkBox
    }))
  }, [checkBox, setData, name])

  useEffect(() => {
    if (name === "completion") {
      setTitle("completion date")
    } else {
      setTitle(name)
    }
  }, [name])

  return (
    <div className="choice">
      <div className="header flex-center-between default-text" onClick={() => {setOpenChoice(prev => !prev)}}>{title} {openChoice ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      {
        openChoice && <div className="select">
          {selection.map((select, i) => {
            return (
              <Selection name={select} key={i} setCheckBox={setCheckBox} reset={reset}/>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Choice