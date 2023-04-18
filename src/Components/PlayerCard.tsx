import React from "react";
import { UpComingMatchesList } from "../ApiModel/Model";

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
      <div>
        <img className="player-image" src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <div>{skills}</div>
      <div>{`$${value}`}</div>
      {upComingMatches.map((match) => (
        <div key={match.TID}>
          {match.CCode} v/s {match.VsCCode}
        </div>
      ))}
    </div>
  );
};
