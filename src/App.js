import React,{useEffect} from 'react';
import reactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import SinglePost1 from './Blog/SinglePost/SinglePost';
import SinglePost2 from './Blog/SinglePost/SinglePost2';
import SinglePost3 from './Blog/SinglePost/SinglePost3';
import SinglePost4 from './Blog/SinglePost/SinglePost4';
import SinglePost5 from './Blog/SinglePost/SinglePost5';
import SinglePost6 from './Blog/SinglePost/SinglePost6';
import SinglePost7 from './Blog/SinglePost/SinglePost7';
import SinglePost8 from './Blog/SinglePost/SinglePost8';
import HomePro from "./SignProducts/Home";
import Checkout from './SignProducts/Checkout';
import Login from './SignProducts/Login';
import { useStateValue } from './SignProducts/StateProvider';
import { auth } from "./firebase";
import Payment from './SignProducts/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './SignProducts/Orders';
import Contact from './Queries/Contact';

const promise = loadStripe(
  "pk_test_51JiJG0SIf2AWHkZ990iuoMG6d5Sb8ssZNbIJZVgTSL3KrVvkDKVtijsrKehwe6eTnAJ5WqYdQ3tXOmg0QtBVSDux00j7KZscs4"
);

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
     // will only run once when the app component loads...

     auth.onAuthStateChanged((authUser) => {
       console.log("THE USER IS >>> ", authUser);

       if (authUser) {
         // the user just logged in / the user was logged in

         dispatch({
           type: "SET_USER",
           user: authUser,
         });
       } else {
         // the user is logged out
         dispatch({
           type: "SET_USER",
           user: null,
         });
       }
     });
   }, []);

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-up">
            <Login />
          </Route>
          <Route path="/products">
            <HomePro />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/singlepage1">
            <SinglePost1 />
          </Route>
          <Route path="/singlepage2">
            <SinglePost2 />
          </Route>
          <Route path="/singlepage3">
            <SinglePost3 />
          </Route>
          <Route path="/singlepage4">
            <SinglePost4 />
          </Route>
          <Route path="/singlepage5">
            <SinglePost5 />
          </Route>
          <Route path="/singlepage6">
            <SinglePost6 />
          </Route>
          <Route path="/singlepage7">
            <SinglePost7 />
          </Route>
          <Route path="/singlepage8">
            <SinglePost8 />
          </Route>
          <Route path="/wishlist">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/queries">
            <Contact/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;