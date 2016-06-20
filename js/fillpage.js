$(document).ready(function(){
	fillpage();
});

function fillpage()
{
	var containerheight=$('.container-fluid').height();
	var windowheight=$(window).height();
	
	if(containerheight<windowheight)
	{
		$('.container-fluid').height(windowheight);
	}
}