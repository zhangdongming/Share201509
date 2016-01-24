var oTab=document.getElementById("tab")
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;
var tBody = oTab.tBodies[0];
var oTrs = tBody.rows;

function bindDate(){
    var frg =document.createDocumentFragment();
    for(var i=0;i<jsonAry.length;i++){
        var oTr =document.createElement("tr")
        var cur=jsonAry[i];
        cur.sex=cur.sex===0?"男":"女";

        for(var key in cur){
            var oTd =document.createElement("td");
            oTd.innerHTML=cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg=null;
}
bindDate();


function changeBg(){
    for(var i =0;i<oTrs.length;i++){
        oTrs[i].className="bg"+i%2;
    }
}
changeBg();


function listSort(n){
    var _this=this;
    _this.flag*=-1;

    for(var k=0;k<oThs.length;k++){
        if (k!==n){
            oThs[k].flag=-1;
        }
    }

    var ary =utils.listToArray(oTrs);
    ary.sort(function(a,b){
        var curIn= a.cells[n].innerHTML;
        var nexIn= b.cells[n].innerHTML;
        var curNum=parseFloat(curIn);
        var nexNum= parseFloat(nexNum);
        if(isNaN(curNum)|isNaN(nexNum)){
            return curIn.localeCompare(nexIn)*_this.flag;
        }
        return (curNum-nexNum)*_this.flag;
    });


    var frg=document.createDocumentFragment();
    for(var i =0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg=null;
    changeBg();
}


for(var i=0;i<oThs.length;i++){
    if(oThs[i].className==="cursor"){
        oThs[i].flag=-1;
        oThs[i].index=i;
        oThs[i].onclick=function(){
            listSort.call(this,this.index)
        }
    };
}
