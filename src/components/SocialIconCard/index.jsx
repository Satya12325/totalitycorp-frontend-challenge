import React from 'react';

function SocialIconCard({icon}) {
    return (
        <div className="socialIcon">
               
               <i class={`fa-brands ${icon}`}></i>
              
          </div>
    );
}

export default SocialIconCard;