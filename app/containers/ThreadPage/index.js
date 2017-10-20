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
		crossdomain: true
		}).then(function (response) {
			// return response.data[0]['threads'];
			var threads = response.data[0]['threads'];
			console.log('response is : ' + JSON.stringify(threads));
			var prettyMs = require('pretty-ms');
			return (
			   <H1>
			     Welcome to the '{threads[0]["last_modified"]}' thread
			   </H1>
			    );
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
// 	var _threads = [{"page":1,"threads":[{"no":161106150,"last_modified":1502684899},{"no":161106513,"last_modified":1502684896},{"no":161079368,"last_modified":1502684886},{"no":161072591,"last_modified":1502684886},{"no":161069620,"last_modified":1502684884},{"no":161104220,"last_modified":1502684878},{"no":161083891,"last_modified":1502684877},{"no":161021934,"last_modified":1502684876},{"no":161091111,"last_modified":1502684871},{"no":160992589,"last_modified":1502684861},{"no":161090043,"last_modified":1502684860},{"no":161105814,"last_modified":1502684860},{"no":161092101,"last_modified":1502684856},{"no":161105749,"last_modified":1502684849},{"no":161107357,"last_modified":1502684856}]},{"page":2,"threads":[{"no":161098321,"last_modified":1502684843},{"no":161057598,"last_modified":1502684839},{"no":161089437,"last_modified":1502684829},{"no":161096321,"last_modified":1502684819},{"no":161085954,"last_modified":1502684815},{"no":161100909,"last_modified":1502684810},{"no":161059207,"last_modified":1502684809},{"no":161106032,"last_modified":1502684807},{"no":161099984,"last_modified":1502684802},{"no":161097409,"last_modified":1502684785},{"no":161098008,"last_modified":1502684782},{"no":161101854,"last_modified":1502684778},{"no":161091917,"last_modified":1502684774},{"no":161107916,"last_modified":1502684889},{"no":161103274,"last_modified":1502684769}]},{"page":3,"threads":[{"no":161105457,"last_modified":1502684770},{"no":161050848,"last_modified":1502684766},{"no":161100399,"last_modified":1502684765},{"no":161086445,"last_modified":1502684761},{"no":161077244,"last_modified":1502684756},{"no":161099744,"last_modified":1502684755},{"no":161099462,"last_modified":1502684746},{"no":161070043,"last_modified":1502684737},{"no":161107831,"last_modified":1502684734},{"no":161079081,"last_modified":1502684728},{"no":161100690,"last_modified":1502684728},{"no":161090422,"last_modified":1502684711},{"no":161066152,"last_modified":1502684704},{"no":161082592,"last_modified":1502684696},{"no":161107174,"last_modified":1502684764}]},{"page":4,"threads":[{"no":161045895,"last_modified":1502684675},{"no":161043164,"last_modified":1502684655},{"no":161107338,"last_modified":1502684640},{"no":161106102,"last_modified":1502684617},{"no":161052186,"last_modified":1502684593},{"no":161107117,"last_modified":1502684572},{"no":161103369,"last_modified":1502684564},{"no":161081234,"last_modified":1502684546},{"no":161102408,"last_modified":1502684542},{"no":161107699,"last_modified":1502684530},{"no":161107270,"last_modified":1502684522},{"no":161106378,"last_modified":1502684456},{"no":161105090,"last_modified":1502684432},{"no":161086543,"last_modified":1502684422},{"no":161107527,"last_modified":1502684408}]},{"page":5,"threads":[{"no":161083596,"last_modified":1502684381},{"no":161101531,"last_modified":1502684836},{"no":161095621,"last_modified":1502684357},{"no":161107689,"last_modified":1502684344},{"no":161075097,"last_modified":1502684335},{"no":161107248,"last_modified":1502684334},{"no":161107671,"last_modified":1502684555},{"no":161104300,"last_modified":1502684301},{"no":161107655,"last_modified":1502684876},{"no":161100116,"last_modified":1502684215},{"no":161106286,"last_modified":1502684209},{"no":161086131,"last_modified":1502684195},{"no":161084984,"last_modified":1502684138},{"no":161105907,"last_modified":1502684131},{"no":161098294,"last_modified":1502684638}]},{"page":6,"threads":[{"no":161074665,"last_modified":1502684075},{"no":161100668,"last_modified":1502684055},{"no":161103368,"last_modified":1502684028},{"no":161103677,"last_modified":1502684009},{"no":161100249,"last_modified":1502684009},{"no":161095626,"last_modified":1502684000},{"no":161092804,"last_modified":1502683982},{"no":161092135,"last_modified":1502683971},{"no":161107247,"last_modified":1502684154},{"no":161102605,"last_modified":1502683956},{"no":161106334,"last_modified":1502683941},{"no":161103054,"last_modified":1502683904},{"no":161077752,"last_modified":1502683894},{"no":161093015,"last_modified":1502683887},{"no":161105394,"last_modified":1502683866}]},{"page":7,"threads":[{"no":161077591,"last_modified":1502683831},{"no":161106014,"last_modified":1502684262},{"no":161104747,"last_modified":1502683796},{"no":161099799,"last_modified":1502683777},{"no":161107384,"last_modified":1502683769},{"no":161103183,"last_modified":1502683762},{"no":161107303,"last_modified":1502683761},{"no":161106003,"last_modified":1502683685},{"no":161098530,"last_modified":1502683650},{"no":161095195,"last_modified":1502683645},{"no":161107313,"last_modified":1502683637},{"no":161098233,"last_modified":1502683598},{"no":161099897,"last_modified":1502683573},{"no":161092553,"last_modified":1502683530},{"no":161096806,"last_modified":1502683499}]},{"page":8,"threads":[{"no":161075556,"last_modified":1502683496},{"no":161099304,"last_modified":1502683469},{"no":161094974,"last_modified":1502683408},{"no":161095319,"last_modified":1502683309},{"no":161056170,"last_modified":1502683227},{"no":161101027,"last_modified":1502684885},{"no":161102071,"last_modified":1502683119},{"no":161099480,"last_modified":1502683102},{"no":161106910,"last_modified":1502683744},{"no":161106886,"last_modified":1502683152},{"no":161106922,"last_modified":1502682906},{"no":161100730,"last_modified":1502682851},{"no":161088768,"last_modified":1502684501},{"no":161104924,"last_modified":1502682763},{"no":161085764,"last_modified":1502682670}]},{"page":9,"threads":[{"no":161103409,"last_modified":1502682627},{"no":161072143,"last_modified":1502682625},{"no":161106064,"last_modified":1502682612},{"no":160965718,"last_modified":1502682604},{"no":161106770,"last_modified":1502682604},{"no":161104195,"last_modified":1502682523},{"no":161104563,"last_modified":1502682451},{"no":161099450,"last_modified":1502682261},{"no":161091409,"last_modified":1502682255},{"no":161106040,"last_modified":1502682242},{"no":161001622,"last_modified":1502682191},{"no":161106530,"last_modified":1502682768},{"no":161106465,"last_modified":1502682073},{"no":161099348,"last_modified":1502684818},{"no":161100974,"last_modified":1502681631}]},{"page":10,"threads":[{"no":161103029,"last_modified":1502681463},{"no":161055652,"last_modified":1502681419},{"no":161102469,"last_modified":1502681325},{"no":161086430,"last_modified":1502681306},{"no":161105962,"last_modified":1502681226},{"no":161103003,"last_modified":1502681144},{"no":161101953,"last_modified":1502681128},{"no":161095634,"last_modified":1502681123},{"no":161103602,"last_modified":1502680815},{"no":161102384,"last_modified":1502680812},{"no":161101008,"last_modified":1502680666},{"no":161029708,"last_modified":1502684772},{"no":161094981,"last_modified":1502680428},{"no":161102957,"last_modified":1502680269},{"no":161067151,"last_modified":1502684671}]}];
// 	var threads = _threads[0]['threads']
// 	var prettyMs = require('pretty-ms');

	
// 	var fetch_thread = function fetchThread(thread_id) {
// 		return axios.get('https://a.4cdn.org/a/thread/' + thread_id + '.json', {
// 		}).then(function (response) {
// 			console.log('thread data is : ' + JSON.stringify(response.data['posts'][0]['com']));
// 			return response.data['posts'][0]['com'];
// 		});
// 	}

// 	var thread_ids = [161106150, 161106513, 161079368, 161072591, 161069620, 161104220, 161083891, 161021934, 161091111, 160992589, 161090043, 161105814, 161092101, 161105749, 161107357];
// 	thread_ids.map(fetch_thread);
// 	console.log('response is : ' + JSON.stringify(threads));
// return (
//    // <H1>
//    //   Welcome to the '{threads[0]["last_modified"]}' thread
//    // </H1>
//    <div>
//        {threads.map(thread => <div> No. {thread['no']}, Last modified {prettyMs(thread['last_modified'])} ago </div>)}
//        // {thread_ids.map(fetch_thread, id => <div>{id}</div>)} 

//    </div>
//     );
  }
}
