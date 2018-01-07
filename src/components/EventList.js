import React, { Component } from "react";
import EventListItem from "./EventListItem";
import moment from "moment";
class EventList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { artistData } = this.props;
    return (
      <div className="something">
        {artistData.map(artist => (
          <EventListItem
            date={moment(artist.datetime).format("MMM D")}
            city={{
              city: artist.venue.city,
              region:
                artist.venue.country === "United States"
                  ? artist.venue.region
                  : artist.venue.country
            }}
            venue={artist.venue.name}
            button={artist.offers[0].url}
          />
        ))}
        <style jsx>{`
          .something {
            overflow: scroll;
            height: 30em;
          }
        `}</style>
      </div>
    );
  }
}

export default EventList;
