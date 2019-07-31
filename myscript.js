$(document).ready(function() {

  var Booleandisc = "https://flynn.boolean.careers/exercises/api/array/music";
  var discArr = [];

  $.ajax(
    {
      url : Booleandisc,
      method : "GET",
      success : function(data) {

        var disc = data.response;
        console.log(disc);
      }

  })

});
