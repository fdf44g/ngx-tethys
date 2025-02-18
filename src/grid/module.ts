import { NgModule } from '@angular/core';
import { ThyRowDirective } from './thy-row.directive';
import { ThyColDirective } from './thy-col.directive';
import { ThyGrid, ThyGridComponent } from './thy-grid.component';
import { ThyGridItemComponent } from './thy-grid-item.component';
import { ThyFlex, ThyFlexComponent, ThyFlexItem, ThyFlexItemComponent } from './flex';

@NgModule({
    exports: [
        ThyGrid,
        ThyGridComponent,
        ThyGridItemComponent,
        ThyRowDirective,
        ThyColDirective,
        ThyFlex,
        ThyFlexItem,
        ThyFlexComponent,
        ThyFlexItemComponent
    ],
    imports: [
        ThyGrid,
        ThyGridComponent,
        ThyGridItemComponent,
        ThyRowDirective,
        ThyColDirective,
        ThyFlex,
        ThyFlexItem,
        ThyFlexComponent,
        ThyFlexItemComponent
    ]
})
export class ThyGridModule {}
