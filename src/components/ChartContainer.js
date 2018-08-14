import React from 'react'
import Song from '../components/Song'

  const ChartContainer = (props) =>{
  console.log(props);
  const songList = props.songs.map(song => {
    return <li key={song.id.attributes["im:id"]}>
      <Song
        artist={song["im:artist"]}
        song={song["im:name"]}
        image={song["im:image"]}  />
      </li>
  })

  return (
    <ol className="song-list">{songList} Hello
    </ol>
  )
}


  export default ChartContainer;
