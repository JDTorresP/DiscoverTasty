import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import Avatar from 'react-avatar'; 

class Marker extends Component {
  render() {
    return (
        <div data-tip={this.props.tooltip} className="Marker stateBusy">
          <div className="marker">
            <Avatar googleId="115445798610219700747" className="avatar" round={true} /> 
            <div className="radius"/>
          </div>
          <ReactTooltip place="right" type="dark" effect="float"/>
        </div>
    );
  }

}

export default Marker;
