import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScenarioDataService {
  private URL = 'https://localhost:5001';

  constructor(private http: HttpClient) { }

  getScenarios() {
    return this.http.get(this.URL + '/Scenario');
  }
  deleteScenario(id: number) {
    return this.http.delete(this.URL + `/Scenario/{id}`, { observe: 'response' });
  }
}
