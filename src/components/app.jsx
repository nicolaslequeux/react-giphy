import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "4Tkagznwgrv6A4asQb"
    };
    
    this.search("homer thinking");
  }

  search = (query) => {
    //TODO: API call
    giphy('upywLWvYh9dAALoJb2aXXNQc1iCxQ64Z').search({
      q: query,
      rating: 'g',
      limit: 10
      }, (error, result) => {
        // console.log(result);
        this.setState({
          gifs: result.data
        })
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          {/* App passes to its child search_bar a props called searchFunction with search function */}
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
