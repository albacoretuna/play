"use strict"

var counterDisp1 = document.getElementById('clickcounter1');
var photo1 = document.getElementById('catphoto1');

var cats = {
    name:['Cat One','cat Two','cat three','cat four','cat five'],
    totalClicks: [0,0,0,0,0],
    photoUrl:[
    'https://lh3.ggpht.com/AFZIKl2kWlgLiij6eJRA_utASfg_BjNIcYmXmthEG0MKmpsMoFx2i1TVt3ZwQMZiQmE=w300', 
    'http://www.catchannel.com/images/older-cat-comfort.jpg',
    'http://www.catchannel.com/images/british-shorthair-cats-dogs.jpg',
    'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=1870258',
    'http://assets.dogtime.com/asset/image/4fa005c186cf65206a0005e6/max_300_cat-at-scratching-post.jpg']};


var counter1 = 0;
var counter2 = 0; 

document.querySelector('#cat-display').innerHTML = "<img src="+cats.photoUrl[0]+" />";

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
