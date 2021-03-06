import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FuseSidebarModule } from "@fuse/components";
import { FuseSharedModule } from "@fuse/shared.module";

import { ContentModule } from "app/layout/components/content/content.module";
import { FooterModule } from "app/layout/components/footer/footer.module";
import { NavbarModule } from "app/layout/components/navbar/navbar.module";
import { QuickPanelModule } from "app/layout/components/quick-panel/quick-panel.module";
import { ToolbarModule } from "app/layout/components/toolbar/toolbar.module";

import { VerticalLayoutComponent } from "app/layout/vertical/layout/layout.component";

@NgModule({
    declarations: [VerticalLayoutComponent],
    imports: [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
    ],
    exports: [VerticalLayoutComponent],
})
export class VerticalLayoutModule {}
