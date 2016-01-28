/*先获取要操作的元素*/

var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = tHead.rows[0].cells;
var oTrs = tBody.rows;

/*数据绑定*/

function listDate(){
    /*用碎片的方式*/
    var frg =document.createDocumentFragment();
    for(var i=0;i<jsonAry.length;i++){
        var cur =jsonAry[i];
        /*每一次执行都创建一行*/
        var oTr = document.createElement('tr');
        /*每一次执行都创建四个td*/
        for(var key in cur){
            var oTd = document.createElement('td');
            oTd.innerHTML = cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
listDate();

/*隔行变色*/

function changeBg(){
    for(var i=0;i<oTrs.length;i++){
        oTrs[i].className = "bg"+(i%2);
    }
}
changeBg();

/*实现升序*/
function sortList(n){
    var _this = this;
    _this.flag *= -1;
    var ary = utils.listToAry(oTrs);/*把所有的行都传进来*/
    ary.sort(function(a,b){
        var curIn = a.cells[n].innerHTML;
        var nextIn = b.cells[n].innerHTML;
        var curInNum = parseFloat(curIn);
        var nextInNum = parseFloat(nextIn);
        return (curInNum - nextInNum)*_this.flag;
    });
    /*然后再添加到页面当中*/
    var frg = document.createDocumentFragment();
    for(var i = 0;i<ary.length;i++){
       var cur = ary[i];
        frg.appendChild(cur);
    }
    tBody.appendChild(frg);
    frg = null;
    changeBg();
}
//oThs[1].flag = -1;
//oThs[1].onclick = function(){
//    sortList.call(this);
//};

for(var i=0;i<oThs.length;i++){
    var curTh = oThs[i];
    if(curTh.className==='ddd'){
        curTh.flag = -1;
        curTh.index = i;
        curTh.onclick = function(){
            sortList.call(this,this.index);
        }
    }
}

