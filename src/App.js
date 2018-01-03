import React, { Component } from "react";
import moment from "moment";
import { isEqual } from "lodash";
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

  render() {
    if (this.props.data && this.props.artistData) {
      if (this.props.data.length < 1) {
        return (
          <div className="App">
            <div className="App-header">
              <Header
                artistName={this.props.artistData.name}
                imageUrl={this.props.artistData.thumb_url}
              />
            </div>
            <h3
              style={{
                textAlign: "center",
                color: "gray"
              }}
            >
              No upcoming events.
            </h3>
          </div>
        );
      } else {
        return (
          <div className="App">
            <div className="App-header">
              <Header
                artistName={this.props.artistData.name}
                imageUrl={this.props.artistData.thumb_url}
              />
            </div>
            <div className="list">
              <EventList artistData={this.props.data} />
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
    } else {
      return <div className="loading">Loading...</div>;
    }
  }
}

export default WithArtist(App);
