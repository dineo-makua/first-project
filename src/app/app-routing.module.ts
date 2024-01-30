import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomComponent } from './welcom/welcom.component';
import { ErrorComponent } from './error/error.component';
import { ListMydreamsComponent } from './list-mydreams/list-mydreams.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
//import { ErrorComponent } from './error/error.component';

//welcome
const routes: Routes = [
   {path:'', component: LoginComponent},
   {path:'login', component: LoginComponent},
   {path:'welcom/:name', component: WelcomComponent, canActivate:[RouteGuardService]},
   {path: 'mydreams', component: ListMydreamsComponent, canActivate:[RouteGuardService]},
   {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},


   {path:'**', component: ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
