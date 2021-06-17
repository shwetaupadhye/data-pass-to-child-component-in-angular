import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcompo2',
  templateUrl: './childcompo2.component.html',
  styleUrls: ['./childcompo2.component.css']
})
export class Childcompo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public fnames: any;
  @Input() public lnames: any;
  @Input() public emailIds: any;
}
