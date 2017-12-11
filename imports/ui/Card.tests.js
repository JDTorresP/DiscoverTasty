import { assert } from "meteor/practicalmeteor:chai";
import { shallow } from 'enzyme';
import React from "react";
import Card from "./Card.jsx";

describe('<Card />', () => {
  
  it('should render 1 <CardHeader>', () => {
      var detalles={category: "cat test", image: "url test", text: "text test", title: "title test"};
    const wrapper = shallow(<Card details={detalles}/>); 
    assert.equal(wrapper.find("CardHeader").length, 1);
  });
  it('should render 1 <CardBody>', () => {
    var detalles={category: "cat test", image: "url test", text: "text test", title: "title test"};    
    const wrapper = shallow(<Card details={detalles}/>); 
    assert.equal(wrapper.find("CardBody").length, 1);
  });
});