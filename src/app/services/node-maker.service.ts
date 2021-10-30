import { Injectable } from '@angular/core';
import { LeafNode } from '../interfaces/leafNode';
import data from '../mockData/data.json';

@Injectable({
  providedIn: 'root',
})
export class NodeMakerService {
  resultArray: Array<LeafNode> = [];

  constructor() {}

  /**
   * @method: removeDuplicates
   * @param: data object
   * @description: This method removes all the duplicates in an array of objects and retuns a unique array of objects
   */
  removeDuplicates(data: any[]) {
    const result = [...new Set(data.map((ele) => JSON.stringify(ele)))].map(
      (ele) => JSON.parse(ele)
    );
    return result;
  }

  /**
   * @method: constructData
   * @description: This method serialises the data sa per the sys_Id and parent value and constructs a
   * tree structured data with parent and children objects
   */
  constructData() {
    const serialisedData = this.removeDuplicates(data.result);
    serialisedData.forEach((element: any) => {
      // if no parent value, then make the entity the parent
      if (element.sys_id && !element.parent) {
        this.resultArray.push(element);
      } else {
        // if parent exists, construct child nodes
        this.constructChildNodes(element);
      }
    });

    return this.resultArray;
  }

  /**
   * @method: constructChildNodes
   * @param: element object
   * @description: This method uses the element passed and constructs child nodes
   */
  constructChildNodes(element: { parent: any; }) {
    const childParentId = <any>element.parent;
    this.resultArray.forEach((_item: any) => {
      // check if the node to be added has parent = sys_id
      if (_item.sys_id === childParentId.value) {
        // if a child already exists, push it to the array
        if (_item.child) {
          _item.child.push(element);
        } else {
          // create a new child array for the first child element
          _item.child = [element];
        }
      } else {
        // if parent != sys_id
        if (_item.child) {
          this.constructSubChildNodes(_item, childParentId, element);
        }
      }
    });
  }

  /**
   * @method: constructSubChildNodes
   * @param: item, childParentId, element object
   * @description: This method constructs the sub child nodes
   */
  constructSubChildNodes(item: { child: any[]; }, childParentId: { value: String; }, element: { parent: any; }) {
    item.child.forEach((_key: any) => {
      // check if child node sys_id = parent value of existing child node
      if (_key.sys_id === childParentId.value) {
        _key.child = [element];
      }
    });
  }
}
