import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tl-list',
  template: `
    <ul>
<!--      <li *ngFor="let item of list">{{item}}</li>-->
      <li>item</li>
    </ul>`,
  styleUrls: ['./list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() list!: string[];

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
