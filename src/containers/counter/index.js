import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  decrement
} from './actions'

const Counter = props => (
  <div>
    <h1>Counter</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
    </p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counterState.count,
  isIncrementing: state.counterState.isIncrementing,
  isDecrementing: state.counterState.isDecrementing,
  message: state.counterState.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      increment,
      decrement
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)