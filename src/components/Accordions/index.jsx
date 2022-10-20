import React from "react";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import { useState, useEffect } from "react";

function Accorditions(props) {
    const {footerhead,footersub} = props;
  const [arrow, setArrow] = useState(false);
  const [display,setDisplay] = useState("none");
  const [trans,setTrans] = useState(null);
  const handleOpen = () => {
    setArrow(!arrow);
    if(display === "none"){

        setDisplay("block")
    }
    else{
        setDisplay("none")
    }
    setTrans("10s")
  };
  return (
    <div className="accordions-body">
      <div className="accordionInner footermiddle" onClick={handleOpen}>
        <h5>{footerhead}</h5>
        <div>
          {arrow ? (
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i class="fa-solid fa-chevron-down"></i>
            
          )}
        </div>
      </div>
      <div style={{display:display}} className="drawer">
            <div style={{transition:trans}} className="display footermiddle">
           
            {
                footersub?.map(e=><p key={e}>{e}</p>)
            }
     
            </div>
      </div>
    </div>
  );
}

export default Accorditions;
