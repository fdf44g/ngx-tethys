import { ThyTooltipModule } from 'ngx-tethys/tooltip';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThyProgressCircleComponent } from './progress-circle.component';
import { ThyProgressStripComponent } from './progress-strip.component';
import { ThyProgressComponent } from './progress.component';

@NgModule({
    declarations: [ThyProgressComponent, ThyProgressStripComponent, ThyProgressCircleComponent],
    imports: [CommonModule, ThyTooltipModule],
    exports: [ThyProgressComponent]
})
export class ThyProgressModule {}
