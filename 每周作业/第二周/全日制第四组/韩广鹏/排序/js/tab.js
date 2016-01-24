var oTab = document.getElementById("tab");
var oHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = oHead.rows[0].cells;//rows行
var oTrs = tBody.rows;

function bindData() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < jsonAry.length; i++) {
        var cur = jsonAry[i];
        cur.sex = cur.sex === 0 ? "男" : "女";
        var Tr = document.createElement("tr");
        for (var key in cur) {
            var Td = document.createElement("td");
            Td.innerHTML = cur[key];
            Tr.appendChild(Td);
        }
        frg.appendChild(Tr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bindData();

function changeColor() {
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = "bg" + (i % 2);
    }
}
changeColor();


function sortList(n) {
    var _this = this ;
    _this.flag*=-1 ;

    for(var k = 0 ; k<oThs.length ; k++){
        if(k!==n){
            oThs[k].flag = -1 ;
        }
    }

    var ary = utils.listToArray(oTrs);
    ary.sort(function (a, b) {
        var curIn = a.cells[n].innerHTML;
        var nexIn = b.cells[n].innerHTML ;
        var curNum = parseFloat(curIn) ;
        var nexNum = parseFloat(nexIn) ;
        if(isNaN(curIn)||isNaN(nexIn)){
            return curIn.localeCompare(nexIn)*_this.flag ;
        }
        return curNum-nexNum*_this.flag;

    });

    var frg  = document.createDocumentFragment() ;
    for(var i = 0 ; i<ary.length ; i++){
        frg.appendChild(ary[i]) ;
    }
    tBody.appendChild(frg) ;
    frg = null ;
    changeColor();

    if(n===0){
        tBody.style.backgroundColor = "red"
    }else if(n===1){
        tBody.style.backgroundColor = "blue"
    }else{
        tBody.style.backgroundColor = "yellow"
    }
}

for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    if (curTh.className === "cursor") {
        curTh.flag = -1;
        curTh.index = i;
        curTh.onclick = function () {
            sortList.call(this, this.index);
        };
    }
}










