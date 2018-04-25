var cam 			= document.getElementById('mainCamera');
var plane 			= document.getElementById('card');
var sc 				= document.getElementById('scene');
var goto_home 		= document.getElementById('goto_home');
var detail_title 	= document.getElementById('detail_title');
var detail_desc 	= document.getElementById('detail_desc');
var nextPage 		= document.getElementById('nextPage');
var dback 			= document.getElementById('detail_back');
var d360 			= document.getElementById('detail_360');
var ddiv 			= document.getElementById('detail_div');

var cards 			= [];
var names 			= ['monumenkapalselam','tugupahlawan','foodjunction','suroboyocarnival'];
var desc 			= 'Tempat wisata yang menyimpan sejarah kapal selam yang menakjubkan';
var titles 			= ['Monumen Kapal Selam','Tugu Pahlawan','Food Junction','Suroboyo Carnival'];
var harga 			= ['1000','100',]
var posX			='-1';
var posY			='4.5';
var posZ			='-7';
var rowNumber 		= 4;
var columnNumber 	= 5;
var cardNumber 		= 0;
var animating 		= false;
var mode360 		= false;


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

dback.addEventListener('click',function(){
signaling("back_gallery");
});

d360.addEventListener('click',function(){
mode360_on();
mode360 = true;
});

sky.addEventListener('click',function(){
if(mode360 == true)
alert('off');
mode360_off();
mode360 = false;
});

function signaling(str)
{
cam.emit(str);
}

function set360()
{
sky.setAttribute('color','blue');
//card.setAttribute('src','#'+names[cardNumber]);
}

function setSpace()
{
sky.setAttribute('src','space');
//card.setAttribute('src','#'+names[cardNumber]);
}

function mode360_on()
{
hideWorld();
hideGallery();
set360();
}

function mode360_off()
{
showWorld();
showGallery();
setSpace();
}

function hideGallery()
{
var gallery_hidden = document.getElementById('card-gallery');
gallery_hidden.setAttribute('visible','false');	
}

function showGallery()
{
var gallery_hidden = document.getElementById('card-gallery');
gallery_hidden.setAttribute('visible','true');	
}

function hideDetail()
{
ddiv.setAttribute('visible','false');	
}

function hideWorld()
{
theWorld.setAttribute('visible','false');	
}

function showWorld()
{
theWorld.setAttribute('visible','true');	
}

function createGallery()
{
var gallery  = document.createElement('a-entity');
gallery.setAttribute('id','card-gallery');
for (var i = 0; i < rowNumber; i++) {
for (var j = 0; j < columnNumber; j++) {
var card  = document.createElement('a-plane');
card.setAttribute('position',{x:(-6+(j*3)), y:posY, z:posZ});
card.setAttribute('scale','2 1 1');
card.setAttribute('id',cardNumber);
card.setAttribute('title','Monumen Kapal Selam');
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
	var title;
	var description = 'value:'+desc;
	//console.log(description);
	signaling("goto_detail");
	//alert(evt.detail.target.id);
	//sky.setAttribute('color','blue');
	title = 'value:'+titles[evt.detail.target.id].toString();
	detail_title.setAttribute('text-geometry',title);
	detail_desc.setAttribute('text-geometry',description);
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