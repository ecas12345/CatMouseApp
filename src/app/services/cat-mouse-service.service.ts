import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scenario } from '../models/scenario-model';
import { environment } from 'src/environments/environment';
import { CatMouseResp } from '../interface/catMouseResp';

@Injectable({
  providedIn: 'root'
})
export class CatMouseService {

  constructor(private http: HttpClient) { }

  getMouseStatus = (scenario: Scenario, endpoint: string) => {
    return this.http.post<CatMouseResp>(endpoint,scenario);
  }
}
