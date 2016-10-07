import React from 'react'
import ReactDOM from 'react-dom'

class StoryBox extends React.Component {
  render() {

    const topicsList = ['HTML', 'Javascript', 'React'];

    return (
      <div>
        <h3>Stories App</h3>
              <ul>
        {topicsList.map(topic => <li>{topic}</li>)}
      </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <StoryBox />, document.getElementById('app')
);
