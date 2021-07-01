import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 

 // Imports in the component we are going to be testing. 
import ApartmentIndex from '../ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 

describe("When ApartmentIndex loads...",() => {
    it('ApartmentIndex renders content', () => {
        const ApartmentIndex = shallow(<ApartmentIndex />)
        expect(ApartmentIndex.find('p').text()).toEqual('All the apartments.')
    })
})