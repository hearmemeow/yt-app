import axios from 'axios';

const KEY = 'AIzaSyCt58zsSyFop-rFCofUe1uD5Slvk4dc-_8';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
