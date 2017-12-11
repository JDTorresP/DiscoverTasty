import React, { Component } from 'react';
import propTypes from "prop-types";
import Itinerary from "./Itinerary.jsx";
import { Meteor } from 'meteor/meteor';
import "../api/itineraries.js";


class ItinerariesList extends Component {
    constructor(props){
        super(props);
        this.state={
            itineraries: this.props.itineraries,
            name: ''
        }
    }

    renderItineraries(){
        return this.props.itineraries.map((t,i)=>{
        return (<div className="row"><Itinerary name={"Itinerario"+i} key={i}/></div>);
        });
    }

    renderNew(){
        return 
    }

    handleSubmit() {
        const name = this.state.name;
        //EVENTS DETERMINARÁ LOS EVENTOS DEL ITINERARIO, ES DECIR, LAS VISITAS A LOS RESTAURANTES
        console.log(name)
        if(!this.isEmpty(name) && !this.isBlank(name))
        {
            Meteor.call('itineraries.insert', name, Meteor.userId(), (err, response)=>{
                if (err) throw err;
              //  console.log(response);
                console.log("insertó el itinerario");
                console.log(response);
              });
        }
        else{
            alert("Please, enter a valid name!");
        }
        //CALL DEL METEOR METHOD PARA CREAR UN ITINERARIO
    }

    isEmpty(str) {
        return (!str || 0 === str.length);
    }

    isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

    handleChange(newName){  
        this.setState({
            name:newName
        })
    }

    render(){
        return(
        <div className="container">
            <div className="card card-body px-2">
                <form>
                    <div>
                        <label className="name">Itinerary's name:</label>
                        <input className="form-control"
                            placeholder="Insert a name"
                            id="name" onChange={(e)=>{
                                this.handleChange(e.target.value)
                            }}
                            required/>
                    </div>
                    <div>
                        <button
                            className="btn btn-lg btn-primary my-2"
                            type="submit"
                            onClick={()=>this.handleSubmit()}>Create Itinerary</button>
                    </div>
                </form>
            </div>
            <div className="itineraries">
                {this.props.itineraries ? this.renderItineraries():"You have not created itineraries!"}
            </div>
        </div>);
    }
}
ItinerariesList.propTypes = {
    itineraries: propTypes.array.isRequired
}

export default ItinerariesList;