import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import {
    FuseProgressBarModule,
    FuseConfirmDialogModule,
} from "@fuse/components";
import { FuseSharedModule } from "@fuse/shared.module";
import { mainRoutingModule } from "./main.routing.module";

import { MaterialModule } from "./material.module";
import { MailConfirmModule } from "./authentication/mail-confirm/mail-confirm.module";
import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";

import { Ng2SearchPipeModule } from "ng2-search-filter";

import { CdkTreeModule } from "@angular/cdk/tree";
import { MatTreeModule } from "@angular/material/tree";
import { CdkTableModule } from "@angular/cdk/table";
import { DragDropModule } from "@angular/cdk/drag-drop";



@NgModule({
    declarations: [
        
    ],
    imports: [
        TranslateModule,
        MailConfirmModule,
        FuseSharedModule,
        mainRoutingModule,
        FuseProgressBarModule,
        MaterialModule,
       
        FuseConfirmDialogModule,
        Ng2SearchPipeModule,
        CdkTreeModule,
        MatTreeModule,
        CdkTableModule,
        DragDropModule,
    ],
    entryComponents: [
        FuseConfirmDialogComponent,
    ],
    providers: [],
})
export class MainModule {}
