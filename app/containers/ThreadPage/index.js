/*
 * ThreadPage
 *
 * List threads in a board
 */
import $ from 'jquery';
import H1 from 'components/H1';
import List from 'components/List';
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
	
	var threads = axios.get('https://a.4cdn.org/a/threads.json', {
		}).then(function (response) {
			// console.log('response is : ' + JSON.stringify(response.data[0]['threads']));
			return response.data[0]['threads'];
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
	var _threads = [{"page":1,"threads":[{"no":1,"last_modified":1489416085},{"no":363729,"last_modified":1502678003},{"no":363726,"last_modified":1502677671},{"no":363735,"last_modified":1502677652},{"no":363728,"last_modified":1502677609},{"no":363158,"last_modified":1502677398},{"no":363633,"last_modified":1502677054},{"no":363558,"last_modified":1502676827},{"no":363568,"last_modified":1502676584},{"no":363707,"last_modified":1502675121},{"no":363327,"last_modified":1502674159},{"no":363506,"last_modified":1502673916},{"no":363485,"last_modified":1502673809},{"no":363714,"last_modified":1502673849},{"no":363713,"last_modified":1502673474}]},{"page":2,"threads":[{"no":363624,"last_modified":1502673170},{"no":363709,"last_modified":1502673140},{"no":363504,"last_modified":1502672537},{"no":363695,"last_modified":1502672429},{"no":363703,"last_modified":1502672305},{"no":363689,"last_modified":1502671689},{"no":363698,"last_modified":1502670932},{"no":362907,"last_modified":1502670759},{"no":363405,"last_modified":1502670650},{"no":363692,"last_modified":1502670261},{"no":363533,"last_modified":1502669806},{"no":363680,"last_modified":1502669291},{"no":363684,"last_modified":1502668532},{"no":363682,"last_modified":1502669030},{"no":363638,"last_modified":1502668179}]},{"page":3,"threads":[{"no":363678,"last_modified":1502668073},{"no":363675,"last_modified":1502666972},{"no":363608,"last_modified":1502666956},{"no":363673,"last_modified":1502666950},{"no":363602,"last_modified":1502666937},{"no":363401,"last_modified":1502666337},{"no":363437,"last_modified":1502666189},{"no":363607,"last_modified":1502666076},{"no":363579,"last_modified":1502665180},{"no":363564,"last_modified":1502664951},{"no":363637,"last_modified":1502664887},{"no":363650,"last_modified":1502663416},{"no":363640,"last_modified":1502662481},{"no":363647,"last_modified":1502662440},{"no":363270,"last_modified":1502662289}]},{"page":4,"threads":[{"no":363636,"last_modified":1502661653},{"no":363621,"last_modified":1502661166},{"no":363588,"last_modified":1502660908},{"no":363629,"last_modified":1502660814},{"no":363596,"last_modified":1502660606},{"no":363545,"last_modified":1502659738},{"no":363484,"last_modified":1502659715},{"no":363600,"last_modified":1502659580},{"no":363605,"last_modified":1502659273},{"no":362970,"last_modified":1502659131},{"no":363613,"last_modified":1502658997},{"no":363601,"last_modified":1502657883},{"no":363598,"last_modified":1502657615},{"no":363597,"last_modified":1502657325},{"no":363526,"last_modified":1502657314}]},{"page":5,"threads":[{"no":362758,"last_modified":1502657308},{"no":363277,"last_modified":1502656953},{"no":363589,"last_modified":1502656930},{"no":363587,"last_modified":1502656908},{"no":363469,"last_modified":1502656723},{"no":363281,"last_modified":1502667355},{"no":363576,"last_modified":1502655725},{"no":363078,"last_modified":1502655654},{"no":363304,"last_modified":1502655483},{"no":363572,"last_modified":1502655316},{"no":363535,"last_modified":1502655071},{"no":363306,"last_modified":1502655023},{"no":363561,"last_modified":1502654650},{"no":363539,"last_modified":1502654072},{"no":363353,"last_modified":1502652829}]},{"page":6,"threads":[{"no":363478,"last_modified":1502652668},{"no":363523,"last_modified":1502652008},{"no":363370,"last_modified":1502651812},{"no":363482,"last_modified":1502650598},{"no":363019,"last_modified":1502650508},{"no":363524,"last_modified":1502649488},{"no":363518,"last_modified":1502649281},{"no":363492,"last_modified":1502649092},{"no":363208,"last_modified":1502648658},{"no":363214,"last_modified":1502644294},{"no":363508,"last_modified":1502644307},{"no":363503,"last_modified":1502643730},{"no":363502,"last_modified":1502643722},{"no":363088,"last_modified":1502644369},{"no":363467,"last_modified":1502642149}]},{"page":7,"threads":[{"no":363480,"last_modified":1502641616},{"no":363474,"last_modified":1502641565},{"no":358604,"last_modified":1502640162},{"no":363323,"last_modified":1502639635},{"no":363325,"last_modified":1502638596},{"no":363068,"last_modified":1502638091},{"no":363254,"last_modified":1502638035},{"no":363292,"last_modified":1502636787},{"no":363456,"last_modified":1502638703},{"no":363445,"last_modified":1502636216},{"no":363454,"last_modified":1502636019},{"no":363453,"last_modified":1502635934},{"no":363451,"last_modified":1502635535},{"no":363331,"last_modified":1502633905},{"no":363411,"last_modified":1502633821}]},{"page":8,"threads":[{"no":363402,"last_modified":1502632454},{"no":363357,"last_modified":1502632104},{"no":363433,"last_modified":1502631487},{"no":363379,"last_modified":1502629516},{"no":363052,"last_modified":1502628968},{"no":363422,"last_modified":1502628210},{"no":363259,"last_modified":1502626714},{"no":363416,"last_modified":1502626444},{"no":363162,"last_modified":1502625438},{"no":363272,"last_modified":1502622359},{"no":362481,"last_modified":1502621899},{"no":363366,"last_modified":1502620919},{"no":363365,"last_modified":1502620478},{"no":362597,"last_modified":1502618907},{"no":362766,"last_modified":1502618741}]},{"page":9,"threads":[{"no":363351,"last_modified":1502620690},{"no":363113,"last_modified":1502617654},{"no":363324,"last_modified":1502617480},{"no":363280,"last_modified":1502616868},{"no":363333,"last_modified":1502616823},{"no":363318,"last_modified":1502636396},{"no":363057,"last_modified":1502612246},{"no":363273,"last_modified":1502612162},{"no":362860,"last_modified":1502611081},{"no":362153,"last_modified":1502609300},{"no":363274,"last_modified":1502606483},{"no":363161,"last_modified":1502605790},{"no":363289,"last_modified":1502605615},{"no":363287,"last_modified":1502605337},{"no":363252,"last_modified":1502605244}]},{"page":10,"threads":[{"no":363284,"last_modified":1502605243},{"no":362408,"last_modified":1502603340},{"no":363267,"last_modified":1502601457},{"no":362771,"last_modified":1502601357},{"no":363234,"last_modified":1502600483},{"no":363149,"last_modified":1502600084},{"no":363202,"last_modified":1502600634},{"no":362819,"last_modified":1502598803},{"no":362937,"last_modified":1502598689},{"no":363229,"last_modified":1502598626},{"no":363024,"last_modified":1502598304},{"no":363186,"last_modified":1502598015},{"no":363222,"last_modified":1502596772},{"no":363183,"last_modified":1502595667},{"no":363136,"last_modified":1502594541}]},{"page":11,"threads":[{"no":363160,"last_modified":1502594354}]}];
	var threads = _threads[0]['threads']
	console.log('response is : ' + JSON.stringify(threads));
return (
   // <H1>
   //   Welcome to the '{threads[0]["last_modified"]}' thread
   // </H1>
   <div>
       {threads.map(thread => <div> {thread['no']} </div>)} 
   </div>
    );
  }
}
