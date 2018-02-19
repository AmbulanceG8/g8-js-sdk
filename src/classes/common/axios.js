import Axios from 'axios';

const axios = Axios.create();

axios.defaults.headers.common = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export default axios;
