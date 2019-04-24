﻿import { ChangePasswordComponent } from './change-password/app.change-password';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular'

const appRoutes: Routes = [{ path: '', component: ChangePasswordComponent, canActivate : [MsalGuard] }];

// AOT
// export const appRoutes: Routes = [{ path: '', loadChildren: './change-password/app.change-password#ChangePasswordComponent' }];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }