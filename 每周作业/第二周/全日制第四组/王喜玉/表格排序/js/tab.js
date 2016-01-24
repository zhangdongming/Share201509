var oTab = document.getElementById("tab");
var oHead = oTab.tHead;
var oBody = oTab.tBodies[0];
var oRows = oBody.rows;
var oThs = oHead.rows[0].cells;

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
    oBody.appendChild(frg);
    frg = null;
}
bindData();

function changeColor() {
    for (var i = 0; i < oRows.length; i++) {
        oRows[i].className = (i % 2 === 1 ? "bg" : null);
    }
}
changeColor();

function sortList(n) {
    var _this = this;
    _this.flag *= -1;

    for (var k = 0; k < oThs.length; k++) {
        k !== n ? oThs[k].flag = -1 : null;
    }

    var ary = utils.listToArray(oRows);

    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var curNext = b.cells[n].innerHTML;
        if (isNaN(curIn) || isNaN(curNext)) {
            return curIn.localeCompare(curNext) * _this.flag;
        }
        return curIn - curNext * _this.flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    oBody.appendChild(frg);
    frg = null;
    changeColor();

}

for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    if (curTh.className === "cursor") {
        curTh.flag = -1;
        curTh.index = i;
        curTh.onclick = function () {
            sortList.call(this, this.index);
        }
    }
}
