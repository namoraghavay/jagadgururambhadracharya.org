// JavaScript Document
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav>li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn('fast');
		$(this) .addClass( 'on');
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		$(this) .removeClass( 'on');
		});
}
$(document).ready(function(){					
	mainmenu();
});

