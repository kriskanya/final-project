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
    
    $.ajax({
      url: `/polling/${userId}/answer`,
      type: 'post',
      data: {answers: myArray},
      dataType: 'JSON',
      success: response=>{
        console.log(response);
    }});

  }

})();
