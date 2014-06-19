/* global AmCharts, poll */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    ajaxRequest();
  }

  function ajaxRequest(){
    console.log('poll');
    console.log(poll.answers);

    console.log('log');
    // console.log(answers[0].answers);

    // var array = [];
    // array = answers.map(a=>array.push(a.answers));
    // console.log(array);

    // var array = [];
    // var object = {};
    //
    // for(var i = 0; i <= answers.length; i++){
    //   array.push(`{answers: ${poll.answers[i]}}`);
    // }
    //
    // console.log(array);

    // Object {asdgf: 2, sdfg: 2, sdrg: 1, dgfdsf: 1}

    // var object = {};

    console.log('where the loop starts');

    console.log(poll.answers.asdgf);


    // {answer: , count: }
    var data = [];
    for(var i=0;i<Object.keys(poll.answers).length;i++){
      var key = Object.keys(poll.answers)[i];  //grabbing the i'th key in poll.answers

      data.push({answer: key, count: poll.answers[key]});  //look up poll.answers based on the key, we need to use bracket syntax, as that's the only way we can use a variable
    }
    console.log(data);

    makeChart(data);
  }
  //
  // [{
  //     'answer': 'The answer here',
  //     'count': 7252
  // }, {
  //     'answer': 'China',
  //     'count': 3882
  // }, {
  //     'answer': 'Japan',
  //     'count': 1809
  // }]

  function makeChart(data){
    AmCharts.makeChart('chartdiv', {  //#chartdiv
    'type': 'pie',
    	'theme': 'none',
        'titles': [{
            'text': 'Question Answer',
            'size': 16
        }],
        'dataProvider': data,
        'valueField': 'count',
        'titleField': 'answer',
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	}
    });
  }



})();
