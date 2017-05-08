import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() contact:any = {};
  @Output() routerNavigate = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
