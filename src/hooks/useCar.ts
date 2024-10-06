import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Car from "../entities/Car";

const carClient = new APIClient<Car>("/car");

const useCar = (id: String) => {
  return useQuery<Car>({
    queryKey: ["car"],
    queryFn: () => carClient.get(id),
    staleTime: 10 * 1000,
  });
};

export default useCar;
