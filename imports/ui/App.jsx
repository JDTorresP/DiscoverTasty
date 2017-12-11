import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Principal from './Principal.jsx';
import Headroom from 'react-headroom';
import CitiesSlider from './CitiesSlider.jsx';
import AccountsUIWrapper from './Accounts/AccountsUIWrapper.jsx';
import AppBar from 'material-ui/AppBar';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import {
    SearchBox,
    RefinementListFilter,
    Hits,
    HitsStats,
    SearchkitComponent,
    SelectedFilters,
    MenuFilter,
    HierarchicalMenuFilter,
    Pagination,
    ResetFilters
    } from "searchkit";



import "../api/foursquareAPI.js";


const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://www.saint-james-paris.com/wp-content/uploads/2017/04/siterestaurant2.jpg',
  },
  {
    city: 'Medellin',
    country: 'Colombia',
    img: 'http://thecharlee.com/wp-content/uploads/2015/04/LUCIA-101.jpg',
  },
  {
    city: 'Singapore',
    img: 'http://shout.sg/wp-content/uploads/2017/01/Lighthouse-rooftop-seats.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'http://mobileapps.anywhere.cz/image.php?id=42885&app_id=6191&key=7bf57850c63f6cdf0e5e561a681bc8a48b68fa76&width=1920',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://30smagazine.files.wordpress.com/2016/08/restaurant-c-amsterdam-copyrighted-30s-magazine-3208.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://lidenz.ru/wp-content/uploads/2015/10/white-rabbit-med-crop.jpg',
  },
  {
    city: 'Bogota',
    country: 'Colombia',
    img: 'http://www.lurebogota.com/wp-content/uploads/2017/03/Bogota-3-web.jpg',
  }
];

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLatitude :0,
      currentLongitude : 0,
      nearRestaurants: [],
      isPaneOpen: true,
      isPaneOpenLeft: false
    
    };
    this.getLocation = this.getLocation.bind(this);
    this.initPosition = this.initPosition.bind(this);
    this.handleChangeSideModal = this.handleChangeSideModal.bind(this);

}
  
  componentDidMount(){
     
    this.getLocation();
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
    //  console.log(response);
      this.setState({currentLatitude:position.coords.latitude,
        currentLongitude:position.coords.longitude,
        nearRestaurants:  response});
    });  
    //console.log(this.state);
  }
  handleChangeSideModal(){
    this.setState({ isPaneOpenLeft: true }) 
  }


  render() {
    return (
      <div >
        <Headroom style={{
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out'
        }}>
         <MuiThemeProvider>
       <AppBar
          title="Discover Tasty"
          iconElementRight={<AccountsUIWrapper />}
        />
         </MuiThemeProvider>
       </Headroom>
        <CitiesSlider slides={slides} />
         <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='400px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>And I am pane content on left.</div>
        </SlidingPane>
        <MuiThemeProvider>
          <Principal currentLatitude={this.state.currentLatitude} currentLongitude={this.state.currentLongitude} nearRestaurants={this.state.nearRestaurants}/>
        </MuiThemeProvider>
      </div>
    );
  }
}