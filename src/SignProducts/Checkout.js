import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout__full">
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://64.media.tumblr.com/b976d275fe67f97c87d8dd18dc3a1d2c/tumblr_ovnmwrOnxI1wv7s6to1_1280.png"
            alt=""
          />
          <h1 className="checkout__headText">Save Trees Save Lives</h1>

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
