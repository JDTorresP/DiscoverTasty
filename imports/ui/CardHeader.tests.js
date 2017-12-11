//Felipe Iregui: Es mejor practica separar los ocmponentes de react con los .tests uno en carpeta ui y los otros en carpeta api
import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import CardHeader from "./CardHeader.jsx";

describe('<CardHeader />', () => {
  it('should render 1 <h4>', () => {
    const wrapper = shallow(<CardHeader category="cat test" image="url test"/>);      
    assert.equal(wrapper.find("h4").length, 1);
  });
  it('should render 1 <header>', () => {
    const wrapper = shallow(<CardHeader category="cat test" image="url test"/>);          
    assert.equal(wrapper.find("header").length, 1);
  });
});
