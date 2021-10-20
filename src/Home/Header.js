import React from 'react'
import { Button } from '../ButtonDesign/Button'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
     return (
          <div className="header__container">
               <div className="image__container">
                    <img src="images/head.jpeg" alt="Header Image" />
               </div>
               <div className="text__container">
                    <h1>Best Irrigation Solutions and Products</h1>
                    <p>You'll never find anything like this</p>
               </div>
               <div className="button-container">
                    <Link to="/products">
                         <Button className="btn-start" buttonStyle="btn--outline">GET STARTED</Button>
                    </Link>
               </div>
          </div>
     )
}

export default Header
