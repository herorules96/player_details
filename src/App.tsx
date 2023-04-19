import "./App.css";
import PlayerContext from "./Contexts/PlayerContext";
import PlayerDetails from "./Pages/PlayerDetails";

function App() {
  return (
    <div className="container-fluid">
      <PlayerContext.Provider value={{ allPlayerList: [] }}>
        <PlayerDetails />
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
