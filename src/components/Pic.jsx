import React from "react";
import '../styles/pic.css';

function Pic(props) {
    return (
        <div className="lang-box">
            <img className="lang-pic" src={props.item} style={{padding:'3vw',
                height:'12vw'
            }}></img>
        </div>
    );
}

export default Pic;