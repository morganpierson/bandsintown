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
  }

  render() {
    const { data, artistData } = this.props;
    if (data && artistData) {
      if (data.length < 1) {
        return (
          <div className="App">
            <div className="App-header">
              <Header
                artistName={artistData.name}
                imageUrl={artistData.thumb_url}
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
                artistName={artistData.name}
                imageUrl={artistData.thumb_url}
              />
            </div>
            <div className="list">
              <EventList artistData={data} />
            </div>
            <style jsx>
              {`
                .App {
                  display: flex;
                  width: 80%;
                  margin: 0 auto;
                  padding-top: 1em;
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
