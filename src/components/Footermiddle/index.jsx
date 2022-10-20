import React from 'react';

function Footermiddle(props) {
    const {footerhead,footersub} = props;
    return (
        <div className="footermiddle">
            <h5>
                {footerhead}
            </h5>
            {
                footersub?.map(e=><p key={e}>{e}</p>)
            }
            
        </div>
    );
}

export default Footermiddle;