import React, {Component} from "react";
import CardHeader from './CardHeader.jsx';
import CardBody from './CardBody.jsx';
class Card extends Component {
  render() {
    return (
      <article className="card" onClick={()=>{this.props.click(this.props.details)}}>
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}
export default Card;