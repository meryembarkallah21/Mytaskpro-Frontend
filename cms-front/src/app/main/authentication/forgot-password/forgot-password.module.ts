import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { MaterialModule } from "app/main/material.module";
import { paths } from "app/common/paths/app-paths";
import { ParticlesModule } from 'angular-particle';


const routes = [
    {
        path: paths.forgot_password,
        component: ForgotPasswordComponent,
    },
];

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [RouterModule.forChild(routes), MaterialModule,
        ParticlesModule],
})
export class ForgotPasswordModule {}
