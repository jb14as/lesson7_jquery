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
