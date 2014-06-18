(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#checkboxes').on('click','#submitResponse', submitResponse);
  }

  function submitResponse(){
    var myArray = [];
    $(':checkbox:checked').each(function(){
      var value = $(this).attr('data');
      myArray.push(value);
    });
    console.log('user response-------');
    console.log(myArray);
  }

})();
