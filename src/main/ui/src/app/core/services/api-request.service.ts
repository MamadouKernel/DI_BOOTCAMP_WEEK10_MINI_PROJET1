import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {
  }

  get(endpoint: string) {
    return this.http.get(`${environment.BASE_URL_API}${endpoint}`, {headers: this.httpHeader()});
  }

  post(parameter: Required<{ endpoint: string, data: any }>) {
    return this.http.post(`${environment.BASE_URL_API}${parameter.endpoint}`, parameter.data, {headers: this.httpHeader()});
  }

  put(parameter: Required<{ endpoint: string, data: any }>) {
    return this.http.put(`${environment.BASE_URL_API}${parameter.endpoint}`, parameter.data, {headers: this.httpHeader()});
  }

  delete(endpoint: string) {
    return this.http.delete(`${environment.BASE_URL_API}${endpoint}`, {headers: this.httpHeader()});
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Accept': '*',
    });
  }
}
