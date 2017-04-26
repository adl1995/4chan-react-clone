/*
 * ThreadPage
 *
 * List thread in a board
 */
import $ from 'jquery';
import H1 from 'components/H1';
import React from 'react';
import axios from 'axios';
export default class ThreadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
  	const board = this.props.routeParams.tag;
  	var config = {
  		headers: {'Access-Control-Allow-Origin': 'true'}
	};

	var response = axios.get('https://api.github.com/users/adl1995', {
	  timeout: 30000,
	  headers: {'Access-Control-Allow-Origin': '*'},
	  proxy: {
	    host: '104.236.174.88',
	    port: 3128,
	  },
	}).then(function(response) {
	  console.log('response ' + response);
	  alert(response);
	})
	.catch(function (error) {
	  console.log('' + error); 
	});

	console.log('RSPONSE ' + response);

  // 	axios.get('http://a.4cdn.org/' + board + '/threads.json', {
	 //  proxy: {
	 //      host: '104.236.174.88',
	 //      port: 3128
  //   	}
  // 	})
	 //  .then(function (response) {
	 //    alert(response.data);
	 //    console.log(response.data);
  //   }).catch(function (error) {
		// if (error.response) {
	 //      // The request was made and the server responded with a status code
	 //      // that falls out of the range of 2xx
	 //      console.log(error.response.data);
	 //      console.log(error.response.status);
	 //      console.log(error.response.headers);
	 //    } else if (error.request) {
	 //      // The request was made but no response was received
	 //      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
	 //      // http.ClientRequest in node.js
	 //      console.log(error.request);
	 //    } else {
	 //      // Something happened in setting up the request that triggered an Error
	 //      console.log('Error', error.message);
	 //    }
	 //    console.log(error.config);
  // 	});
    return (
	    <H1>
	      Welcome to the '{board}' thread
	    </H1>
    );
  }
}
