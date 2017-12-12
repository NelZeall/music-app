import React, {Component} from 'react';
import ToggleDisplay from 'react-toggle-display';

var artists = ["Rock Music|Classical Music Official Audio -rap -live -mix -remix -funny -documentary"];

const API = 'AIzaSyDm4Dp9T4hl91w7fuzESiB1MnHr54IRABs'
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?videoCategoryId=10&part=snippet&q=${artists}&type=video&key=${API}&id&order=date&maxResults=${result}`
  
class YoutubeGreatMood extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }

clicked(){

   this.setState({
      show: !this.state.show
    });

  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}


  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
        <button onClick={this.clicked}>Great Mood</button>

        <ToggleDisplay show={this.state.show}>
          <div class="videos">
            {
              this.state.resultyt.map((link, i) => {
                console.log(link);
                var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                return frame;
              })
            }
            {this.frame}
          </div>
        </ToggleDisplay>
        
    </div>
    );
  }
}

export default YoutubeGreatMood;