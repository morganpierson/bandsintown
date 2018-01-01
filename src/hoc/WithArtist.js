import React, { Component } from "react";
import queryString from "query-string";

import api from "../utils/ArtistInfo";

export default function withSubscription(WrappedComponent) {
  return class WithArtist extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        artistData: null
      };
    }
    componentDidMount() {
      const queryParams = queryString.parse(window.location.search).artist;
      console.log("QUERY PARAMS ", queryParams);
      api.fetchArtistInfo(decodeURIComponent(queryParams)).then(res => {
        console.log("RES ", res);
        return this.setState({ data: res.data });
      });
      api.fetchArtistInfo2(decodeURIComponent(queryParams)).then(res => {
        console.log("RES ", res);
        return this.setState({ artistData: res.data });
      });
    }
    render() {
      if (this.state.data) {
        return (
          <WrappedComponent
            data={this.state.data}
            {...this.props}
            artistData={this.state.artistData}
          />
        );
      } else {
        return <div>LOADING...</div>;
      }
    }
  };
}
