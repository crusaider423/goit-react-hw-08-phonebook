import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const fetchSignupUser = async obj => {
  const { data } = await instance.post('/users/signup/', obj);
  setToken(data.token);
  return data;
};

export const fetchLoginUser = async obj => {
  const { data } = await instance.post('/users/login', obj);
  setToken(data.token);
  return data;
};

export const fetchLogoutUser = async () => {
  await instance.post('/users/logout');
};

export const fetchCurrentUser = async token => {
  setToken(token);
  try {
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
