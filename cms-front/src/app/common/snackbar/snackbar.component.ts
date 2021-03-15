import { Component, Inject } from "@angular/core";
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from "@angular/material";

@Component({
    selector: "app-snackbar",
    templateUrl: "./snackbar.component.html",
})
export class SnackbarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<SnackbarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) {}

    get getIcon() {
        switch (this.data.snackType) {
            case "success":
                return { type: this.data.snackType, icon: "check" };
            case "error":
                return { type: this.data.snackType, icon: "face" };
            case "warn":
                return {
                    type: this.data.snackType,
                    icon: "notification_important",
                };
            case "info":
                return { type: this.data.snackType, icon: "info" };
        }
    }
}
