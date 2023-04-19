import React, { useContext, useEffect, useState } from "react";
import { PlayerList } from "../ApiModel/Model";
import PlayerContext from "../Contexts/PlayerContext";
import { spanishToEnglish } from "../Utils/SpanishToEnglish";

interface OwnProps {
  setPlayerList: (value: PlayerList[]) => void;
}

const SearchBox = (props: OwnProps) => {
  const { setPlayerList } = props;
  const { allPlayerList } = useContext(PlayerContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      const value = searchValue.trim();
      const filtertedPlayers = allPlayerList.filter((player) => {
        const playerEnglishName = spanishToEnglish(player.PFName);

        return (
          playerEnglishName.toLowerCase().includes(value.toLowerCase()) ||
          player.TName.toLowerCase().startsWith(value.toLowerCase())
        );
      });

      filtertedPlayers.length
        ? setPlayerList(filtertedPlayers)
        : setPlayerList([]);
    } else {
      setPlayerList(allPlayerList);
    }
  }, [allPlayerList, searchValue, setPlayerList]);

  return (
    <div className="search-container">
      <input
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
        placeholder="Search Player..."
        autoFocus
      />
    </div>
  );
};

export default SearchBox;
