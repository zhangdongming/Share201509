/**
 * Created by Administrator on 2015/12/25.
 */

var otal = document.getElementById("tal");
var olis = otal.getElementsByTagName("li");
var odiv = otal.getElementsByTagName("div");

function toChage(index) {
    for (var i = 0; i < olis.length; i++) {
        olis[i].className = "";
        odiv[i].className = "";
    }
    olis[index].className = "select";
    odiv[index].className = "select";
}
// 自定义的形式实现选项卡
//for(var i=0;i<olis.length;i++){
//    olis[i].zhFeng=i;
//    olis[i].onmouseover= function () {
//        toChage(this.zhFeng);
//    }
//}

//闭包的形式实现选项卡
for (var i = 0; i < olis.length; i++) {
    olis[i].onmouseover = (function (i) {
        return function () {
            toChage(i)
        }
    })(i)
}

