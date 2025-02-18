import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyCardComponent } from './card.component';
import { ThyCardHeaderComponent } from './header.component';
import { ThyCardContentComponent } from './content.component';

@NgModule({
    imports: [CommonModule, ThyCardComponent, ThyCardHeaderComponent, ThyCardContentComponent],
    exports: [ThyCardComponent, ThyCardHeaderComponent, ThyCardContentComponent]
})
export class ThyCardModule {}
