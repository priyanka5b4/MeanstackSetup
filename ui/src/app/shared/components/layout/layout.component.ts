import { Component, Input, OnInit } from '@angular/core';

export type Layout = 'Card' | 'List' | 'Minimal';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input()
  layout: Layout = 'Card';
  constructor() {}

  ngOnInit(): void {}
}
