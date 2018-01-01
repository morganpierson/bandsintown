import React, { Component } from "react";
import moment from "moment";
import logo from "./logo.svg";
import "./App.css";
import api from "./utils/ArtistInfo";
import WithArtist from "./hoc/WithArtist";
import EventList from "./components/EventList";
import Header from "./components/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      artistData: this.props.artistData
    };
  }

  componentDidMount() {
    console.log("PROPS ", this.props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header
            artistName={this.state.data[0].lineup[0]}
            imageUrl={this.state.artistData.thumb_url}
          />
        </div>
        <div className="list">
          <EventList artistData={this.state.data} />
        </div>
        <style jsx>
          {`
            .list {
              marginTop: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default WithArtist(App);
