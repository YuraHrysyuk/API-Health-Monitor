import { HttpClient } from '@angular/common/http';
import { ScenarioData } from 'src/app/shared/scenario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointDataService {
  private URL = 'https://localhost:5001/Scenario';
  private endpointsURL = 'https://localhost:5001/scenarios';

  constructor(private http: HttpClient) { }

  getScenarios() {
    return this.http.get(this.URL);
  }
  getEndPoint(id: number) {
    return this.http.get(this.endpointsURL + `/${id}/end-points`);
  }
  deleteEndpoints(id: number) {
    return this.http.delete(this.URL + `/end-points/${id}`, { observe: 'response' });
  }
}
