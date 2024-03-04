import { useQuery } from "@tanstack/react-query";
import ArtPiece from "../entities/ArtPiece";
import APIClient, { FetchDataResponse } from "../services/apiClient";

const artPieceClient = new APIClient<ArtPiece>("/artworks");

const useArtPiece = (id?: string) => {
  return useQuery<FetchDataResponse<ArtPiece>>({
    queryKey: ["artPiece"],
    queryFn: () => artPieceClient.get(id),
    staleTime: 10 * 1000,
  });
};

export default useArtPiece;
