import React from 'react'
import "./AdCartComponent.css";

function AdCardComponent({logo,title,description}) {
     return (
          <div className="adCard">
               <div className="cardLogo">
                    <h1>{logo}</h1>
               </div>
               <div className="cardTitle">
                    <h2>{title}</h2>
               </div>
               <div className="cardDescription">
                    <p>{description}</p>
               </div>
          </div>
     )
}

export default AdCardComponent
