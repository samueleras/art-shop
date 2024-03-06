import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchDataResponse } from "../services/apiClient";
import Car from "../entities/Car";

const artPieceClient = new APIClient<Car>("/artworks");

const useArtPieces = () => {
  return useQuery<FetchDataResponse<Car[]>>({
    queryKey: ["cars"],
    queryFn: artPieceClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useArtPieces;
