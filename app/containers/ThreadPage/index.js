/*
 * ThreadPage
 *
 * List thread in a board
 */
import React from 'react';

export default class ThreadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <h1>Test</h1>
    );
  }
}
