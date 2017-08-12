/*
 * ThreadPage
 *
 * List threads in a board
 */
import $ from 'jquery';
import H1 from 'components/H1';
import React from 'react';
import axios from 'axios';
import Fetch from 'react-fetch'
export default class ThreadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

// Since state and props are static,
// there's no need to re-render this component
shouldComponentUpdate() {
return false;
}

render() {
	const board = this.props.routeParams.tag;

	
	axios.get('https://a.4cdn.org/a/threads.json', {
		}).then(function (response) {
			console.log('response is : ' + JSON.stringify(response.data[0]['threads']));
		}).catch(function (error) {
			if (error.response) {
			  console.log(error.response.headers);
			} 
			else if (error.request) {
			  console.log(error.request);
			} 
			else {
			  console.log(error.message);
			}
		console.log(error.config);
	});
	
return (
	<H1>
	  Welcome to the '{board}' thread
	</H1>
	);
  }
}
