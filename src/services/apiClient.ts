import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  config: { iiif_url: string };
  data: T;
}

const axiosInstance = axios.create({
  baseURL: "https://api.artic.edu/api/v1/", //Backend URl
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchDataResponse<T[]>>(this.endpoint, config)
      .then((res) => res.data);

  get = (idOrSlug?: number | string, config?: AxiosRequestConfig) => {
    if (idOrSlug === undefined) return {} as FetchDataResponse<T>;
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint + "/" + idOrSlug, config)
      .then((res) => res.data);
  };
}

export default APIClient;
