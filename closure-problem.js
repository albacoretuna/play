"use strict"

document.body.innerHTML = '';
document.body.style.background = 'green';

var nums = [1,2,3];
for(var i= 0; i < 3; i++) {

    var num = nums[i];

    var elem = document.createElement('div');
    elem.textContent = num;

    elem.addEventListener('click', (function(numCopy){
        return function() {
         alert(numCopy);
        };
    })(num));
    

 
    document.body.appendChild(elem);
}



