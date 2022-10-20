import React from 'react';

function FinalContainer({head,details,btnName,images,direction,style}) {
    return (
        <div  className="first-container final">
      <div>
        <img
          className="cfi-img"
          src={images}
          alt=""
        />
      </div>
      <div>
        <div className="first-container-text">
          <h1 style={{color: "white"}}>{head}</h1>
          <h3 style={{color: "white"}}>
           {details}
          </h3>
        <button style={{color: "white"}} className="btn btn-trans">{btnName}</button>
        </div>
      </div>
      
    </div>
    );
}

export default FinalContainer;