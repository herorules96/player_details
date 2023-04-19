import React from "react";
import { UpComingMatchesList } from "../ApiModel/Model";
import { getUserTime } from "../Utils/UserTimeFormat";

interface OwnProps {
  name: string;
  img: string;
  skills: string;
  value: string;
  upComingMatches: UpComingMatchesList[];
}

export const PlayerCard = (props: OwnProps) => {
  const { name, img, skills, value, upComingMatches } = props;
  return (
    <div className="items">
      <div className="image-wrapper">
        <img className="player-image" src={img} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>
          <span>Position</span>: {skills}
        </p>
        <p>
          <span>Value</span>: {`$${value}`} Mil
        </p>
        <p>
          <span>Upcoming Match:</span>
        </p>
        {upComingMatches.map((match) => {
          if (match.CCode && match.VsCCode) {
            return (
              <div key={match.TID}>
                <div className="match-display">
                  <div className="team">{match.CCode}</div>
                  <div className="vs">v/s</div>
                  <div className="team">{match.VsCCode}</div>
                </div>
                <p>
                  <span>Timing:</span> {getUserTime(match.MDate)}
                </p>
              </div>
            );
          } else {
            return <div>N/A</div>;
          }
        })}
      </div>
    </div>
  );
};
