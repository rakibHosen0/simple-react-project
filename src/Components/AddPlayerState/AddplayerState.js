import React from "react";
import "./AddPlayerState.css";
const Addplayer = (props) => {
  const player = props.addPlayer;
  const totalbudget = player.reduce(
    (total, player) => total + parseInt(player.salary),
    0
  );
  return (
    <div className="totalPlayer">
      <h4>Total Added Player :{player.length}</h4>
      {player.map((player) => (
        <li className="player-list">
          {player.name} : {player.salary}{" "}
        </li>
      ))}
      <h5>Total Budget : ${totalbudget}</h5>
    </div>
  );
};

export default Addplayer;
