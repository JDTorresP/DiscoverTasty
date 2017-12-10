import React, {Component} from "react";
import ButtonCard from './ButtonCard.jsx';
class CardBody extends Component {

   constructor() {
    super();
    this.state = {
      msg:''
    }
    this.getDate= this.getDate.bind(this);
  }

  componentDidMount() {
    this.getDate();
  }
  
  getDate(){
    let d = new Date();
    let resp = "Get On: "+"/"+d.getMonth()+"/"+d.getFullYear();
    this.setState({
      msg:resp
    });
  }
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.state.msg}</p>
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <ButtonCard />
      </div>
    )
  }
}
export default CardBody;