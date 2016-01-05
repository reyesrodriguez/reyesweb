$(document).ready(function(){

$(".blog").click(function(){
	alert("Blog is coming soon!");
});


$(".button-collapse").sideNav({
 	menuWidth: 200,
 	edge: 'left',
 	closeOnClick: true
 });

$(function(){
	$(".photo").delay(1000).fadeIn(300);

});

});

