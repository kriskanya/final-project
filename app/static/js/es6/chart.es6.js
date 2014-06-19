/* global AmCharts */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    ajaxRequest();
  }

  function ajaxRequest(){
    // var pollId = $('#pId').attr('data');
    // console.log('poll idddd----');
    // console.log(pollId);

    var myArray = [];
    $('#pollData').each(function(){
      var value = $(this).attr('data');
      myArray.push(value);
    });

    console.log('user answerres......');
    console.log(myArray);

    // $.ajax({url: '/polling/${pollId}/show',
    // type: 'get',
    // dataType: 'JSON',
    // data: {pollId:pollId},
    // // {pollId: pollId}
    // success: response=>{
    //   console.log(response);
    //   makeChart(response);
    // }});
  }

  function makeChart(response){
    AmCharts.makeChart('chartdiv', {  //#chartdiv
    'type': 'pie',
      'theme': 'none',
        'titles': [{
            'text': 'Visitors countries',
            'size': 16
        }],
        'dataProvider': response,  //response from ajax
        'valueField': 'visits',  //values
        'titleField': 'country',
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
