import { HttpClient } from '@angular/common/http';
import { ScenarioData } from 'src/app/endpoint/scenario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EndpointDataService {
  private URL = 'https://localhost:5001';
  private endpointsURL = 'https://localhost:5001/scenarios';

  constructor(private http: HttpClient) { }

  getScenarios() {
    return this.http.get(this.URL + '/Scenario');
  }
  getEndPoint(id: number) {
    return this.http.get(this.endpointsURL + `/${id}/end-points`);
  }
  deleteEndpoints(id: number) {
    return this.http.delete(this.URL + `/end-points/${id}`, { observe: 'response' });
  }
}
