import { useQuery } from "@tanstack/react-query";
import Car from "../entities/Car";
import APIClient from "../services/apiClient";
import { CarQuery } from "../stores/carqueryStore";

const carsClient = new APIClient<Car>("/cars");

const useCars = (carQuery: CarQuery) => {
  return useQuery<Car[]>({
    queryKey: ["cars", carQuery],
    queryFn: () => carsClient.getAll(carQuery),
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
};

export default useCars;
