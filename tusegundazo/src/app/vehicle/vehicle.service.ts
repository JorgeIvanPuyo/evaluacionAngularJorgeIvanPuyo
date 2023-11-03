import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getvehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
