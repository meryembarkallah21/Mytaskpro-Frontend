import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { RegisterService } from "../services/register.service";
import { paths } from "app/common/paths/app-paths";

@Component({
    selector: "app-confirm-account",
    templateUrl: "./confirm-account.component.html",
    styleUrls: ["./confirm-account.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ConfirmAccountComponent implements OnInit {
    token: string;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private route: ActivatedRoute,
        private registerService: RegisterService,
        private _fuseConfigService: FuseConfigService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: false,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.token = params["token"];
        });
    }
    confirm(token: string) {
        this.registerService.confirmAccount(token).subscribe(
            (data) => {
                this.snackBar.open(
                    "Account verified successfully! Please login and enjoy the journey!",
                    null,
                    { duration: 4000 }
                );
                this.router.navigate([paths.login]);
            },
            (e) => {
                
            }
        );
    }
}
