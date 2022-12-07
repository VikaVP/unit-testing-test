import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import SimpleClass from '../components/SimpleClass';

//  jest.useFakeTimers();

describe('SimpleClass Page', () => {
  let component: any;
  beforeEach(async () => {
    jest.useFakeTimers();
    const props = {}
    component = shallow(<SimpleClass {...props}/>);
  });

  it('snapshot showing screen', () => {
   expect(shallowToJson(component)).toMatchSnapshot();
   expect(component).toHaveLength(1);
  });

//   it('onchange input', () => {
//     // component.find('input').at(0).prop('onChange')({
//     //     target : {
//     //         value: 'tes class'
//     //     }
//     // })
//     component.find('input').at(0).simulate('change', {
//         target : {
//             value: 'tes class'
//         }
//     })
//     expect(component.find('input').at(0).prop('value')).toBe('tes class')
//   })

  it('onclick button', () => {
    component.find('input').at(0).prop('onChange')({
        target : {
            value: 'tes'
        }
    })
    component.find('button').at(0).prop('onClick')()
    expect(component.find('p').at(0).text()).toEqual('Anda menginput tes')
  })

  it('handleChange spy', () => {
    jest.spyOn(component.instance(), 'handleChange');
    component.instance().handleChange({
        target: {
            value: 'yoo'
        }
    })
  })

})