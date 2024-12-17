import React from "react";

function InfoCard(promps) {

    return (
        <div>
            <strong style={{fontWeight:'700'}}>{promps.name}</strong>{promps.additionalName}<br />
            <em style={{fontStyle:'italic', fontSize:'smaller'}}>{promps.years}</em><br />
            {promps.content}
        </div>
    );

}

export default InfoCard;