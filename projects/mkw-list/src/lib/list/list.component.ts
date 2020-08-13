import { Component, OnInit, Input } from '@angular/core';

import { MkwList } from './list';

@Component({
  selector: 'mkw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: MkwList[] = [];

  constructor() {}

  ngOnInit(): void {}
}
