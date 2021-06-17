import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponents1',
  templateUrl: './childcomponents1.component.html',
  styleUrls: ['./childcomponents1.component.css']
})
export class Childcomponents1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public fnames: any;
  // @Input() public adds: any;



}
