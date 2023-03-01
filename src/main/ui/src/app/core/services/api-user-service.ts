import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Users} from "../models/users";
import {ApiRequestService} from "./api-request.service";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  create(user: Users) {
    return this.apiRequestService.post({endpoint: '/users', data: user});
  }

  update(user: Users) {
    return this.apiRequestService.put({endpoint: '/users', data: user});
  }

  findAll() {
    return this.apiRequestService.get("/users");
  }

  delete(id: string) {
    return this.apiRequestService.delete(`/users/${id}`);
  }
}
