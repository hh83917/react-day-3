import React from 'react';

const About = React.createClass({
  render(){
    return (
      <div>About {this.props.params.name}</div>
    )
  }
});

export default About;
