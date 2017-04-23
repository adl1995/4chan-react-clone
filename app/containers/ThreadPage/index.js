/*
 * ThreadPage
 *
 * List thread in a board
 */
import React from 'react';
import H1 from 'components/H1';

export default class ThreadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
  	const board = this.props.routeParams.tag;
    return (
	    <H1>
	      Welcome to the {board} thread
	    </H1>
    );
  }
}
