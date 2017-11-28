import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Map from './map/Map.jsx'

// Principal component - represents Principal component
class Principal extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="Principal"> 
        <AppBar
                title="Discover Tasty"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        <Map/>

      </div>
    );
  }
}
Principal.propTypes = {
};

export default Principal;