import React from 'react'
import HeaderContainer from '../components/HeaderContainer.js'
import ChartContainer from '../components/ChartContainer.js'

class TopSongsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      songs: []
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(responseText => responseText.json())
    .then(songs => console.log(songs.feed.entry))
  };


  render(){
    return(
      <React.Fragment>
        <HeaderContainer />
        <ChartContainer
        songs = {this.state.songs}/>
      </React.Fragment>
    )
  }
}

export default TopSongsContainer;


// Values can be reassigned by calling objectName.key = newValue;
// - New key / value pairs can also be assigned in the same way;
// - Other way is objectName['key']
