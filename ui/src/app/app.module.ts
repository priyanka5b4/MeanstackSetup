import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PasswordResetComponent } from './core/login/password-reset/password-reset.component';
import { MobileShellComponent } from './core/shell/mobile-shell/mobile-shell.component';
import { NavListComponent } from './core/shell/nav-list/nav-list.component';
import { NormalShellComponent } from './core/shell/normal-shell/normal-shell.component';
import { ShellComponent } from './core/shell/shell.component';
import { TitleBarComponent } from './core/shell/title-bar/title-bar.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordResetComponent,
    ShellComponent,
    MobileShellComponent,
    NavListComponent,
    NormalShellComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
