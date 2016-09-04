$(document).ready(function(){
	var username = "info";
	var hostname = "nilabile.be";
	var linktext = username + "@" + hostname ;
	$('.emailshroud').html("<a href='" + "mail" + "to:" + username + "@" + hostname + "&bcc=tine.dekoninck@telenet.be'>" + linktext + "</a>");
});
