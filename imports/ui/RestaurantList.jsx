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
<<<<<<< HEAD
       // console.log("RENDERIZANDO RESTAURANTES");
       // console.log(this.state);
=======
>>>>>>> d7674ca9f77e86df96d42ef2cb9764c5c0298e50
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
