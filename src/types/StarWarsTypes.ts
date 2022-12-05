import { IVehicles } from "./VehiclesTypes";

export interface IStarWars {
  name: string;
  created: string;
  vehicles?: IVehicles[];
}
