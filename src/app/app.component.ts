import { Component, OnInit } from '@angular/core';
import { LeafNode } from './interfaces/leafNode';
import { NodeMakerService } from './services/node-maker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nodeData: Array<LeafNode> = [];

  constructor(private nodeMakerService: NodeMakerService) {}

  ngOnInit(): void {
    this.nodeData = this.nodeMakerService.constructData();
    console.log(this.nodeData);
  }
}
