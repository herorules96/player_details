import { createContext } from "react";
import { PlayerList } from "../ApiModel/Model";

interface ContextType {
  allPlayerList: PlayerList[];
}

const PlayerContext = createContext<ContextType>({
  allPlayerList: [],
});

export default PlayerContext;
