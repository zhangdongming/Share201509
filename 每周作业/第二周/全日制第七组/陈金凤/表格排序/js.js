var oTab = document.getElementById("list");
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = tHead.rows[0].cells;
var oTrs = tBody.rows;

function bindDate() {
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
bindDate();

function changeBg() {
    for (var i = 0; i < jsonAry.length; i++) {
        oTrs[i].className = "bg" + i % 2;
    }
}
changeBg();

function range(n) {
    var _this = this;
    _this.flag *= -1;
    for (var k = 0; k < oThs.length; k++) {
        if (k !== n) {
            oThs[k].flag = -1;
        }
    }
    var ary = utils.toArray(oTrs);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var nexIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curInNum);
        var nexInNum = parseFloat(nexInNum);
        if (isNaN(curInNum) || isNaN(curInNum)) {
            return (curIn.localeCompare(nexIn)) * _this.flag;
        }
        return (curInNum - nexInNum) * _this.flag;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
    changeBg();
}

for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    if(curTh.className==="cursor"){
        curTh.flag = -1;
        curTh.index = i;
        curTh.onclick = function () {
            range.call(this, this.index);
        }
    }
}






