import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-parent-node',
  templateUrl: './parent-node.component.html',
  styleUrls: ['./parent-node.component.scss']
})
export class ParentNodeComponent implements OnInit {
  @Input() parentNodeData !: any;

  constructor() { }

  ngOnInit(): void {
  }

}
