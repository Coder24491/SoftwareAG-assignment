import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-node',
  templateUrl: './parent-node.component.html',
  styleUrls: ['./parent-node.component.scss']
})
export class ParentNodeComponent {
  @Input() parentNodeData!: String;

  constructor() {}
}
