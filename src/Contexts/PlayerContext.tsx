import { createContext } from "react";
import { PlayerList } from "../ApiModel/Model";

interface ContextType {
  allPlayerList: PlayerList[];
  loading: boolean;
}

const PlayerContext = createContext<ContextType>({
  allPlayerList: [],
  loading: true,
});

export default PlayerContext;
