
var cam = document.getElementById('mainCamera');
var plane = document.getElementById('card');
var sc = document.getElementById('scene');
var goto_home = document.getElementById('goto_home');
var sky = document.getElementById('sky');
var nextPage = document.getElementById('nextPage');

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
signaling('goto_title');
});


nextPage.addEventListener('click', function(){
//signaling('triggerAnimGallery');
//console.log('asas');
});


cam.addEventListener('animationstart', function(){
});
cam.addEventListener('animationend', function(){
//hideGallery();
//animateGallery();

});

sc.addEventListener('loaded', function(){
createGallery();
});






function signaling(str)
{
cam.emit(str);
}
function hideGallery()
{
var gallerygg = document.getElementById('card-gallery');
gallerygg.setAttribute('visible','false');	
}

function createGallery()
{

var gallery  = document.createElement('a-entity');
gallery.setAttribute('id','card-gallery');
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
sc.appendChild(gallery);
gallery.appendChild(card);
cardNumber++;


card.addEventListener('click', function(evt){
var gallerygg = document.getElementById('card-gallery');

if(gallerygg.getAttribute('visible') == true){
console.log(evt.detail.target.id);
if(evt.detail.target.id % 2 == 0)
	{
	signaling("goto_detail");
	sky.setAttribute('color','blue');
	}
else
	{
	sky.setAttribute('color','yellow');
	}

}	

});


card.addEventListener('mouseenter', function(evt){
//alert('sdsdsdsds');
});
}
posY = posY - 1.5;
}
var cardAnim  = document.createElement('a-animation');
cardAnim.setAttribute('id','cardAnim');
}


function animateGallery()
{
	var cardAnim = document.getElementById('cardAnim');
	cardAnim.setAttribute('begin','triggerAnimGallery');
	cardAnim.setAttribute('attribute','rotation');
	cardAnim.setAttribute('from','0 0 0');
	cardAnim.setAttribute('to','180 180 180');
}


function checkID()
{
var initCount = 0;

for (var i = 0; i < rowNumber; i++) {
for (var j = 0; j < columnNumber; j++) {
alert(cards[initCount].id+'gg');
initCount++;
}
}

}

/*

var box = document.getElementById('box');
box.addEventListener('click', function(){
box.parentNode.removeChild(box);
});
*/