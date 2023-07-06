
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AdditemsComponent } from './pages/Items/additems/additems.component';
import { EdititemsComponent } from './pages/Items/edititems/edititems.component';
import { ViewitemsComponent } from './pages/Items/viewitems/viewitems.component';
import { AddissueComponent } from './pages/Issued/addissue/addissue.component';
import { EditissueComponent } from './pages/Issued/editissue/editissue.component';
import { ViewissueComponent } from './pages/Issued/viewissue/viewissue.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatComponent } from './mat/mat.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdditemsComponent,
    EdititemsComponent,
    ViewitemsComponent,
    AddissueComponent,
    EditissueComponent,
    ViewissueComponent,
    MatComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
