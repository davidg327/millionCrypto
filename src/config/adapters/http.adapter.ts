import axios, { AxiosInstance } from 'axios';
import { URL_CHECK} from '../../theme';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${URL_CHECK}`,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export class AxiosHttpClient {
  // Método GET
  async get(url: string, data?: any): Promise<any> {
    const response = await axiosInstance.get(url, { data });
    return response.data;
  }
}
