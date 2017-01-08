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
        console.log(poster);
        document.getElementById("q4").innerHTML = "<img src=" +poster+ " />" ;
        // console.log(poster)
    });

//

//     $xhr.fail(function(err) {
//         console.log(err);
//     });
//
//     var $xhr = $.getJSON('http://www.omdbapi.com/?t=the+martian');
//
//     $xhr.done(function(data) {
//         if ($xhr.status !== 200) {
//             return;
//         }
//
//         console.log(data);
//     });
//
//     $xhr.fail(function(err) {
//         console.log(err);
//     });
//
//     var $xhr = $.getJSON('http://www.omdbapi.com/?t=fantastic+beasts');
//
//     $xhr.done(function(data) {
//         if ($xhr.status !== 200) {
//             return;
//         }
//
//         console.log(data);
//     });
//
//     $xhr.fail(function(err) {
//         console.log(err);
//     });
//
//
//
//
//
//
});
