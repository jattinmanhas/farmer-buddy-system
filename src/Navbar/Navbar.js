import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Button } from '../ButtonDesign/Button';
import { FaTractor } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
// import { useStateValue } from '../ContextApi/StateProvider';
import { useStateValue } from '../SignProducts/StateProvider';
import { auth } from '../firebase';

function Navbar() {
     const [click, setclick] = useState(false);
     const [button, setButton] = useState(true);
     const [navbar, setNavbar] = useState(false);
     const [{ basket, user }, dispatch] = useStateValue();

     const handleClick = () => {
          setclick(!click);
     }

     const closeMobileMenu = () => {
          setclick(false);
     }

     const showButton = () => {
          if (window.innerWidth <= 960) {
               setButton(false);
          } else {
               setButton(true);
          }
     };

     useEffect(() => {
          showButton()
     }, []);

     window.addEventListener('resize', showButton);

     const changeBackground = () =>{
          if(window.scrollY >= 80){
               setNavbar(true);
          }
          else{
               setNavbar(false);
          }
     }

     window.addEventListener('scroll',changeBackground);

      const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      };

     return (
       <>
         <nav className={navbar ? "navbar active" : "navbar"}>
           <div className="navbar-container">
             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
               FBS &nbsp;
               <FaTractor />
             </Link>
             <div className="menu-icon" onClick={handleClick}>
               {click ? (
                 <FaTimes className="fa-times" />
               ) : (
                 <FaBars className="fa-bars" />
               )}
             </div>
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                   Home
                 </Link>
               </li>
               <li className="nav-item">
                 <Link
                   to="/blogs"
                   className="nav-links"
                   onClick={closeMobileMenu}
                 >
                   Blogs
                 </Link>
               </li>
               <li className="nav-item">
                 <Link
                   to="/products"
                   className="nav-links"
                   onClick={closeMobileMenu}
                 >
                   Products
                 </Link>
               </li>

               <li className="nav-item">
                 <Link
                   to="/queries"
                   className="nav-links"
                   onClick={closeMobileMenu}
                 >
                   Queries
                 </Link>
               </li>

               <li className="nav-item" onClick={handleAuthenticaton}>
                 <Link
                   to={!user && "/sign-up"}
                   className="nav-links nav__cont"
                   onClick={closeMobileMenu}
                 >
                   <span className="header__lineOne">
                     Hello {!user ? "Guest" : user.email}
                   </span>
                   <span className="header__lineTwo">
                     {user ? "Sign Out" : "Sign In"}
                   </span>
                 </Link>
               </li>

               <li className="nav-item">
                 <Link
                   to="/wishlist"
                   className="nav-links basket"
                   onClick={closeMobileMenu}
                 >
                   <MdShoppingBasket />
                   <span className="header__basketCount">{basket?.length}</span>
                 </Link>
               </li>
             </ul>
           </div>
         </nav>
       </>
     );
}

export default Navbar
