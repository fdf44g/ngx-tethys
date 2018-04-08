import { Component, NgModule } from '@angular/core';
import { ThyPopBoxService } from './pop-box.service';
import { PopBoxRef } from './pop-box-ref.service';
import { PopBoxContainerComponent } from './pop-box-container.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

@NgModule({
    declarations: [
        PopBoxContainerComponent
    ],
    entryComponents: [
        PopBoxContainerComponent
    ],
    exports: [
    ],
    providers: [
        ThyPopBoxService,
        PopBoxRef,
        ComponentLoaderFactory,
        PositioningService
    ]
})
export class NgxPopBoxModule {

}

