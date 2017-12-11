import React, {Component} from "react";
import PropTypes from "prop-types";
import Map from './map/Map.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';


class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.guidGenerator = this.guidGenerator.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            idInvitation:'Click Button to generate ID',
            name:this.props.name,
            events: [],
             copied: false,
             open: false,
            
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
handleClick(){
    console.log("ENTERRR CLICK");
   let r = this.guidGenerator();
   this.setState({
       idInvitation:r
   })
}

guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
    render() {
        return (
            <div>
                {this.props.name + "   number of restaurants to visit: " + this.state.events.length}
                <RaisedButton label="Add Someone Else" primary={true} fullWidth={true} onClick={()=>this.handleClick()} />
                <TextField
                id="text-field-default"
                fullWidth={true}
                value={this.state.idInvitation}
                />
                <CopyToClipboard text={this.state.idInvitation}
                onCopy={() => this.setState({copied: true})}>
                <RaisedButton label="Copy to clipboard" onClick={this.handleClickOpen} primary={true}/>
                
                </CopyToClipboard>
                <Snackbar
                    open={this.state.open}
                    message="Copied to clipboard!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
                <Map restaurants={this.state.events}/>
            </div>
        );
    }
}

/* Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
} */

export default Itinerary;