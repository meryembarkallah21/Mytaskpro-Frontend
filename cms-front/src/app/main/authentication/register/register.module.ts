import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { MaterialModule } from "app/main/material.module";
import { paths } from "app/common/paths/app-paths";
import { ParticlesModule } from 'angular-particle';


const routes = [
    {
        path: paths.register,
        component: RegisterComponent,
    },
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [RouterModule.forChild(routes), MaterialModule ,ParticlesModule ],
    
})
export class RegisterModule {}
