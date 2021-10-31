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
    const result = [...new Set(data.map(ele => JSON.stringify(ele)))].map(
      ele => JSON.parse(ele)
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

    const idList = serialisedData.reduce((pre, ele, index) => {
      pre[ele.sys_id] = index;
      return pre;
    }, {});

    serialisedData.forEach(item => {
      // Handle the root element
      if (item.parent === '') {
        this.resultArray.push(item);
        return;
      }
      // Use our mapping to locate the parent element in our data array
      const parent = serialisedData[idList[item.parent.value]];

      // Add our current el to its parent's `children` array
      parent.children = [...(parent.children || []), item];
    });

    return this.resultArray;
  }
}
