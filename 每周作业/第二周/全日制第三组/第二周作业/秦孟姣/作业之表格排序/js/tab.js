/**
 * Created by Administrator on 2016/1/17.
 */
var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = tHead.rows[0].cells;
var oTrs = tBody.rows;
function bindData() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var cur = jsonAry[i];
        cur.sex = cur.sex === 0 ? "男" : "女";
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
bindData();
function changeBg() {
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = "bg" + (i % 2);
    }
}
changeBg();
function sortList(n) {
    var _this = this;
    _this.frag *= -1;
    for(var k=0;k<oThs.length;k++){
        if(k!==n){
            oThs[k].frag=-1;
        }
    }
    var ary = utils.listToArray(oTrs);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var nexIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn);
        var nexInNum = parseFloat(nexIn);
        if (isNaN(curInNum) || isNaN(nexInNum)) {
            return (curIn.localeCompare(nexIn)) * _this.frag;
        }
        return (curInNum - nexInNum) * _this.frag;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
    changeBg();
}

for (var i = 0;i<oThs.length;i++){
    var oTh=oThs[i];
    if(oTh.className==="cursor"){
        oTh.frag=-1;
        oTh.index=i;
        oTh.onclick=function(){
            sortList.call(this,this.index);
        }

    }
}