$(document).ready(function(){

 $(".button-collapse").sideNav({
 	menuWidth: 200,
 	edge: 'left',
 	closeOnClick: true
 });

 $(".js").on('click', function() {
   $(".circles-wrp").fadeIn();
});

var myCircle = Circles.create({
  id:           'js',
  radius:       60,
  value:        43,
  maxValue:     100,
  width:        10,
  text:         function(value){return value + '%';},
  colors:       ['#D3B6C6', '#4B253A'],
  duration:     400,
  wrpClass:     'circles-wrp',
  textClass:    'circles-text'
  styleWrapper: true,
  styleText:    true
})



});

