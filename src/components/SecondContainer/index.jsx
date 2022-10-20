import React from 'react';

function SecoundContainer(props) {
    return (
        <div className="SecoundContainer first-container">
            <div className='sec-text'>
                <h2>
                A new way to earn sips and trips
                </h2>
                <h3>
                Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:
                </h3>
                

                <li>150 Stars + 500 miles when you link before 12/31</li>
                <li>Double Stars on Delta travel days</li>
                <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**</li>
                
               <div>
                <button style={{}}className="btn btn-trans">Link accounts</button>
                </div> 
            </div>
            <div>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg" alt="" />
            </div>
        </div>
    );
}

export default SecoundContainer;