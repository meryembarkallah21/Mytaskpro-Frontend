import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";

import { FuseSharedModule } from "@fuse/shared.module";

import { ProfileService } from "./profile.service";
import { ProfileComponent } from "./profile.component";
import { ProfileAboutComponent } from "./tabs/about/about.component";
import { MaterialModule } from "app/main/material.module";
import { AuthGuard } from "../services/auth-gard.service";
import { paths } from "../../../common/paths/app-paths";

const routes = [
    {
        path: paths.profile,
        component: ProfileComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    declarations: [ProfileComponent, ProfileAboutComponent],
    imports: [RouterModule.forChild(routes), MaterialModule],
    providers: [ProfileService],
})
export class ProfileModule {}
