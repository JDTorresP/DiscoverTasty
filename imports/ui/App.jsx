import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Principal from './Principal.jsx';
import "../api/foursquareAPI.js";

 
// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLatitude :0,
      currentLongitude : 0,
      nearRestaurants: []
    };
    this.getLocation = this.getLocation.bind(this);
    this.initPosition = this.initPosition.bind(this);
}

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.initPosition);
    } else { 
        alert("Geolocation is not supported by this browser."); 
    }
  }

  initPosition(position) {
    Meteor.call('foursquare-search',position.coords.latitude, position.coords.longitude, (err, response)=>{
      if (err) throw err;
      console.log(response);
      this.setState({currentLatitude:position.coords.latitude,
        currentLongitude:position.coords.longitude,
        nearRestaurants:  response});
    });  
    console.log(this.state);
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    return (
      <div >
        <MuiThemeProvider>
          <Principal currentLatitude={this.state.currentLatitude} currentLongitude={this.state.currentLongitude} nearRestaurants={this.state.nearRestaurants}/>
        </MuiThemeProvider>
      </div>
    );
  }
}