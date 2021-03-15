import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subject } from "rxjs";
import { delay, filter, take, takeUntil } from "rxjs/operators";
import { navigation } from "app/navigation/navigation";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FusePerfectScrollbarDirective } from "@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";
import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";
import { FuseConfigService } from "@fuse/services/config.service";

@Component({
    selector: "navbar-vertical-style",
    templateUrl: "./style.component.html",
    styleUrls: ["./style.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarVerticalStyleComponent implements OnInit, OnDestroy {
    username: string;
    email: string;
    fuseConfig: any;
    navigation: any;
    // Private
    private _fusePerfectScrollbar: FusePerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {Router} _router
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _router: Router
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(FusePerfectScrollbarDirective, { static: true })
    set directive(theDirective: FusePerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._fusePerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._fuseNavigationService.onItemCollapseToggled
            .pipe(delay(500), takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._fusePerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    this._fusePerfectScrollbar.scrollToElement(
                        "navbar .nav-link.active",
                        -120
                    );
                });
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        if (!(localStorage.getItem("currentUser") == null)) {
            this.username = JSON.parse(
                localStorage.getItem("currentUser")
            ).username;
            this.email = JSON.parse(localStorage.getItem("currentUser")).email;
        }

        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                if (this._fuseSidebarService.getSidebar("navbar")) {
                    this._fuseSidebarService.getSidebar("navbar").close();
                }
            });

        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });

        // Get current navigation
        this._fuseNavigationService.onNavigationChanged
            .pipe(
                filter((value) => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._fuseNavigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void {
        this._fuseSidebarService.getSidebar("navbar").toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void {
        this._fuseSidebarService.getSidebar("navbar").toggleFold();
    }
}
