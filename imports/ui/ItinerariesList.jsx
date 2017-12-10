import React, { Component } from 'react';
import propTypes from "prop-types";
import Itinerary from "./Itinerary.jsx";

class ItinerariesList extends Component {
    constructor(props){
        super(props);
        this.state={
            itineraries: this.props.itineraries,
            name: ''
        }
    }

    renderItineraries(){
        console.log("RENDERIZANDO ITINERARIOS");
        console.log(this.state);
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
        const events = [];
        console.log(name)

        //CALL DEL METEOR METHOD PARA CREAR UN ITINERARIO
        console.log('entre funcion');
        
    }

    handleChange(newName){  
        this.setState({
            name:newName
        })
        console.log(this.state.name)
    }

    render(){
        return(
        <div className="container">
            <div className="card card-body py-2 px-2 mb-2">
                <form>
                    <div>
                        <label className="name">Itinerary's name:</label>
                        <input type="email" className="form-control"
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
                {this.state.itineraries ? this.renderItineraries():"You have not created itineraries!"}
            </div>
        </div>);
    }
}
ItinerariesList.propTypes = {
    itineraries: propTypes.array.isRequired
}

export default ItinerariesList;
