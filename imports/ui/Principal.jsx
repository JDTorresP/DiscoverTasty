import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Map from './map/Map.jsx'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import AccountsUIWrapper from './Accounts/AccountsUIWrapper.jsx';

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
          <AccountsUIWrapper />
          <List>
            <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar src="../../client/img/b.png" />
                }
                      >
                Image Avatar
            </ListItem>
         </List>
        <Map/>

      </div>
    );
  }
}
Principal.propTypes = {
};

export default Principal;