import { TestBed } from '@angular/core/testing';

import { NodeMakerService } from './node-maker.service';

describe('NodeMakerService', () => {
  let service: NodeMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call removeDuplicates', () => {
    const data = [
      {
        sys_id: '016d2c3d18400300964f2ff0d21a4ee5',
        parent: '',
        short_description: '',
        name: 'Without child - extra data added for checking',
        active: 'true',
      },
      {
        sys_id: '016d2c3d18400300964f2ff0d21a4ee4',
        parent: '',
        short_description: '',
        name: 'Develop and Manage Products and Services',
        active: 'true',
      },
      {
        sys_id: '016d2c3d18400300964f2ff0d21a4ee5',
        parent: '',
        short_description: '',
        name: 'Market and Sell Products and Services',
        active: 'true',
      },
    ];

    const output = [
      {
        sys_id: '016d2c3d18400300964f2ff0d21a4ee5',
        parent: '',
        short_description: '',
        name: 'Without child - extra data added for checking',
        active: 'true',
      },
      {
        sys_id: '016d2c3d18400300964f2ff0d21a4ee4',
        parent: '',
        short_description: '',
        name: 'Develop and Manage Products and Services',
        active: 'true',
      }
    ]
    expect(service.removeDuplicates(data)).toEqual(output);
  });
});
