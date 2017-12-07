import React, { Component } from 'react';
//import './css/bootstrap.css';
//import './css/styles.css';
import PropTypes from "prop-types";
import Restaurant from "./Restaurant.jsx";

class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state={
            restaurants: this.props.restaurants
        }
    }

    renderRestaurants(){
        console.log("RENDERIZANDO RESTAURANTES");
        console.log(this.state);
        return this.props.restaurants.map((t,i)=>{
            return <Restaurant restaurant={t} key={i}/>;
        });
    }

    render(){
        return(
        <div className="container">
            <div className="row">{this.props.restaurants ? this.renderRestaurants():"No restaurants yet lol"}</div>
        </div>);
    }
}
/* RestaurantsList.PropTypes = {
    restaurants: PropTypes.array.isRequired
} */

export default RestaurantsList;
