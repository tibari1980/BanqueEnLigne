import { MaterialModule } from './material/material.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//add import firebase 
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    //inject MatrialModul
    MaterialModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
