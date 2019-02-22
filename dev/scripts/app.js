import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Votes from './votes';

const api = 'https://api.giphy.com/v1/gifs/trending?api_key=eU6it7awA7bVBf0jUIpY9aP89tPJvtHe&limit=25&rating=R';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      visible: 3
    }
    this.loadMore = this.loadMore.bind(this);
    this.removeMore = this.removeMore.bind(this);
  }

  componentDidMount() {
    axios.get(`${api}`, {
    })
      .then((res) => {
        this.setState({
          items: res.data.data
        })
      })
  }

  loadMore(e) {
    e.preventDefault();
    this.setState((currentState) => {
      console.log(currentState.items.length);
      return {
        visible: currentState.visible + 3,
      }
    })
  }

  removeMore(e) {
    e.preventDefault();
    this.setState((currentState) => {
      return {
        visible: currentState.visible - 3
      }
    })
  }

  render() {
    return (
      <div>

        {
          this.state.items
            .slice(0, this.state.visible)
            .map((item, key) => {
              return (
              <div key={key}>
                <h2>{item.title}</h2>
                <Votes key={key + 1}/>
              </div>
              )
            })
        }

        {
          this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore}>load more</button>
        }

        {
          this.state.visible > 3 &&
          <button onClick={this.removeMore}>remove more</button>
        }

      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));