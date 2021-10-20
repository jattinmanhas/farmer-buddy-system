import React from 'react'
import Header from './Header'
import AdCard from './AdCard'
import BigCard from './BigCard'
import Footer from '../Footer/footer'
// import Slider from "../Slider/Slider"
import Accordian from '../Accordian/Accordian'
import Review from '../SlideRev/Review'
import Post from '../Blog/Post/Post'
import { Link } from 'react-router-dom'
import "./Home.css"
import Product from '../SignProducts/Product'
import Extra from './extra'

function Home() {
     return (
       <>
         <Header />
         <AdCard />
         <BigCard />
         <Extra/>
         {/* <Slider/> */}
         <Review />
         <h1 className="h1__homepage">Our Most Popular Blogs</h1>
         <div className="underline__hompage"></div>
         <div className="homepage__posts">
           <div className="homepage__single">
             <Link to="/singlepage3" style={{ textDecoration: "none" }}>
               <Post
                 src="https://www.kisaanhelpline.com/govt_scheme_image/15072121015621PM%20Kisan%20Maan%20Dhan%20Yojana.jpg.jpg"
                 postTitle="Pradhan Mantri Kisan Maan Dhan Yojana
"
                 postDate="1 year ago"
                 postDesc="Government has launched the Pradhan Mantri Kisan Maan DhanYojana (PM-KMY) on 12.9.2019 with a view to provide social security to Small and Marginal Farmers in their old age when they have no means of livelihood and minimal or no savings to take care of their expenses.
"
               />
             </Link>
           </div>
           <div className="homepage__single">
             {/* {" "} */}
             <Link to="/singlepage5" style={{ textDecoration: "none" }}>
               <Post
                 src="https://img.jagranjosh.com/imported/images/E/GK/PM-Kisan-Samman-Nidhi-Yojana%202020.jpg"
                 postTitle="Pradhan Mantri Kisan Samman Nidhi
"
                 postDate="2 years ago"
                 postDesc="Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a new Central Sector Scheme to provide income support to all landholding farmers' families in the country to supplement their financial needs for procuring various inputs related to agriculture and allied activities as well as domestic needs."
               />
             </Link>
           </div>
           <div className="homepage__single">
             <Link to="/singlepage1" style={{ textDecoration: "none" }}>
               <Post
                 src="https://images.unsplash.com/photo-1581578017426-04fbc2b0511e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                 postTitle="How to Start Crop Farming Business For Highest Profits"
                 postDate="28 Sept. 2021"
                 postDesc="Before starting crop farming business, it is necessary to assess the available resources. As a conscious farmer, you will have to evaluate the amount of water, land, and the means and labor available. The following vital points will be the choice of crops and the purpose of their cultivation. "
               />
             </Link>
           </div>
         </div>
         <h1 className="h1__homepage">Our Most Popular Products</h1>
         <div className="underline__hompage"></div>
         <div className="homepage__posts homepage__produ">
           <div className="homepage__single">
             <Product
               id="125"
               title="Pyramid X826 5 way dial plastic hose nozzle | Adjustable shower"
               price={49.99}
               rating={5}
               image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/p/y/pyramidx826fivewaydialplastichosenozzle_1.png"
             />
           </div>

           <div className="homepage__single">
             <Product
               id="90829332"
               title="Nitrile NU 1513 Hand Gloves | Ideal Protection in Wet and Dry Conditions | Superior Grip"
               price={15.89}
               rating={3}
               image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/n/i/nitrilenu1513handgloveslargesize_1.png"
             />
           </div>
         </div>

         <Accordian style={{ background: "blue" }} />
         <Footer />
       </>
     );
}

export default Home
