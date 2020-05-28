import React, {Component} from 'react';

export default class TweetTop extends Component {
  render() {
    let date = new Date(this.props.timestamp);

    return (
      <div>
      <Name name={this.props.name}/> <Handle handle={this.props.handle} /> {date.toDateString()}
      </div>
    );
  }
}

class Name extends Component {
  render() {
    let profileLink = `https://twitter.com/${this.props.handle}`
    return (
      <a href={profileLink} className="username"><strong>{this.props.name}</strong></a>
    );
  }
}

class Handle extends Component {
  render() {
    return (
      <span className="handle">@{this.props.handle}</span>
    );
  }
}
