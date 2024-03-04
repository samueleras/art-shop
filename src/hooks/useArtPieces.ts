import { useQuery } from "@tanstack/react-query";
import ArtPiece from "../entities/ArtPiece";
import APIClient, { FetchDataResponse } from "../services/apiClient";

const artPieceClient = new APIClient<ArtPiece>("/artworks");

const useArtPieces = () => {
  return useQuery<FetchDataResponse<ArtPiece[]>>({
    queryKey: ["artPieces"],
    queryFn: artPieceClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useArtPieces;
