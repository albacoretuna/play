"use strict"

var counterDisp = document.getElementById('clickcounter');
var photo = document.getElementById('photo');
var counter = 0; 


function increment(){
   counter++;
   counterDisp.innerHTML = "The number of clicks: " + counter;

}

if(photo) {
photo.addEventListener('click', increment, false);

} 
