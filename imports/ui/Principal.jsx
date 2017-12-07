import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Map from './map/Map.jsx'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import AccountsUIWrapper from './Accounts/AccountsUIWrapper.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import "../api/foursquareAPI.js";
import RestaurantList from "./RestaurantList.jsx";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


// Principal component - represents Principal component
class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
          currentLatitude : this.props.currentLatitude,
          currentLongitude : this.props.currentLongitude,
          nearRestaurants: this.props.nearRestaurants
        };
    }
    


  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  render() {
    //console.log(this.state);
    return (
      <div className="Principal"> 
        <AccountsUIWrapper />
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <Tab label="Restaurants" value="a">
            <div>
              <h2 className="text-center" style={styles.headline}>Near Restaurants</h2>
              <RestaurantList restaurants = {this.props.nearRestaurants}/>
            </div>
          </Tab>
          <Tab label="Itineraries" value="b">
            <div>
              <h2 style={styles.headline}>Controllable Tab B</h2>
              <p>
                here's where a list of Itineraries will show up
              </p>
            </div>
          </Tab>
        </Tabs>
        <List>
        <ListItem
          disabled={true}
          leftAvatar={
          <Avatar src="../../client/img/b.png" />
          }>
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