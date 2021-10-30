import { Injectable } from '@angular/core';
import data from '../mockData/data.json';

@Injectable({
  providedIn: 'root',
})
export class NodeMakerService {
  resultArray: any = [];

  constructor() {}

  /**
   * @method: removeDuplicates
   * @param: data object
   * @description: This method removes all the duplicates in an array of objects and retuns a unique array of objects
   */
  removeDuplicates(data: any[]) {
    const result = [...new Set(data.map(ele => JSON.stringify(ele)))].map(ele => JSON.parse(ele))
    return result;
  }

  /**
   * @method: constructData
   * @description: This method serialises the data sa per the sys_Id and parent value and constructs a 
   * tree structured data with parent and children objects
   */
  constructData() {
    const serialisedData = this.removeDuplicates(data.result);
    serialisedData.forEach((element: { sys_id: any; parent: any }) => {
      // if no parent value, then make the entity the parent
      if (element.sys_id && !element.parent) {
        this.resultArray.push(element);
      } else {
        const childParentId = <any>element.parent;
        this.resultArray.forEach((_item: any) => {
          if (_item.sys_id === childParentId.value) {
            if (_item.child) {
              _item.child.push(element);
            } else {
              _item.child = [element];
            }
          } else {
            if (_item.child) {
              _item.child.forEach((_key: any) => {
                if (_key.sys_id === childParentId.value) {
                  _key.child = [element];
                }
              });
            }
          }
        });
      }
    });

    return this.resultArray;
  }
}
