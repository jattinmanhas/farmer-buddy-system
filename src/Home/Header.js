import React from 'react'
import { Button } from '../ButtonDesign/Button'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
     return (
          <div className="header__container">
               <div className="image__container">
                    <img src="https://media.istockphoto.com/photos/sunrise-strawberry-farm-landscape-agricultural-agriculture-picture-id1091940998?k=20&m=1091940998&s=612x612&w=0&h=cs6cFdycUbBph7bdpmr1bqrNaaoioETjXB_Np8MaMus=" alt="Header Image" />
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
