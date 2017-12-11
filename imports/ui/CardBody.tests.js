import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import CardBody from "./CardBody.jsx";

describe('<CardBody />', () => {
  it('should render 2 <p>', () => {
    const wrapper = shallow(<CardBody text="text test" title="title test"/>);      
        assert.equal(wrapper.find("p").length, 2);
  });
  it('should render 1 <h2>', () => {
    const wrapper = shallow(<CardBody text="text test" title="title test"/>);  
    
    assert.equal(wrapper.find("h2").length, 1);
  });
  it('should render 1 <ButtonCard />', () => {
    const wrapper = shallow(<CardBody text="text test" title="title test"/>);  
    
    assert.equal(wrapper.find("ButtonCard").length, 1);
  });
});