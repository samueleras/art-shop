export default interface Car {
  id: number;
  brand: string;
  model: string;
  type: "coupe" | "convertible" | "suv";
  price: number;
  leasing: number;
  passengerCount: number;
  doorCount: number;
  gearbox: "automatic" | "manual";
  horsepower: number;
  electric: boolean;
  description?: string;
  thumbnail: string;
  images?: string[];
}
