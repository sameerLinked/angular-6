import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup , FormControl , ReactiveFormsModule , FormsModule  } from "@angular/forms";
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    ReactiveFormsModule,
	HttpModule,
	 HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
