import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LockComponent } from "./lock.component";
import { MaterialModule } from "app/main/material.module";
import { paths } from "app/common/paths/app-paths";

const routes = [
    {
        path: paths.auth_lock,
        component: LockComponent,
    },
];

@NgModule({
    declarations: [LockComponent],
    imports: [RouterModule.forChild(routes), MaterialModule],
})
export class LockModule {}
