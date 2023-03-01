import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Users} from "../../core/models/users";
import {ApiUserService} from "../../core/services/api-user-service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user!: Users; //User to bind with form element

  //Détecter l'aout d'un user apres avoir cliqué sur le bouton de validation
  @Input() userAdded: number = 0;

  //L'evenement d'ajout de user est retourné au composant principal (App-Component)
  @Output() userAddedEvent: EventEmitter<number> = new EventEmitter<number>();

  //Gestion des erreurs provenant de l'API
  apiErrorThrown: boolean = false;
  errorResponseServer: any;

  constructor(private userServiceAPi: ApiUserService) {
    this.user = new Users("", "", "");
  }


  /*textfieldValue(keyupHandlerValue: any) {
    console.log(keyupHandlerValue)
  }*/

  saveUser(userForm: any) {
    console.log(userForm);
    console.log(this.user);
    if (userForm.valid) {
      this.userServiceAPi.create(this.user).subscribe({
        next: responseApi => {
          console.log("Données insérées avec succès " + responseApi)
          //Incrementation de nombre de User
          this.userAdded++;
          //Emission de l'Information de retour pour le parent
          this.userAddedEvent.emit(this.userAdded);
          //TODO: Afficher toast de succès dans le composant form en cas d'erreur du serveur lors de l'envoi
          //Réinitialisation des champs du formulaire
          userForm.reset();
          this.apiErrorThrown = false;

        },
        error: error => {
          //Affichage du paneau des erreurs d'API
          this.apiErrorThrown = true;
          this.errorResponseServer = error as HttpErrorResponse;
          //TODO: Afficher toast d'erreur dans le composant form en cas d'erreur du serveur lors de l'envoi
          console.error("Erreur lors de la sauvegarde des informations !", error);
        }
      })
    }
  }
}
