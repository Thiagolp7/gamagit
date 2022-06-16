import axios from "axios";

export const githubApi = axios.create(
  {
    baseURL: 'https://api.github.com/users/'
  }
)

export const apiSearchUser = axios.create(
  {
    baseURL: 'https://api.github.com/search',
    headers: {'accept': 'application/vnd.github.v3+json'}
  }
)