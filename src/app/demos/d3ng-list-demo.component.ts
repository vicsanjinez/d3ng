import { Component } from '@angular/core';

@Component({
  selector: 'd3ng-list-demos',
  template: `
    <h2>D3ng List Demo</h2>
    <h3>A list</h3>
    <d3ng-list [data]="listData" [(selected)]="selection" [customLabel]="label"></d3ng-list>
    <h3>A list connected with the other list</h3>
    <d3ng-list [data]="listData" [(selected)]="selection" [customLabel]="label" [multiselect]="true"></d3ng-list>
  `,
  styles: [ ]
})

export class D3ngListDemoComponent {

  selection: any[] = [];

  label = function(d) {
    return d;
  };

  listData = [
    "One",
    "Two",
    "Three",
    "Four"
  ]
}
