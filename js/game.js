
var cam = document.getElementById('mainCamera');
var plane = document.getElementById('card');
var sc = document.getElementById('scene');
var goto_home = document.getElementById('goto_home');
var sky = document.getElementById('sky');


var cards = [];
var names = ['monumenkapalselam','tugupahlawan','foodjunction','suroboyocarnival'];
var posX='-1';
var posY='4.5';
var posZ='-7';
var rowNumber = 4;
var columnNumber = 5;
var cardNumber = 0;
var animating = false;


goto_home.addEventListener('click', function(){
cam.emit('goto_title');
});

cam.addEventListener('animationstart', function(){
});

cam.addEventListener('animationend', function(){

});

sc.addEventListener('loaded', function(){
//alert('sasas');
for (var i = 0; i < rowNumber; i++) {
for (var j = 0; j < columnNumber; j++) {
var card  = document.createElement('a-plane');
card.setAttribute('position',{x:(-6+(j*3)), y:posY, z:posZ});
card.setAttribute('scale','2 1 1');
card.setAttribute('id',cardNumber);
card.setAttribute('class','clickable');
card.setAttribute('name',names[cardNumber]);
card.setAttribute('src','#'+names[cardNumber]);
cards.push(card);
sc.appendChild(card);
cardNumber++;
card.addEventListener('click', function(evt){
console.log(evt.detail.target.id);
if(evt.detail.target.id % 2 == 0)
sky.setAttribute('color','blue');
else
sky.setAttribute('color','yellow');

});
}
posY = posY - 1.5;
}
});


function checkID()
{
for (var j = 0; j < 5; j++) {
alert(cards[j].id+'gg');
//console.log(cards[j].position);
}	
}
/*

var box = document.getElementById('box');
box.addEventListener('click', function(){
box.parentNode.removeChild(box);
});
*/