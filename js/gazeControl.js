//require('aframe-mouse-cursor-component');
//import 'aframe'
//import 'aframe-mouse-cursor-component'


//var scene = document.getElementById('scene');
//
//scene.addEventListener('enter-vr', function() {
//  var secondCameraEl = document.querySelector('#vr-camera');
//  secondCameraEl.setAttribute('camera', 'active', true);
//});
//
//scene.addEventListener('exit-vr', function() {
//  var fistCameraEl = document.querySelector('#pc-camera');
//  fistCameraEl.setAttribute('camera', 'active', true);
//});
//
//var box = document.getElementById('box');
//
//box.addEventListener('click', function() {
//  alert('click');
//});


//
//var scene = document.getElementById('scene');
//var camera = document.querySelector('#camera')[0];
//
//scene.addEventListener('enter-vr', function() {
//  camera.setAttribute('cursor', 'maxDistance: 1; fuse: true');
//});
//
//scene.addEventListener('exit-vr', function() {
//  camera.setAttribute('cursor', 'maxDistance: 1; fuse: false');
//});
//
//var box = document.getElementById('box');
//
//box.addEventListener('click', function() {
//  alert('click');
//});
//
//var scene = document.getElementById('scene');
//
//scene.addEventListener('enter-vr', function() {
//  document.getElementsByTagName('a-camera').setAttribute('cursor', 'maxDistance: 30; fuse: true; fuseduration: 1500');
//  document.getElementById('cursor').setAttribute('scale', '0.2 0.2 0.2');
//});
//
//scene.addEventListener('exit-vr', function() {
//  document.getElementsByTagName('a-camera').setAttribute('cursor', 'maxDistance: 30; fuse: false');
//  document.getElementById('cursor').setAttribute('scale', '0.2 0.2 0.2');
//});

//function public test(){
//var box = document.getElementById('box');
//
//box.addEventListener('click', function() {
//  alert('click');
//    console.log('click');
//});
//}

AFRAME.registerComponent('log', {
  schema: {type: 'string'},
  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
      alert('click');
  }
});