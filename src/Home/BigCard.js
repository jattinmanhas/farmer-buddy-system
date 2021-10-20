import React from "react";
import "./BigCard.css";
import { Link } from "react-router-dom";
import { Button } from "../ButtonDesign/Button";

function BigCard() {
  return (
    <div className="bigCard__container">
      <div className="bigCard__image">
        <img src="images/big card.jpeg" alt="New Irrigation Image" />
      </div>
      <div className="bigCard__text">
        <h3>
          We provide everything from irrigation solutions and installation to
          maintenance for residential and commercial properties.
        </h3>
        <p>
          We are one of only a few that truly specialize in irrigation. If
          you’re a detail minded person, our attention to detail far exceeds the
          rest. Our design standards, high quality workmanship, vast knowledge
          of cutting edge smart technology, expertise, and honesty sets us
          apart.
        </p>

          <Link to="/queries">
               <Button className="btn-start" buttonStyle="btn--primary">
               More Info
          </Button>
          </Link>
      </div>
    </div>
  );
}

export default BigCard;
