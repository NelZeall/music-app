import React from 'react';
import YoutubeAggressiveMood from './YoutubeAggressiveMood';
import YoutubeGreatMood from './YoutubeGreatMood';
import YoutubeEdgeOf from './YoutubeEdgeOf';
import YoutubeDepression from './YoutubeDepression';
import './App.css';

class Example extends React.Component {
  render() {
    return (
      <div className="App">
        <YoutubeAggressiveMood />
        <YoutubeGreatMood />
        <YoutubeEdgeOf />
        <YoutubeDepression />
      </div>
    );
  }
}


export default Example;
