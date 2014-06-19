/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#checkboxes').on('click','#submitResponse', submitResponse);
  }

  function submitResponse(){
    var myArray = [];
    $(':checkbox:checked').each(function(){
      var value = $(this).attr('data');  //pushes the answers the user selected into the array
      myArray.push(value);
    });

    var pollId = $('#pId').attr('data');

    $.ajax({
      url: '/polling/answer',
      type: 'post',
      dataType: 'JSON',
      data: {answers: myArray, pollId: pollId},
      success: response=>{
        //you cannot 'redirect' from an ajax call (in the route), so you must do it in the browser-code
        window.location = `/polling/${pollId}/show`;
    }});
  }

})();
