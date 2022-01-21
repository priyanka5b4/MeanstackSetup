import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/authentication/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { ShellComponent } from './core/shell/shell.component';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children : [
      {
        path: 'home',
        loadChildren: () => import("./modules/home/home.module").then((m) => {
          m.HomeModule;
        })
      }
    ]

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component : LoginComponent
  },
  {
    path: 'Editpass',
    component: LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
