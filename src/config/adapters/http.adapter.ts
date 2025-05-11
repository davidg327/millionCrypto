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

  // Método POST
  async post(url: string, data: any): Promise<any> {
    return await axiosInstance.post(url, data);
  }

  // Método PUT
  async put(url: string, data: any): Promise<any> {
    const response = await axiosInstance.put(url, data);
    return response.data;
  }

  // Método DELETE
  async delete(url: string, data?: any): Promise<any> {
    const response = await axiosInstance.delete(url, { data });
    return response.data;
  }
}
