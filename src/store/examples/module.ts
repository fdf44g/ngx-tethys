import { NgxTethysModule } from 'ngx-tethys';
import { ThyStoreModule } from 'ngx-tethys/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyStoreBasicExampleComponent } from './basic/basic.component';
import { ThyStoreListExampleComponent } from './list/list.component';
import { ThyStoreListWithReferencesExampleComponent } from './list-with-references/list-with-references.component';

const COMPONENTS = [ThyStoreBasicExampleComponent, ThyStoreListExampleComponent, ThyStoreListWithReferencesExampleComponent];

@NgModule({
    imports: [CommonModule, NgxTethysModule, ThyStoreModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers: []
})
export class ThyStoreExamplesModule {}
