import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leaf-node',
  templateUrl: './leaf-node.component.html',
  styleUrls: ['./leaf-node.component.scss']
})
export class LeafNodeComponent {
  @Input() nodeData!: any;
  
  constructor() {}
}
