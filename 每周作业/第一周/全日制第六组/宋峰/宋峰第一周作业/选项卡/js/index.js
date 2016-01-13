/**
 * Created by Administrator on 2015/12/25 0025.
 */
var oTab=document.getElementById("tab");
var oList=oTab.getElementsByTagName("li");
var oDiv=oTab.getElementsByTagName("div");


function tabchange(n){
    for(var i=0;i<oList.length;i++){
        oList[i].className="";
        oDiv[i].className="";
    }
    oDiv[n].className="select"
    oList[n].className="select"
}

for(var i=0;i<oList.length;i++){
    ;(function(i) {
        oList[i].onmouseover = function () {
            tabchange(i)
        }
    })(i);
}


































