import axios from "axios";

export default {
  fetchArtistInfo: artist => {
    const BASE_URL = "https://rest.bandsintown.com";
    const FETCH_URL = `${BASE_URL}/artists/${artist}/events?app_id=bit_challenge`;
    return axios.get(FETCH_URL).then(res => res);
  },
  fetchArtistInfo2: artist => {
    const BASE_URL = "https://rest.bandsintown.com";
    const FETCH_URL = `${BASE_URL}/artists/${artist}?app_id=bit_challenge`;
    return axios.get(FETCH_URL).then(res => res);
  }
};
