(function(){
    $("#right li").hover(function(){
        $(this).addClass("cur").
        find("div").css("display","block");
    },function(){
        $(this).removeClass("cur").
        find("div").css("display","none");
    })
})();
