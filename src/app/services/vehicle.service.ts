import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private httpClient: HttpClient
  ) { 
    
  }


  public getVehicles () : Observable<any> {
    return this.httpClient.get<any>(
      `/api/vehicles`
      );
  }

  public createVehicle (data) : Observable<any> {
    console.log(`Posting vehicle:`);
    console.log(data);

    return this.httpClient.post<any>(`/api/vehicles`, data);
  }
}
