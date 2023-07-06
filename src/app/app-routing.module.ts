import { ViewitemsComponent } from './pages/Items/viewitems/viewitems.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewissueComponent } from './pages/Issued/viewissue/viewissue.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdditemsComponent } from './pages/Items/additems/additems.component';
import { EdititemsComponent } from './pages/Items/edititems/edititems.component';
import { EditissueComponent } from './pages/Issued/editissue/editissue.component';

const routes: Routes = [
  {
    path:"",
    component:NavbarComponent,
    children:[
      {
        path: '',
        component:HomeComponent,
      },
      {
        path:"viewitems",
        component:ViewitemsComponent,
      },
      {
        path:"additems",
        component:AdditemsComponent,
      },
      {
        path:"viewitems",
        component:ViewitemsComponent,
      },
      {
        path: 'login',
        component:LoginComponent,
      },
      {
        path:'edititems/:itermID',
        component:EdititemsComponent
      },
      {
        path:'editissue/:issueID',
        component:EditissueComponent
      },
      {
        path:'viewissue',
        component:ViewissueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
