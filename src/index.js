import React from 'react';
import { render } from 'react-dom';
import Greeting from './greeting'
import ButtonIncrement from './buttonIncrement'
import CommentListContainer from './commentListContainer'
import './style.css';
import Connect from './connect'
import Loading from './loading'
import Worker from './worker'
import WorkerInfo from './workerInfo'

class App extends React.Component {
  render() {
    const BetterGreeting = Connect(Greeting)
    return (
      <div>
        <ButtonIncrement />
        <BetterGreeting
          style={{ "color": "red", "fontSize": "2em" }}
          className="awesome"
          data-gorrion="Gorrion" //I used that data-prop only to show it's rendered
        />
        <CommentListContainer />
        <WorkerInfo name='Dom' employer='Gorrion'>
          {worker => worker === null
          ? <div> Loading </div>
          : <Worker message={worker} />}
        </WorkerInfo>
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
