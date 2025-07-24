import { HttpListResponse } from "@shared/types/response-http.type";

export interface Vehicle {
	id: number;
	brand: string;
	model: string;
	year: string;
	useType: string;
	basePrice: number;
}

export type VehicleListResponse = HttpListResponse<Vehicle>;