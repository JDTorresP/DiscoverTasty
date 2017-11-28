import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class Map extends Component {
   constructor(props) {
     super(props);
     this.state={
       currentLatitude :0,
       currentLongitude : 0


     };
     this.getLocation = this.getLocation.bind(this);
     this.initPosition = this.initPosition.bind(this);
   }
    componentWillMount () {
      this.getLocation();  
    }
        
   
  handleClick(event){
    console.log('lat',event.lat);
    console.log('lng',event.lng);
  }
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.initPosition);
    } else { 
        alert("Geolocation is not supported by this browser."); 
    }
}

initPosition(position) {
  this.setState({
    currentLatitude:position.coords.latitude,
    currentLongitude:position.coords.longitude
  });
}
reGetLocalization(){
  this.getLocation();
}
  render() {
    this.getLocation();
    return (
      <div className="Map">
          <GoogleMapReact
              options={{styles: [{
                "featureType": "all",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "#on"
                }]
              }]}}
              center={this.state.currentLongitude == 0 ? 
              {lat:4.63239519492501, lng: -74.07368742871091}:
              {lat:this.state.currentLatitude, lng: this.state.currentLongitude}}
              zoom={12}
              onClick={(event)=>this.handleClick(event)}
          >
            <Marker tooltip='Hola' lat={this.state.currentLatitude} lng={this.state.currentLongitude}/>
            
          </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
