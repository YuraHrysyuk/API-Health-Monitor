import { HttpClient } from '@angular/common/http';
import { ScenarioData } from 'src/app/endpoint/scenario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointDataService {
  private URL = 'https://localhost:5001/Scenario';

  constructor(private http: HttpClient) { }

  getScenarios() {
    return this.http.get(this.URL);
  }
}
