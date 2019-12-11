import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar_clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { PlaceComponent } from './places/places.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LugaresService } from 'src/Services/lugares.services';
import { AuthorizationService } from 'src/Services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Security } from 'src/Services/security.service';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'places', component: PlaceComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'create/:id', component: CreateComponent, canActivate: [Security]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBctyUM2Rn_wqFmpJ8KoGtJv78hi328xLQ',
  authDomain: 'platzisquare-1573202986487.firebaseapp.com',
  databaseURL: 'https://platzisquare-1573202986487.firebaseio.com',
  storageBucket: 'platzisquare-1573202986487.appspot.com',
  messagingSenderId: '881266530033'
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    PlaceComponent,
    DetalleComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDM2GpdCEsAaxMlgj5pntV2Oh7PaLhm1PM'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresService, AuthorizationService, Security],
  bootstrap: [AppComponent]
})
export class AppModule { }
