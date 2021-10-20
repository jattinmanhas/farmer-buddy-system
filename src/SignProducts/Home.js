import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "../Footer/footer"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://contentwww.azureedge.net/ffty/ffty-produce-and-farm-products.jpg"
          alt=""
        />
        <h1 className="home__topText" >Best Quality and Cheap Products</h1>

        <div className="home__row">
          <Product
            id="124"
            title="Aglaonema Red Plant | hassle free addition to indoor spaces | add a spot of red and voila!"
            price={99.99}
            rating={3}
            image="images/redplant.png"
          />
          <Product
            id="125"
            title="Pyramid X826 5 way dial plastic hose nozzle | Adjustable shower"
            price={49.99}
            rating={5}
            image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/p/y/pyramidx826fivewaydialplastichosenozzle_1.png"
          />
          <Product
            id="126"
            title="Pyramid Double Side Rake & Trowel | Clearns leaves, grass | Digs scoops, and moves dirt"
            price={598.99}
            rating={4}
            image="images/pyramid.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="121"
            title="Digging Spade | Makes gardening easy | perfect for lifting and turning over soil "
            price={5.99}
            rating={4}
            image="images/diggingspade.jpg"
          />

          <Product
            id="122"
            title="Garlic Seeds | Superior Quality | High Yielding value and freshness"
            price={2.99}
            rating={3}
            image="images/garlicseeds.jpg"
          />
          <Product
            id="123"
            title="Neem Cake Powder | controls soil based pathogens | improves the efficiency of fertilisers."
            price={7.99}
            rating={2}
            image="images/neemcakepowder.jpeg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="FARMTRAC 60 POWERMAXX | High Power | Low Speed traction Vehicle | Powerful Engine and Economic Mileage"
            price={1994.98}
            rating={4}
            image="https://khetigaadi.com/images/new-tractor/EscortsFARMTRAC60POWERMAXX1582973342.png"
          />
        </div>

        <div className="home__row" style={{ marginBottom: "50px" }}>
          <Product
            id="90829332"
            title="Nitrile NU 1513 Hand Gloves | Ideal Protection in Wet and Dry Conditions | Superior Grip"
            price={15.89}
            rating={3}
            image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/n/i/nitrilenu1513handgloveslargesize_1.png"
          />

          <Product
            id="90829332"
            title="Onyx Mixed Colors Polished Pebbles | Add Colors to your garden borders | Beautiful and attractive pebbels"
            price={147.99}
            rating={4}
            image="https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/d/s/dsc09817_copy.jpg"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
