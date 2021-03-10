
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

const getGitHubUser = (username) => {
  return axios.get(BASE_URL + username);
}

export default getGitHubUser;