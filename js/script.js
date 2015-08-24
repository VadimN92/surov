$(function() {
    $( document ).tooltip({
  		position: { my: "left bottom", at: "left top" }
	});
	$( "#accordion" ).accordion({
		collapsible: true,
		active: 0,
		animate: "swing"
	});
});