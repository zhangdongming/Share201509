var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;
var tBody = oTab.tBodies[0];
var oTrs = tBody.rows;
function bindData() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var oTrs = document.createElement("tr");
        var cur = jsonAry[i];
        cur.sex = cur.sex === 1 ? "男" : "女";
        for (var key in cur) {
            var oTds = document.createElement("td");
            oTds.innerHTML = cur[key];
            oTrs.appendChild(oTds);
        }
        frg.appendChild(oTrs);
    }
    tBody.appendChild(frg);
    frg = null;
}
bindData();
function changeBg() {
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = i % 2 === 1 ? "bg" + 0 : null;
    }
}
changeBg();
function sortList(n) {
    var _this = this;
    _this.flag *= -1;

    for (var k = 0; k < oThs.length; k++) {
        if (k !== n) {
            oThs[k].flag = -1;
        }
    }


    var ary = utils.listToArray(oTrs);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML, curNex = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn), curNexNum = parseFloat(curNex);
        if (isNaN(curInNum) || isNaN(curNexNum)) {
            return (curIn.localeCompare(curNex)) * _this.flag;
        }
        return (curInNum - curNexNum) * _this.flag;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    changeBg();
};
for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    if (curTh.className === "cursor") {
        curTh.index = i;
        curTh.flag = -1;
        curTh.onclick = function () {
            sortList.call(this, this.index)
        }
    }
}