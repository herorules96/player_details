import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PlayerList, Root } from "../ApiModel/Model";
import { PlayerCard } from "../Components/PlayerCard";
import SearchBox from "../Components/SearchBox";
import PlayerContext from "../Contexts/PlayerContext";

const PlayerDetails = () => {
  const [playerDetails, setPlayDetails] = useState<PlayerList[]>();
  const playerContextDetails = useContext(PlayerContext);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((response) => response.data)
      .then((response: Root) => {
        setPlayDetails(response.playerList);
        playerContextDetails.allPlayerList = response.playerList;
      });
  }, [playerContextDetails]);

  if (!playerDetails?.length) {
    return null;
  }

  const removeDecimalFromValue = (str: string) =>
    Number(str.split(".").join(""));

  const sortPlayers = (playersList: PlayerList[]) => {
    const sorted = playersList.sort((a, b) => {
      if (removeDecimalFromValue(a.Value) < removeDecimalFromValue(b.Value)) {
        return -1;
      }
      if (removeDecimalFromValue(a.Value) > removeDecimalFromValue(b.Value)) {
        return 1;
      }
      return 0;
    });

    return sorted;
  };

  return (
    <div>
      <div className="container">
        <SearchBox setPlayerList={setPlayDetails} />
        {sortPlayers(playerDetails).map((player) => {
          return (
            <PlayerCard
              img={require(`../assets/player-images/${player.Id}.jpg`)}
              name={player.PFName}
              skills={player.SkillDesc}
              upComingMatches={player.UpComingMatchesList}
              value={player.Value}
              key={player.Id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayerDetails;
