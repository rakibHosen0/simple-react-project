import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import fakePlayers from "../../fakePlayers/fakePlayer.json";
import "./Players.css";
import Addplayer from "../AddPlayerState/AddplayerState";
const Players = () => {
  const [player, setPlayer] = useState([fakePlayers]);
  const [addPlayer, setAddPlayer] = useState([]);
  useEffect(() => {
    setPlayer(fakePlayers);
  }, []);

  const handleAddPlayer = (player) => {
    const newPlayer = [...addPlayer, player];
    setAddPlayer(newPlayer);
  };
  return (
    <div>
      <h4 className="total-player">Total Player : {player.length}</h4>
      <div className="players-container">
        <div className="player-card">
          {player.map((player) => (
            <SinglePlayer
              player={player}
              handleAddPlayer={handleAddPlayer}
            ></SinglePlayer>
          ))}
        </div>
        <div className="selected-player">
          <Addplayer addPlayer={addPlayer}></Addplayer>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Players;
