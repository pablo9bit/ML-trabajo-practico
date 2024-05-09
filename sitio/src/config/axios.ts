import axios from 'axios';

const defaultOptions = {
    baseURL: 'http://localhost:1234/',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const clienteAxios = axios.create(defaultOptions);

  clienteAxios.interceptors.request.use(function (config) {
    return config;
  });

export default clienteAxios;