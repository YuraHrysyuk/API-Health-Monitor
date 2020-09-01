import { ScenarioData } from 'src/app/shared/scenario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenarioDataService {

  private URL = 'https://localhost:5001/scenario';

  constructor(private http: HttpClient) { }

  getScenarios() {
    return this.http.get(this.URL);
  }
  createScenario(obj: ScenarioData) {
    return this.http.post(this.URL, obj);
  }
  removeScenario(id: number){
    console.log('Delete func.');
    return this.http.delete(this.URL + `/${id}`);
  }
  updateScenario(obj: ScenarioData) {
    return this.http.put(this.URL, obj);
  }
}
