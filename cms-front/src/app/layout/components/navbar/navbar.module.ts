import { NgModule } from "@angular/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { NavbarComponent } from "app/layout/components/navbar/navbar.component";
import { NavbarVerticalStyleModule } from "app/layout/components/navbar/vertical/style/style.module";

@NgModule({
    declarations: [NavbarComponent],
    imports: [FuseSharedModule, NavbarVerticalStyleModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
