export default interface Car {
  _id: String;
  brand: string;
  model: string;
  type: "coupe" | "convertible" | "sedan";
  price: number;
  leasing: number;
  passengerCount: number;
  doorCount: number;
  gearbox: "automatic" | "manual";
  horsepower: number;
  electric: boolean;
  shortDescription: string;
  description: string;
  fuelConsumption: string;
  emissions: string;
  emissionClass: string;
  thumbnail: string;
  png: string;
  images?: string[];
}
