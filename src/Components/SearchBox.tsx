import React, { useContext, useEffect, useState } from "react";
import { PlayerList } from "../ApiModel/Model";
import PlayerContext from "../Contexts/PlayerContext";

interface OwnProps {
  setPlayerList: (value: PlayerList[]) => void;
}

const SearchBox = (props: OwnProps) => {
  const { setPlayerList } = props;
  const { allPlayerList } = useContext(PlayerContext);
  const [searchValue, serSearchValue] = useState("");

  useEffect(() => {
    let filtertedPlayers: PlayerList[] = [];
    console.log(searchValue);
    if (searchValue) {
      filtertedPlayers = allPlayerList.filter(
        (player) =>
          player.PFName.toLowerCase().includes(searchValue.toLowerCase()) ||
          player.TName.toLowerCase().startsWith(searchValue.toLowerCase())
      );
    }

    console.log("prashant", filtertedPlayers, searchValue);

    if (filtertedPlayers.length) {
      setPlayerList(filtertedPlayers);
    } else {
      setPlayerList(allPlayerList);
    }
  }, [allPlayerList, searchValue, setPlayerList]);

  return (
    <div>
      <input
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          serSearchValue(event.target.value)
        }
      />
    </div>
  );
};

export default SearchBox;
