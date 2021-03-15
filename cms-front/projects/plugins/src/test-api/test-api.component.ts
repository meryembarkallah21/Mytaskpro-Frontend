import {Component, OnInit} from '@angular/core';
import {TestApiService} from './services/testapi.service';


@Component({
    selector: 'app-test-api',
    templateUrl: './test-api.component.html',
    styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
    jsonData: string;
    result: string;
    schema: any;

    showJsonApi: boolean;
    showBodyRequest: boolean;

    showSpinner = false;
    isresult = false;
    deploylink: any;
    logData: any;
    realTime: any ;

    constructor(
        private testApiService: TestApiService
    ) {
    }

    ngOnInit() {
        this.showJsonApi = true;
        this.showBodyRequest = false;
    }


    generateMock() {
        //this.showJsonApi = false;
        this.showSpinner = true;
        this.realTime = setInterval(() => {

            this.testApiService.getLog().subscribe((data) => {
                    this.logData = data;
                },
                (error) => {

                });

        }, 12000);
        this.testApiService.generateMock(this.jsonData).subscribe(
            (data) => {
                this.deploylink = data;
                this.showSpinner = false;
                this.isresult = true;
                clearInterval(this.realTime) ;

            },
            (error) => {

            }
        );



    }

}
