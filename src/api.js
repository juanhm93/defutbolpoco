import axios from 'axios';

export default axios.create({
  baseURL: `https://v3.football.api-sports.io/`,
  headers: {
   "x-rapidapi-host": 'v3.football.api-sports.io',
		 "x-rapidapi-key": '7b321b64a4ab7e7cd95c9efbf5ba7f24'
  }
});