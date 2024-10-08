import axios, { AxiosRequestConfig } from "axios";
import { CarQuery } from "../stores/carqueryStore";

/* export interface FetchDataResponse<T> {
  data: T;
} */

const API_Url = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_Url, //Backend URl
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (carQuery: CarQuery, config?: AxiosRequestConfig) =>
    axiosInstance
      .post<T[]>(this.endpoint, carQuery, config)
      .then((res) => res.data);

  get = (id: String, config?: AxiosRequestConfig) => {
    if (id === undefined) return {} as T;
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };

  getBulk = (ids: String[], config?: AxiosRequestConfig) => {
    if (ids === undefined) return [] as T[];
    return axiosInstance
      .post<T[]>(this.endpoint, { ids }, config)
      .then((res) => res.data);
  };
}

export default APIClient;
