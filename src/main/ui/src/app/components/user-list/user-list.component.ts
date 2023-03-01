import {Component, Input} from '@angular/core';
import {OnInit} from "@angular/core";
import {ApiUserService} from "../../core/services/api-user-service";
import {Users} from "../../core/models/users";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: Users[];

  constructor() {
  }

  ngOnInit() {
  }
}
