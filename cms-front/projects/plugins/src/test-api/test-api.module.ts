import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatButtonModule} from '@angular/material';
import {FuseTranslationLoaderService} from '@fuse/services/translation-loader.service';
import {TestApiComponent} from './test-api.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from 'shared';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [CommonModule, SharedModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, FormsModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule, TranslateModule.forRoot()],
    declarations: [TestApiComponent],
    entryComponents: [TestApiComponent]
})
export class TestApiModule {
    static entry = TestApiComponent;
}
