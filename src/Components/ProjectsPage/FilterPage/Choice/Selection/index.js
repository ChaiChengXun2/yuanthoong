import React, { useEffect, useState } from 'react';
import "./selection.css";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import "./responsive.css";

const Selection = ({ name, setCheckBox, reset }) => {

  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, [reset])

  return (
    <div className='selection flex-center-between default-text' onClick={() => {
      setStatus(prev => !prev);

      let tempName = "";
      if (name === "On Going") {
        tempName = false;
      } else if (name === "Completed") {
        tempName = true; 
      } else {
        tempName = name
      }

      if (!status) {
        setCheckBox(prev => [...prev, tempName])
      } else {
        setCheckBox(prev => prev.filter(item => item !== tempName))
      }
    }}
    >{name} {status ? <BiCheckboxChecked /> : <BiCheckbox />}</div>
  )
}

export default Selection