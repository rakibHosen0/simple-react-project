import React from "react";
import { Button } from "react-bootstrap";
import "./SinglePlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const SinglePlayer = (props) => {
  const { name, images, salary, role } = props.player;
  return (
    <div className="card custom-card">
      <div className="card-img">
        <img src={images} alt=""></img>
      </div>
      <div className="card-body">
        <h5>{name}</h5>
        <p>Salary : ${salary}</p>
        <p>Role : {role}</p>
      </div>
      <Button onClick={() => props.handleAddPlayer(props.player)}>
        <FontAwesomeIcon icon={faUserPlus} />
        Add Player
      </Button>
    </div>
  );
};

export default SinglePlayer;
