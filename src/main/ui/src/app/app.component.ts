import {Component} from '@angular/core';
import {ApiUserService} from "./core/services/api-user-service";
import {OnInit} from "@angular/core";
import {Users} from "./core/models/users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User CRUD App';

  //Ecouteur captant la détection d'ajout d'un user dans le composant <Form>
  userCreated: number = 0;

  //Ecouteur captant la détection de remplissage de la liste des user dans le composant <Count>
  userList: Users[] = [];

  constructor(private userServiceApi: ApiUserService) {
  }

  ngOnInit() {

  }

  getUserCountFromFormComponent(event: number) {
    this.userCreated = event;
  }

  getUserUserListFromPanelCounterComponent(event: Users[]) {
    this.userList = event;
  }
}
