var oBox = document.getElementById("box");
var oTab = document.getElementsByClassName("tab")[0];
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = tHead.rows[0].cells;
var oTrs = tBody.rows;
//var img = oTab.style.backgroundImage;

function bindDate() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var cur = jsonAry[i];
        cur.sex = cur.sex === 0 ? "男" : "女";
        oTr = document.createElement("tr");
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
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = i % 2 === 0 ? null : "bg";
    }
}
changeBg();


function sortList(n) {
    var _this = this;
    _this.daHua *= -1;
    for (var k = 0; k < oThs.length; k++) {
        k !== n ? oThs[k].daHua = -1 : null;
    }


    var ary = utils.listToArray(oTrs);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var nexIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn);
        var nexInNum = parseFloat(nexIn);
        if (isNaN(curInNum) || isNaN(nexInNum)) {
            return curIn.localeCompare(nexIn) * _this.daHua;
        }
        return (curInNum - nexInNum) * _this.daHua;
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
        curTh.xiYou = i;
        curTh.daHua = -1;
        curTh.onclick = function () {
            sortList.call(this, this.xiYou);
        };
    }
}


var count = 1;
function changeImg() {
    count++;
    if (count < 13) {
        oBox.style.backgroundImage = "url" + "(" + "img/" + count + ".jpg" + ")";
    } else {
        oBox.style.backgroundImage = "url" + "(" + "img/" + "1" + ".jpg" + ")";
        count = 1;
    }
}


window.setInterval(function () {
    changeImg();
}, 2000);
