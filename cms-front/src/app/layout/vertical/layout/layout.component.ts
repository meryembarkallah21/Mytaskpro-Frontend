import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { navigation } from "app/navigation/navigation";


@Component({
    selector: "vertical-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayoutComponent implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: any;
    username: string;
    administration: boolean = false;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });

        // Set the defaults
        this.navigation = navigation;

        if (localStorage.getItem("currentUser")) {
            this.showNavigation(
                JSON.parse(localStorage.getItem("currentUser")).roles
            );
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    showNavigation(roleId) {
        /*this.profileService.findbyId(roleId).subscribe(element => {
            this.matrixService.findbyProfileName(element.nom).subscribe(result => {
                var habilitationsName = []
                result.habilitations.forEach(h => {
                    habilitationsName.push(h.name)

                });
                this.navigation[0].children.forEach(child => {
                    if (child.id == 'administration')
                        child.hidden = !habilitationsName.includes('Habilitation')
                    if (child.id == 'master')
                        child.hidden = !habilitationsName.includes('Gestion Territorial')

                });
            })


        })*/
    }
}
