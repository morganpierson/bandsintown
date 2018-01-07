import React, { Component } from "react";
import PropTypes from "prop-types";

import Loader from "./components/Loading";
import WithArtist from "./hoc/WithArtist";
import EventList from "./components/EventList";
import Header from "./components/Header";

class App extends Component {
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
                  width: 100%;
                }
                body {
                  width: 100%;
                }
                .App-header {
                  width: 100%;
                  float: left;
                }

                @media screen and (min-width: 800px) {
                  .App {
                    display: flex;
                    width: 80%;
                    margin: 0 auto;
                    padding-top: 1em;
                  }
                }
              `}
            </style>
          </div>
        );
      }
    } else {
      return <Loader />;
    }
  }
}

App.propTypes = {
  artistData: {
    name: PropTypes.string,
    thumb_url: Prop.string
  }
};

export default WithArtist(App);
