/*
Program Name: Recipe Display Application
Author: Jack Bartolucci
Date: july 19, 2016
Filename: script.js

*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);



function display2(event) {
 $(event.currentTarget).next().animate( {height: "toggle"}, "slow");
}

//$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
     $(this).css("background-color", "yellow");
 }, function(){
    $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);

