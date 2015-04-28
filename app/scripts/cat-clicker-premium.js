"use strict"

var counterDisp1 = document.getElementById('clickcounter1');
var photo1 = document.getElementById('catphoto1');


var counter1 = 0;
var counter2 = 0; 

function increment1(){
    counter1++;
    counterDisp1.innerHTML = "The number of clicks: " + counter1;
}

if(photo1) {
    photo1.addEventListener('click', increment1, false);

} 

var counterDisp2 = document.getElementById('clickcounter2');
var photo2 = document.getElementById('catphoto2');
var counter = 0; 


function increment2(){
    counter2++;
    counterDisp2.innerHTML = "The number of clicks: " + counter2;
}

if(photo2) {
    photo2.addEventListener('click', increment2, false);

} 
