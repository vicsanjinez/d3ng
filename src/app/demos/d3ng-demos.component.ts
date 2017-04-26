import { Component } from '@angular/core';
import {D3ngChart} from "../d3ng-chart";

@Component({
  selector: 'd3ng-demos',
  template: `
    <h2>Demos</h2>
    <a routerLink="/demos/list">List</a>
    <a routerLink="/demos/pattern">Pattern</a>
    <a routerLink="/demos/parallel-coordinates">Parallel Coordinates</a>
    <a routerLink="/demos/scatter-plot">Scatter Plot</a>
    <a routerLink="/demos/tree-map">Tree Map</a>
    <a routerLink="/demos/chord-diagram">Chord Diagram</a>
    <a routerLink="/demos/collapsible-indented-tree">Collapsible Indented Tree</a>
  `,
  styles: [ 'a { display: block; }' ]
})

export class D3ngDemosComponent {

}
