$(document).ready(function() {


  // $(h1).click(function() {
  //     $(h1).css("color", "red");
  //   });


    // $('.changeColor').click(function(){
    //   $(".l3").css( 'color' , '#8A2BE2');
    // });
    //

    var $xhr = $.getJSON('http://www.omdbapi.com/?t=Deadpool');

    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        console.log(data.Poster);
        // var poster = "";
        poster = data.Poster;
        title = data.Title;
        plot = data.Plot;
        console.log(poster);
        document.getElementById("q4").innerHTML = "<img src=" +poster+ " />" ;
        console.log(data.Title);
        document.getElementById("q5").innerHTML = title;
        console.log(data.Plot);
        document.getElementById("q6").innerHTML = plot
  });


    });
//
//
//
//
//
//
