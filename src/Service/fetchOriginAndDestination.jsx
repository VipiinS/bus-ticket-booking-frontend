import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/open',
});

export const fetchOriginAndDestination = async () => {
  try {
    const response = await api.get('/all-routes');
    return response.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};

export default fetchOriginAndDestination;