import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./routes/signup/signup.module').then(m => m.SignupModule) }, { path: 'dashboard', loadChildren: () => import('./routes/dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
