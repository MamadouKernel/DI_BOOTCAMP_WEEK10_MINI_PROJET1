import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextfieldComponent } from './components/shareds/textfield/textfield.component';
import { ButtonComponent } from './components/shareds/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { PanelCounterComponent } from './components/panel-counter/panel-counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LabelComponent } from './components/shareds/label/label.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    ButtonComponent,
    HeaderComponent,
    FormComponent,
    PanelCounterComponent,
    UserListComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
