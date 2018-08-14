import React from 'react'
import EntryContainer from '../components/EntryContainer'

class ChartContainer extends React.Component{


  render(){

    const chartList = this.props.songs.map((song, index) =>{
      return <li key={song.id.attributes["im:id"]}>
        <EntryContainer
          image={song["im:image"]}
          artist={song["im:artist"]}
          title={song["im:name"]}
        />
        </li>
        })

        // Values can be reassigned by calling objectName.key = newValue;
        // - New key / value pairs can also be assigned in the same way;
        // - Other way is objectName['key']


        return(
          <ol>
            {chartList}
          </ol>
        )
      }
    }

    export default ChartContainer;
