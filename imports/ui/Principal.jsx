import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

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
      </div>
    );
  }
}
Principal.propTypes = {
};

export default Principal;