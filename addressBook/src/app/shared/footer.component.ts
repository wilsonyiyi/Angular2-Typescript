import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'my-footer',
    templateUrl: './footer.component',
    styleUrls: ['./footer.component']
})

export class FooterComponent implements OnInit {
    private isListPage:boolean = true;
    constructor(
        private _location:Location
    ) {}

    ngOnInit() {
        this.isListPage = this._location.path() == '' || this._location.path().indexOf('/list') > -1
    }
}