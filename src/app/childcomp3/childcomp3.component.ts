import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomp3',
  templateUrl: './childcomp3.component.html',
  styleUrls: ['./childcomp3.component.css']
})
export class Childcomp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public names: any;
  @Input() public emails: any;
  @Input() public contacts: any;

}
