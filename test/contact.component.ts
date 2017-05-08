import { Component } from '@angular/core';

@Component({
    selector: 'contact-item',
    template: `
        <div>
            <p>{{name}}</p>
            <p>{{phone}}</p>
        </div>
    `
})

export class ContactItemComponent {
    name: '张三';
    phone: 18666601728;
}