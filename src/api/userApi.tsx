import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://reqres.in/api/users',
});

export default userApi;
