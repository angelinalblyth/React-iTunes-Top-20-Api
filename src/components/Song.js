import React from 'react'
import '../style/song.css'


const Song = (props) =>(
  <div className="song-container">
    <img src={props.image[0].label} alt="Album Cover"/>
    <p>Song: {props.song.label}</p>
    <p>Artist: {props.artist.label}</p>

  </div>
)

export default Song;
