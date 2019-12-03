import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../reducers/counter';

const Home = props => {
  const [, setState] = useState('');
  useEffect(() => {
    axios.get('/api/hello').then(res => setState(res.data));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </button>
      </p>

      <p>
        <button onClick={props.decrement}>Decrementing</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </button>
      </p>

      <p>
        <button onClick={() => props.changePage()}>
          Go to about page via redux
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
