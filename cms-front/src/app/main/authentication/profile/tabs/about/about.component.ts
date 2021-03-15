import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { ProfileService } from "../../profile.service";

@Component({
    selector: "profile-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ProfileAboutComponent implements OnInit, OnDestroy {
    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(private _profileService: ProfileService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {}

    /**
     * On destroy
     */
    ngOnDestroy(): void {}
}
