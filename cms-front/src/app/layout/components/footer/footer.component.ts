import { Component } from "@angular/core";
const { version } = require("../../../../../package.json");

@Component({
    selector: "footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
    projectVersion: number;
    /**
     * Constructor
     */
    constructor() {
        this.projectVersion = version;
    }
}
