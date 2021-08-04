/// reference types="jest"
import orderByName from '.'
import Pipe from '../../types/Pipe';

describe('OrderByName', () => {
  
  let wrongObjectArray = [];
  let correctObjectArray: Pipe[] = [];
  let emptyArray = [];

  beforeEach(() => {
    wrongObjectArray = [{a: 1}, {a: 3}, {a: 2}];
    correctObjectArray = [
      {name: 'José', id: 1, icon: 'icon', image: 'image'}, 
      {name: 'Abner', id: 2, icon: 'icon', image: 'image'}, 
      {name: 'Fabíola', id: 3, icon: 'icon', image: 'image'},
    ];
  })

  it('should return a ordered array by name', () => {
    let orderedArray = [
      {name: 'Abner', id: 2, icon: 'icon', image: 'image'}, 
      {name: 'Fabíola', id: 3, icon: 'icon', image: 'image'},
      {name: 'José', id: 1, icon: 'icon', image: 'image'}, 
    ];
    expect(correctObjectArray.sort(orderByName)).toEqual(orderedArray);  
  })

});

