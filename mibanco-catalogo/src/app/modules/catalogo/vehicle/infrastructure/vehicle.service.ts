import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleRepository } from '../domain/repository/vehicle.repository';
import { URL_BACKEND } from '@core/config/url';
import { HttpBaseResponse } from '@shared/types/response-http.type';
import { VehicleListResponse } from '../domain/dto/vehicle.dto';


export class VehicleRepositoryService extends VehicleRepository {
	private readonly http = inject(HttpClient);
	protected VehicleUrl = `${URL_BACKEND}/Vehicle`;

    list(): Observable<VehicleListResponse> {
		// return this.http.get<UserListResponse>(`${this.userUrl}/${uuid}/subUser${endpoint}`);
        throw new Error('Method not implemented.');
	}

    create(): Observable<HttpBaseResponse> {
        throw new Error('Method not implemented.');
    }
    update(): Observable<HttpBaseResponse> {
        throw new Error('Method not implemented.');
    }
    delete(): Observable<HttpBaseResponse> {
        throw new Error('Method not implemented.');
    }
}
