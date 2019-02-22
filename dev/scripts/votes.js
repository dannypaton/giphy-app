import React from 'react';

class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    }
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up(e) {
    e.preventDefault();
    this.setState({
      vote: this.state.vote + 1
    })
  }

  down(e) {
    e.preventDefault();
    this.setState({
      vote: this.state.vote - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.up}>upvote</button>
        <button onClick={this.down}>downvote</button>
        <span>{this.state.vote}</span>
      </div>
    )
  }
}

export default Votes;