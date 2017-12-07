import React, {Component} from "react";
import PropTypes from "prop-types";

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.restaurant.venue.id,   
            name:this.props.restaurant.venue.name,
            address: this.props.restaurant.venue.location.address,
            lat: this.props.restaurant.venue.location.lat,
            lon: this.props.restaurant.venue.location.lng,
            visitas: this.props.restaurant.venue.stats.checkinsCount,
            rating: this.props.restaurant.venue.rating
        };
    }
/*     refrescar() {
        this.setState({
            comments:this.props.restaurant.comments
        }) 
    } */

/*      componentDidMount(){
    
        var quer= "/restaurant/"+this.props.restaurant.id+"/votes";
        console.log(quer);
        
    } */

/*     onSubmit(){
        var quer= "/restaurant/"+this.props.restaurant.id+"/comment"
        fetch(quer, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_mail: this.state.mail,
              text: this.state.text,
              vote: this.state.rating
            })
          });
          this.refrescar();
    } */

   /*  handleEmailChange(e){
        this.setState({email: e.target.value});
     }

    handleText(e){
        this.setState({text: e.target.value});
     }
    handleRating(e){
        this.setState({rating: e.target.value});
    }
 */

    render() {
        console.log(this.props.restaurant.venue.rating);
        return (
            <div className="col-md-3 my-1 text-center">
                <div className="id">ID: {this.props.restaurant.venue.id}</div>
                <div className="name">Name: {this.props.restaurant.venue.name}</div>
                <div className="address">Address: {this.props.restaurant.venue.location.address}</div>
                <div className="latitud"> Lat: {this.props.restaurant.venue.location.lat}</div>
                <div className="longitud">Lon: {this.props.restaurant.venue.location.lng}</div>
                <div className="visitas"> Visitas: {this.props.restaurant.venue.stats.checkinsCount}</div>
                <div className="rating"> Rating: {this.props.restaurant.venue.rating}/10</div>
            </div>
        );
    }
}

/* Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
} */

export default Restaurant;