$(document).ready(function(){

$(".blog").click(function(){
	alert("Blog is coming soon!");
});


$('ul.tabs').tabs();
 

$(".button-collapse").sideNav({
 	menuWidth: 200,
 	edge: 'left',
 	closeOnClick: true,
 	belowOrigin:false,
 	hover:false
 });

$(function(){
	$(".photo").delay(1500).fadeIn(2000);

});

});

