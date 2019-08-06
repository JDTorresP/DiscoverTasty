import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Map from './map/Map.jsx'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import "../api/foursquareAPI.js";
import RestaurantList from "./RestaurantList.jsx";
import DragDropContext from "./dnd.jsx";
import Newss from './News.jsx';
import ItinerariesList from "./ItinerariesList.jsx";
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import ReactCardFlip from 'react-card-flip';
import { Meteor } from 'meteor/meteor';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import "../api/itineraries.js";
const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

//Temporarily store data here
const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]

// Principal component - represents Principal component
class Principal extends Component {
    constructor(props) {
        super(props);
        const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
        this.state = {
          value: 'a',
          currentLatitude : this.props.currentLatitude,
          currentLongitude : this.props.currentLongitude,
          nearRestaurants: this.props.nearRestaurants,
          itineraries: [],
          listRest:[],
          events: [],
          isPaneOpenLeft: false,
          isFlipped: false,
          refresh:false,
          value: 10,
          minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
      open : false
        };
        this.handleChangeSideModal = this.handleChangeSideModal.bind(this);
        this.changeIdSelected = this.changeIdSelected.bind(this);
        this.getInfoRestaurant = this.getInfoRestaurant.bind(this);
        this.showBack = this.showBack.bind(this);
        this.showFront = this.showFront.bind(this);
        this.manageNameItinerary = this.manageNameItinerary.bind(this);
        this.makeItinerary= this.makeItinerary.bind(this);
    }

    handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

      handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

    
    showBack() {
      this.handleClickOpen();
      let itit=[];
      itit= this.props.itineraries;
      const items = [];
      for (let i = 0; i < itit.length; i++ ) {
        items.push(<MenuItem value={i} key={i} primaryText={`Itineario ${i}`} />);
      }

    this.setState({
      itineraries:items,
      isFlipped: true
    });
   }
  showFront() {
    this.setState({
      isFlipped: false
    });
  }

    getInfoRestaurant(){
    let id = this.state.SelectedRestaurant;

  }
    handleChangeSideModal(){
    this.setState({ isPaneOpenLeft: true }) 
  }
  changeIdSelected(id){
    this.setState({
      SelectedRestaurant:id,
      refresh:true
    })
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  makeItinerary(){
    console.log("empezo a agregar")
     Meteor.call('itineraries.addEvent',itineraryId, fechaHora, nombreRestaurante, direccion, latitud, longitud, (err, response)=>{
      if (err) throw err;
     console.log(response);
      this.setState({
        });
    });  
  }
  manageNameItinerary(e){
    this.setState({
      nameIti:e.target.value
    })
  }
  
  render() {
    console.log("LOS ITINERARIOS",this.props.itineraries);
    //console.log(this.state);
      var x = 'hey '+this.state.SelectedRestaurant,rat="",pric="", add='', sub="", src='', tlt="", plp=" No tips Yet";
      if(this.state.SelectedRestaurant){
        add= "address: "+this.state.SelectedRestaurant.address;
        pric="Price: "+this.state.SelectedRestaurant.price;
        rat = "Rating (1-10): "+this.state.SelectedRestaurant.rating;
        sub= this.state.SelectedRestaurant.category;
        src = this.state.SelectedRestaurant.image;
        tlt = this.state.SelectedRestaurant.title;
       var j = [];
       if(typeof this.state.SelectedRestaurant.tips != 'undefined'){
        j = this.state.SelectedRestaurant.tips;
       }
       if(j.length>0){
         plp = "people says: "+ this.state.SelectedRestaurant.tips[0].text;
       }
      }

    return (
      <div className="Principal NewsRestaurant"> 
        <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title={x}
                from='left'
                width='400px'
                onRequestClose={ () => {this.setState({ isPaneOpenLeft: false });
                this.showFront();}  }>
                <div>
                <ReactCardFlip isFlipped={this.state.isFlipped} onmouseover={this.showBack}>
                  <Card key="front">
                    <CardMedia
                      overlay={<CardTitle title="" subtitle={sub} />}
                    >
                      <img src={src} alt="restaurant image" />
                    </CardMedia>
                    <CardTitle title={tlt} subtitle="visit us" />
                    <CardText>
                      <div>
                        {add} <br/>
                        {pric} <br/>
                        {rat}<br/>
                        {plp}
                      </div>
                      
                    </CardText>
                    <CardActions>
                      <RaisedButton label="Save on a Itinerary" primary={true} fullWidth={true}
                       onClick={this.showBack} />
                       <Snackbar
                            open={this.state.open}
                            message="Added to itinerary"
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose}
                        />
                    </CardActions>
                  </Card>

                <Card key="back">
                   
                    <CardMedia
                      overlay={<CardTitle title="" subtitle="" />}
                    >
                      <img src={src} alt="" />
                    </CardMedia>
                    <CardTitle title={tlt} subtitle="" />
                    <CardText>
                      {Meteor.user()?<div>
                         <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
                        Please Select One Itinerary <br/>
                         <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                          {this.state.itineraries}
                        </DropDownMenu>
                        </div> :<div>You Have To Login First</div>}
                    </CardText>
                    <CardActions>
                      //Felipe Iregui: Siempre metan el Meteor.user() dentro de un iF completo, por experiencia propia asi puede fallar.
                      {Meteor.user()?<div><RaisedButton label="Create" primary={true} fullWidth={true} onCLick={this.makeItinerary} /></div> :
                      <div><RaisedButton label="LogIn" primary={true} fullWidth={true} onClick={ () => {this.setState({ isPaneOpenLeft: false });
                this.showFront();}  } /></div>}
                      <RaisedButton label="Go Back" primary={true} fullWidth={true} onClick={this.showFront} />
                    </CardActions>
                  </Card>
                </ReactCardFlip>
        </div>
        </SlidingPane>
        <Newss nearRestaurants={this.props.nearRestaurants} click={this.handleChangeSideModal} changeSelected={this.changeIdSelected}/> 
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <Tab label="Itineraries" value="a">
            <div className="pb-3">
              <ItinerariesList itineraries={this.props.itineraries}/>
            </div>

          </Tab>
        </Tabs>
        <Map/>
      </div>
    );
  }
}
Principal.propTypes = {
};

export default Principal;
