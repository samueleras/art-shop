import { useQuery } from "@tanstack/react-query";
import Car from "../entities/Car";
import APIClient from "../services/apiClient";

const carsClient = new APIClient<Car>("/cars");

const useCars = () => {
  return useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: carsClient.getAll,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
};

export default useCars;
