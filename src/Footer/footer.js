import React from 'react';
import './footer.css';
import { Button } from '../ButtonDesign/Button';
import { Link } from 'react-router-dom';
import { FaTractor } from "react-icons/fa";

function Footer() {
     return (
       <div className="footer-container">
         <section className="footer-subscription">
           <p className="footer-subscription-heading">
             Join our Community and see the Difference.
           </p>
         </section>
         <div class="footer-links">
           <div className="footer-link-wrapper">
             <div class="footer-link-items">
               <h2>About Us</h2>
               <Link to="/sign-up">We are</Link>
               <Link to="/">some</Link>
               <Link to="/">hardworking</Link>
               <Link to="/">people</Link>
               {/* <Link to='/'></Link> */}
             </div>
             <div class="footer-link-items">
               <h2>Contact Us</h2>
               <Link to="/">123</Link>
               <Link to="/">React lane</Link>
               <Link to="/">Javascript</Link>
               <Link to="/">Web DEvelopment</Link>
             </div>
           </div>
           <div className="footer-link-wrapper">
             <div class="footer-link-items">
               <h2>Social Media</h2>
               <Link to="/">Instagram</Link>
               <Link to="/">Facebook</Link>
               <Link to="/">Youtube</Link>
               <Link to="/">Twitter</Link>
             </div>
           </div>
         </div>
         <section class="social-media">
           <div class="social-media-wrap">
             <div class="footer-logo">
               <Link to="/" className="social-logo">
                 FBS&nbsp;
                 <FaTractor />
                 {/* <i class='fab fa-typo3' /> */}
               </Link>
             </div>
             <small class="website-rights">FBS © 2020</small>
             <div class="social-icons">
               <Link
                 class="social-icon-link facebook"
                 to="/"
                 target="_blank"
                 aria-label="Facebook"
               >
                 <i class="fab fa-facebook-f" />
               </Link>
               <Link
                 class="social-icon-link instagram"
                 to="/"
                 target="_blank"
                 aria-label="Instagram"
               >
                 <i class="fab fa-instagram" />
               </Link>
               <Link
                 class="social-icon-link youtube"
                 to="/"
                 target="_blank"
                 aria-label="Youtube"
               >
                 <i class="fab fa-youtube" />
               </Link>
               <Link
                 class="social-icon-link twitter"
                 to="/"
                 target="_blank"
                 aria-label="Twitter"
               >
                 <i class="fab fa-twitter" />
               </Link>
               <Link
                 class="social-icon-link twitter"
                 to="/"
                 target="_blank"
                 aria-label="LinkedIn"
               >
                 <i class="fab fa-linkedin" />
               </Link>
             </div>
           </div>
         </section>
       </div>
     );
}

export default Footer;