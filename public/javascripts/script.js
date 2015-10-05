$(document).ready(function(){

$('#blog').click(function()
{
	alert("This Blog is currently under construction!")
});

var options = [
    {selector: '#visualize', offset: 100, callback: 'Materialize.fadeInImage("#visualize")' }
  ];
  Materialize.scrollFire(options);

});


document.getElementById('time').innerHTML= Date();
     