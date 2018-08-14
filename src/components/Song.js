import React from 'react'


const Song = (props) =>(
  <div>
    <img src={props.image[0].label} alt="Album Cover"/>
    <p>Song: {props.song.label}</p>
    <p>Artist: {props.artist.label}</p>

  </div>
)

export default Song;
