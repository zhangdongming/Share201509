//1、自定义属性方法
//var oTab = document.getElementById("tab");
//var oLis = oTab.getElementsByTagName("li");
//var oDivs = oTab.getElementsByTagName("div");
//
//for(i=0;i<oLis.length;i++){
//    var oLi = oLis[i];
//    oLi.zhufeng = i;
//    oLi.onmouseover = function(){
//        for(var j=0;j<oLis.length;j++){
//            oLis[j].className = "";
//            oDivs[j].className = "";
//        }
//        this.className = "select";
//        oDivs[this.zhufeng].className = "select";
//    }
//}
//2、闭包方法一
//var oTab = document.getElementById("tab");
//var oLis = oTab.getElementsByTagName("li");
//var oDivs = oTab.getElementsByTagName("div");
//
//for(var i=0;i<oLis.length;i++){
//    (function(i){
//        var oLi = oLis[i];
//        oLi.onmouseover = function(){
//            for(var j=0;j<oLis.length;j++){
//                oLis[j].className = "";
//                oDivs[j].className = "";
//            }
//            this.className = "select";
//            oDivs[i].className = "select";
//        }
//    })(i);
//}
//3、闭包方法二
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

for (var i = 0; i < oLis.length; i++) {
    var oLi = oLis[i];
    oLi.onmouseover = (function (i) {
        return function(){
            for (var j = 0; j < oLis.length; j++) {
                oLis[j].className = "";
                oDivs[j].className = "";
            }
            this.className = "select";
            oDivs[i].className = "select";
        }
    })(i);
}