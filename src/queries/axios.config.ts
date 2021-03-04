import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jackiechanbruteforce.ulesson.com/3p/api',
});

export default instance;
