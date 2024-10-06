import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Car from "../entities/Car";

const carBulkClient = new APIClient<Car>("/cars/bulk");

const useCarBulk = (ids: String[]) => {
  return useQuery<Car[]>({
    queryKey: ["carsBulk", ids],
    queryFn: () => carBulkClient.getBulk(ids),
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
};

export default useCarBulk;
