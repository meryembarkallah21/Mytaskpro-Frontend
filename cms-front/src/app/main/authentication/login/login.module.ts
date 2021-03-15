import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ForgotPasswordModule } from "../forgot-password/forgot-password.module";
import { RegisterModule } from "../register/register.module";
import { MaterialModule } from "app/main/material.module";
import { ConfirmAccountModule } from "../confirm-account/confirm-account.module";
import { paths } from "app/common/paths/app-paths";
import { ParticlesModule } from 'angular-particle';

const routes = [
    {
        path: paths.login,
        component: LoginComponent,
    },
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        ForgotPasswordModule,
        RegisterModule,
        ConfirmAccountModule,
        ParticlesModule,
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
