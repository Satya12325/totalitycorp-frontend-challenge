import React from "react";

function FirstContainer(props) {
  return (
    <div className="first-container">
      <div>
        <img
          className="cfi-img"
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="first-container-text">
          <h1>Win a thousand Stars</h1>
          <h3>
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </h3>
        <button className="btn btn-trans">Play to win</button>
        </div>
      </div>
      
    </div>
  );
}

export default FirstContainer;
