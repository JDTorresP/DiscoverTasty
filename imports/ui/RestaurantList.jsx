import React, { Component } from 'react';
import propTypes from "prop-types";
import Restaurant from "./Restaurant.jsx";

class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state={
            restaurants: this.props.restaurants
        }
    }

    renderRestaurants(){
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

RestaurantsList.propTypes = {
    restaurants: propTypes.array.isRequired
}

export default RestaurantsList;
