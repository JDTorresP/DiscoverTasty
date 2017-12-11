import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import News from "./News.jsx";

describe('<News />', () => {
  
  it('should render 1 <Title>', () => {
    const wrapper = shallow(<News nearRestaurants={[]}/>); 
    assert.equal(wrapper.find("Title").length, 1);
  });
});