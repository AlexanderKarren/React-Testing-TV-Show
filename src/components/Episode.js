import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const Episode = ({seasons}) => {
    const [episode, setEpisode] = useState({});
    const [image, setImage] = useState("");;
    const {episodeID} = useParams();

    useEffect(() => {
        console.log(seasons);
        Object.values(seasons).forEach(season => {
            season.forEach(episode => {
                if (episodeID === episode.id.toString()) {
                    setEpisode(episode);
                    setImage(episode.image.original);
                    console.log(episode);
                }
            })
        })
    }, [episodeID, seasons])
    return (
        <div className="episodes">
            <div className="episode" style={{width: "60%"}}>
                {image ? <img style={{width:"100%"}} src={image} alt={episode.name} /> : <p>loading image...</p>}
                <div className="episode-info">
                    <p>Season {episode.season}, Episode {episode.number}</p>
                    <p>Aired {episode.airdate}</p>
                    <p>Runtime: {episode.runtime}</p>
                    <h2 style={{fontSize: "150%"}}>{episode.name}</h2>
                    {episode.summary && parse(episode.summary)}
                    <p className="episode-runtime">{episode.runtime} minutes</p>
                </div>
                <Link to="/"><h2>Return</h2></Link>
            </div>
        </div>
    )
}

export default Episode;