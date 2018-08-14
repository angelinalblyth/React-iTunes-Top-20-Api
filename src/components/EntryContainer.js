import React from 'react'

const EntryContainer = (props) =>(
  <div>
    <img src={props.image} alt="Album Cover"/>
    <p> {props.artist}</p>
    <p>{props.name}</p>
  </div>
)

export default EntryContainer;
