(function(){
    var oList=document.getElementById("list");
    var oLis=oList.getElementsByTagName("li");
    var oDivs=oList.getElementsByTagName("div");
    for(var i=0;i<oLis.length;i++){
        (function(i){
            var curLi=oLis[i];
            var curNav=oDivs[i]
            curLi.onmouseover=function(){
                curNav.style.display="block";
                curLi.className="select";
            }
            curLi.onmouseout=function(){
                curNav.style.display="none";
                curLi.className="";
            }
        })(i);
    }
})();
