import React from 'react';
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';

export default function Episodes(props) {
  return (
    <div className="episodes">
      {props.episodes.map(e => (
        <div className="episode" key={e.id}>
          {console.log(e.id)}
          {e.image && (
            <img className="episode-image" src={e.image.medium} alt={e.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {e.season}, Episode {e.number}
            </p>
            <Link to={`/${e.id}`}><h3>{e.name}</h3></Link>
            {e.summary && parse(e.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{e.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
