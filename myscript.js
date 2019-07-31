$(document).ready(function() {

  var Booleandisc = "https://flynn.boolean.careers/exercises/api/array/music";
  var discArr = [];

  $.ajax(
    {
      url : Booleandisc,
      method : "GET",
      success : function(data) {

        var compilation = data.response;
        console.log(compilation);

        for (var i = 0; i < compilation.length; i++) {

          var disc = compilation[i];
          console.log(disc);

          var source = $("#template").html();
          var template = Handlebars.compile(source);

          var context = {
            poster : disc.poster,
            title : disc.title,
            author : disc.author,
            year : disc.year
          };
          var html = template(context);

          $(".cds-container").append(html);

        }


      },
      error : function(){
        alert("no connection");
      }

  })

});
