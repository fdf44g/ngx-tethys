import { ThyDialog } from 'ngx-tethys/dialog';

import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'thy-property-editable-example',
    templateUrl: './editable.component.html',
    styleUrls: ['./editable.component.scss'],
    host: {}
})
export class ThyPropertyEditableExampleComponent implements OnInit {
    user = {
        name: '张萌',
        phone: 18800010001,
        age: 24,
        birth_date: 1234567890,
        address: '北京市朝阳区十八里店小区26号10001',
        likes: ['羽毛球'],
        sex: '女',
        punch_time: 1234567890
    };

    constructor(public thyDialog: ThyDialog) {}

    ngOnInit() {}

    openTemplateDialog(template: TemplateRef<any>) {
        this.thyDialog.open(template);
    }
}
