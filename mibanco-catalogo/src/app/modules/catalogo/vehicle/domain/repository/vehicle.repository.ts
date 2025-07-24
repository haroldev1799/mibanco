import { Observable } from 'rxjs';

import { HttpBaseResponse } from '@shared/types/response-http.type';
import { VehicleListResponse } from '../dto/vehicle.dto';

export abstract class VehicleRepository {
	abstract list(): Observable<VehicleListResponse>;

	abstract create(uuid: number, id: number): Observable<HttpBaseResponse>;

	abstract update(): Observable<HttpBaseResponse>;

	abstract delete(uuid: number): Observable<HttpBaseResponse>;

}
