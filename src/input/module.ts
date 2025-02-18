import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyInputDirective } from './input.directive';
import { ThyInputComponent } from './input.component';
import { ThyInputGroupComponent } from './input-group.component';
import { ThyInputSearchComponent } from './input-search.component';
import { FormsModule } from '@angular/forms';
import { ThySharedModule } from 'ngx-tethys/shared';
import { ThyIconModule } from 'ngx-tethys/icon';
import { ThyDividerModule } from 'ngx-tethys/divider';
import { ThyInputCountComponent } from './input-count.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThySharedModule,
        ThyIconModule,
        ThyDividerModule,
        ThyInputDirective,
        ThyInputComponent,
        ThyInputGroupComponent,
        ThyInputSearchComponent,
        ThyInputCountComponent
    ],
    exports: [ThyInputDirective, ThyInputComponent, ThyInputGroupComponent, ThyInputSearchComponent, ThyInputCountComponent]
})
export class ThyInputModule {}
