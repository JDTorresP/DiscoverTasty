import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import ButtonCard from "./ButtonCard.jsx";

describe('<ButtonCard />', () => {
  
  it('should render 1 <button>', () => {
    const wrapper = shallow(<ButtonCard/>); 
    assert.equal(wrapper.find("button").length, 1);
  });
});