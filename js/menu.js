$(document).ready(function(){
alert($(location).attr('href'));
        $.ajax({
            type: "GET",
            url: "./data/menu.xml",
            dataType: "xml",
            success: function(xml){
                var ul_main=$("<ul class=\"nav navbar-nav\" />");
                $(xml).find("Menu").each(function(){
                    if($(this).children().length)
                    {
                        var ulSub=$("<ul />");
                        $(this).children().each(function(){
                            ulSub.append("<li id="+$(this).attr("id")+"><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
                        });
                        var li=$("<li id="+$(this).attr("id")+"><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
                        ul_main.append(li.append(ulSub))
                    }
                    else
                    {
                    	ul_main.append("<li id="+$(this).attr("id")+"><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
                    }
                });
                $("#menu_wrapper").append(ul_main);
            }
        });
});