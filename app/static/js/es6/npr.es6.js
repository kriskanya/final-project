/* global poll */
/* jshint camelcase: false */


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    callNPRSearch();
  }

  function callNPRSearch(){

    var tag = poll.tags.split(',');
    tag = tag[0].trim();

    $.ajax({url: `http://api.npr.org/query?searchTerm=${tag}&apiKey=MDA4NDgxNjc1MDEzMjEzMDM3MDQ1N2IzYg001&output=JSON`,
      type: 'get',
      dataType: 'json',
      // data: {searchTerm: 'obama'},
      success: response=>{

        //appends NPR stories and their links to the #nprStories li
        for(var i = 0; i < response.list.story.length; i++){
          var $a = $('<a>');
          var $li = $('<li>');
          $li.text(response.list.story[i].title.$text);
          $a.append($li);
          $a.attr('href', response.list.story[i].link[0].$text);

          $('#nprStories').append($a);
        }
      },
      error:(a,b,c)=>{
        console.log('error a');
        console.log(a);
        console.log('error b');
        console.log(b);
        console.log('error c');
        console.log(c);
      }
    });
  }



    //MDA4NDgxNjc1MDEzMjEzMDM3MDQ1N2IzYg001




    // $.ajax({url: 'https://api.twitter.com/oauth2/token',
    //   type:'post',
    //   dataType: 'json',
    //   headers: {'Authorization': 'Basic c2ZudW85U1RPQmh2WEZObDYyWGFqMHRVdTplMWJFSVNPVXNFZFF5eG1BeXJxSnN1cVZGQkplVll2Ymx1V3A4YjNFWjk2UDAwejFRWg==',
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    //   data: '{grant_type: client_credentials}',
    //   success: response=>{
    //     console.log(response);
    //   }
    // });

  // bearer token: sfnuo9STOBhvXFNl62Xaj0tUu:e1bEISOUsEdQyxmAyrqJsuqVFBJeVYvbluWp8b3EZ96P00z1QZ
  // base64: c2ZudW85U1RPQmh2WEZObDYyWGFqMHRVdTplMWJFSVNPVXNFZFF5eG1BeXJxSnN1cVZGQkplVll2Ymx1V3A4YjNFWjk2UDAwejFRWg==




})();
