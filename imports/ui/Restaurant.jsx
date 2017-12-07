import React, {Component} from "react";
import PropTypes from "prop-types";

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.restaurant.id,   
            name:this.props.restaurant.name,
            address: this.props.restaurant.location.address,
            lat: this.props.restaurant.location.lat,
            lon: this.props.restaurant.location.lng,
            visitas:this.props.restaurant.stats.checkinsCount
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
        return (
            <div className="col-md-3 my-1 text-center">
                <div className="id">ID: {this.props.restaurant.id}</div>
                <div className="name">Name: {this.props.restaurant.name}</div>
                <div className="address">Address: {this.props.restaurant.location.address}</div>
                <div className="latitud"> Lat: {this.props.restaurant.location.lat}</div>
                <div className="longitud">Lon: {this.props.restaurant.location.lng}</div>
                <div className="# de visitas"> Visits: {this.props.restaurant.stats.checkinsCount}</div>
            </div>
        );
    }
}

/* Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
} */

export default Restaurant;