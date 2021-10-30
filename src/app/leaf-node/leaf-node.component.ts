import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaf-node',
  templateUrl: './leaf-node.component.html',
  styleUrls: ['./leaf-node.component.scss']
})
export class LeafNodeComponent implements OnInit {
  @Input() nodeData !: any;

  constructor() { }

  ngOnInit(): void {
  }
}
