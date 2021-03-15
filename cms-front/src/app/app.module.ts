import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { JwtModule } from '@auth0/angular-jwt';

import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { MainModule } from "app/main/main.module";
import { LoginModule } from "app/main/authentication/login/login.module";
import { ResetPasswordModule } from "./main/authentication/reset-password/reset-password.module";
import { MaterialModule } from "./main/material.module";
import { PathResolveService } from "./common/paths/path-resolve.service";
import { NotFoundComponent } from "./common/paths/not-found.component";

import { JwtInterceptor } from "./main/authentication/services/jwtInterceptor";
import { ErrorInterceptor } from "./main/authentication/services/errorInterceptor.service";
import { paths } from "./common/paths/app-paths";
import { LoginComponent } from "./main/authentication/login/login.component";
import { SnackbarComponent } from "./common/snackbar/snackbar.component";
import { MAT_SNACK_BAR_DATA } from "@angular/material";
import { EnumKeyByValuePipe } from './common/pipes/enum-key-by-value.pipe';
import { EnumValueByKeyPipe } from './common/pipes/enum-value-by-key.pipe';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }

const appRoutes: Routes = [
    {
        path: paths.login,
        pathMatch: "full",
        component: LoginComponent,
    },
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: "**",
        resolve: {
            path: PathResolveService,
        },
        component: NotFoundComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        SnackbarComponent,
        EnumKeyByValuePipe,
        EnumValueByKeyPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        MainModule,
        LoginModule,
        ResetPasswordModule,
        MaterialModule,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} }

    ],
    exports: [EnumKeyByValuePipe, EnumValueByKeyPipe],
    entryComponents: [SnackbarComponent],
})
export class AppModule {}
