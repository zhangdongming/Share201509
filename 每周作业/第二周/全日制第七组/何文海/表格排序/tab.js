/**
 * Created by sea on 2016/1/18.
 */


//获取元素
var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;
var tBody = oTab.tBodies[0];
var oTrs = tBody.rows;
//var oSpan=oThs.getElementsByTagName("span");
//数据绑定
function bindDate() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var cur = jsonAry[i];
        cur.sex = cur.sex === 1 ? "男" : "女";
        var oTr = document.createElement("tr");
        for (var key in cur) {
            var oTd = document.createElement("td");
            oTd.innerHTML = cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bindDate();

//各行换色
function changeBg() {
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = "bg" + (i % 2);
    }
}
changeBg();

//表格排序



function sortlist(n) {
    var _this = this;
    _this.flag *= -1;
   // console.log(_this.flag);
    for(var k=0;k<oThs.length;k++){
        if(k!==n){
            oThs[k].flag=-1;
            var styleReset=oThs[k].getElementsByTagName("span");
            styleReset[0].style.color="#fff";
            styleReset[1].style.color="#fff";
        }
    }


    function btnSort(){
        var setStyle=_this.getElementsByTagName("span");
        if(_this.flag==1){
            setStyle[0].style.color="red";
            setStyle[1].style.color="#fff";
        }else if(_this!==1){
            setStyle[1].style.color="red";
            setStyle[0].style.color="#fff";
        }
    }


    //将类数组转换为数组
    var ary = utils.listToArray(oTrs);
    //排序
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var nexIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn);
        var nexInNum = parseFloat(nexIn);
        if(isNaN(curInNum)||isNaN(nexInNum) ){
           return (curIn.localeCompare(nexIn))*_this.flag;

        }

      return (curInNum - nexInNum) * _this.flag ;

    });
    //将排序好的放回tabody
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;

    changeBg();
    btnSort();

}
for (var i = 0; i < oThs.length; i++) {
    var cur = oThs[i];
    if (cur.className === "cur") {

        cur.flag = -1;
        cur.index = i;
        cur.onclick = function () {
            sortlist.call(this, this.index);
        }
    }
}










