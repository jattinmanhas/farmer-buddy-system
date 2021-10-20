import React from 'react'
import "./AdCard.css"
import AdCardComponent from './AdCardComponent'
import { FaAward } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";
import { MdSentimentVerySatisfied } from "react-icons/md";


function AdCard() {
     return (
          <div className="adCard__container">
               <AdCardComponent logo={<FaAward />} title="Quality Matters" description="We’re determined to keep up the quality of all of our farming products as high as possible." />
               <AdCardComponent logo={<IoIosPerson />} title="Individual Apporach" description="We spend time with our clients, discuss their needs and make appropriate recommendations." />
               <AdCardComponent logo={<MdSentimentVerySatisfied/> } title="Customer Satisfaction" description="We guarantee you frash and high quality products. Become one of our thousands of satisfied." />
              
          </div>
     )
}

export default AdCard
