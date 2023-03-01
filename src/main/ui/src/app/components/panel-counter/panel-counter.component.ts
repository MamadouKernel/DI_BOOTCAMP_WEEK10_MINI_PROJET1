import {Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ApiUserService} from "../../core/services/api-user-service";
import {Users} from "../../core/models/users";

@Component({
  selector: 'app-panel-counter',
  templateUrl: './panel-counter.component.html',
  styleUrls: ['./panel-counter.component.css']
})
export class PanelCounterComponent {
  //Compteur qui sera initialisé via le composant <Form>
  //AU travers du composant parent <AppComponent>
  @Input() userCreated: number = 0;
  counter: number = 0;

  //La liste des users apres clic sur le bouton
  userList: Users[] = [];

  //L'event qui sera retourné au parent et informera sur l'etat de la liste des user
  @Output() userListOutput: EventEmitter<Users[]> = new EventEmitter<Users[]>();

  constructor(private apiUserService: ApiUserService) {
  }

  ngOnInit() {
    this.showAllUsers();
  }

  showAllUsers() {
    this.apiUserService.findAll().subscribe({
      next: data => {
        //console.log(data);
        //Actualisation de la liste
        this.userList = data as Users[];

        //Renvoi de la valeur au composant parent
        this.userListOutput.emit(this.userList);
        if (this.counter != 0) this.counter = this.userList.length
      },
      error: error => {
        console.error("There is an error !", error);
        //TODO: Afficher toast notification dans le composant panel-counter en cas d'erreur du serveur lors du chargement
      }
    });
  }
}
