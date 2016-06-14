$(document).ready(function(){
	var username = "tinepiano";
	var hostname = "hotmail.com";
	var linktext = username + "@" + hostname ;
	$('.emailshroud').html("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
});