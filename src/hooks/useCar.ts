import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchDataResponse } from "../services/apiClient";
import Car from "../entities/Car";

const artPieceClient = new APIClient<Car>("/artworks");

const useCars = (id?: string) => {
  return useQuery<FetchDataResponse<Car>>({
    queryKey: ["car"],
    queryFn: () => artPieceClient.get(id),
    staleTime: 10 * 1000,
  });
};

export default useCars;
