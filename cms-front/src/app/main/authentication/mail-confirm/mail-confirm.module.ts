import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MailConfirmComponent } from "./mail-confirm.component";
import { MaterialModule } from "app/main/material.module";
import { paths } from "app/common/paths/app-paths";

const routes = [
    {
        path: paths.auth_mail_confirm,
        component: MailConfirmComponent,
    },
];

@NgModule({
    declarations: [MailConfirmComponent],
    imports: [RouterModule.forChild(routes), MaterialModule],
})
export class MailConfirmModule {}
