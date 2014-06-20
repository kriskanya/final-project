/* global AmCharts, poll */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeDataForChart();
  }

  function makeDataForChart(){
    var data = [];
    for(var i = 0; i < Object.keys(poll.answers).length ; i++){
      var key = Object.keys(poll.answers)[i];  //grabbing the i'th key in poll.answers
      data.push({answer: key, count: poll.answers[key]});  //look up poll.answers based on the key, we need to use bracket syntax, as that's the only way we can use a variable
    }

    makeChart(data);    //now that we have the data, use it to create a chart
    /* poll object looks like this:
      [{
        "answer": "blue",
        "count": 7252
      }]
    */
  }

  function makeChart(data){
    AmCharts.makeChart('chartdiv', {  //#chartdiv
    'type': 'pie',
    	'theme': 'none',
        'titles': [{
            'text': `${poll.title}`,
            'size': 16
        }],
        'dataProvider': data,
        'valueField': 'count',   //
        'titleField': 'answer',  //
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
