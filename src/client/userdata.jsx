import React, {Component} from 'react';

export default class UserData extends Component {
  render() {
    return (
      <DisplayName name={this.props.displayname}/>
    );
  }
}

class DisplayName extends Component {
  render() {
    return(
      <p>{this.props.name}</p>
    );
  }
}
