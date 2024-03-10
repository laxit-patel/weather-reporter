import axios from 'axios';

const apiService = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: "6dff08fd67bd4403b55111259240903",
  },
});

const handleSuccess = (response: any) => {
  return response.data;
};

const handleError = (error:any) => {
  if (error.response) {
    throw new Error(`Request failed with status ${error.response.status}`);
  } else if (error.request) {
    throw new Error('No response received from server');
  } else {
    throw new Error(`Error: ${error.message}`);
  }
};

export const fetchData = async (url:string, params = {}) => {
  try {
    const response = await apiService.get(url, { params });
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

export default apiService;
