import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import Title from "./Title.jsx";

describe('<Title />', () => {
  
  it('should render 1 <h1>', () => {
    const wrapper = shallow(<Title/>); 
    assert.equal(wrapper.find("h1").length, 1);
  });
  it('should render 1 <p>', () => {
    const wrapper = shallow(<Title/>); 
    assert.equal(wrapper.find("p").length, 1);
  });
});