import axios from 'axios';
const animeAxios=axios.create({
    baseURL:"https://kitsu.io/api/edge/anime"
})
export default animeAxios;