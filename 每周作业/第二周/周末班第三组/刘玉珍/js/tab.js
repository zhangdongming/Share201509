var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;
var oThs = tHead.rows[0].cells;
function bindData() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var cur = jsonAry[i];
        cur.sex = (cur.sex === 0 ? "男" : "女");
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
    for (var i = 0; i < oRows.length; i++) {
        oRows[i].className = i % 2 === 1 ? "bg" : null;
    }
}
changeBg();
function sortList(n) {
    var _this = this;
    _this.flag *= -1;

    var ary = utils.listToArray(oRows);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML, nexIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn), nexInNum = parseFloat(nexIn);
        if (isNaN(curInNum) || isNaN(nexInNum)) {
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
    if (curTh.className === "cursor") {
        curTh.flag = -1;
        curTh.index = i;
        curTh.onclick = function () {
            sortList.call(this, this.index);//->执行sortList,不仅把this改变了,而且还把当前列的索引传递进来了
        }
    }
}