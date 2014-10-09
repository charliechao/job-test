$(document).ready(function(){
var link = document.getElementById('newsOne');
$(".leftImg").colorbox({rel:'leftImg'});
link.click();
window.setInterval(function(){$.colorbox.next()}, 2000); 
window.setTimeout(function(){$.colorbox.remove()}, 8000); 
});