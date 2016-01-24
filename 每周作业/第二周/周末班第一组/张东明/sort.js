//第三遍 加油
//获取元素
var oTab=document.getElementById("tab");
var tBody=oTab.tBodies[0];
var tHead=oTab.tHead;
var oRows=tBody.rows;
var oThs=tHead.rows[0].cells;
//绑定数据
var frg=document.createDocumentFragment();
for(var i=0;i<jsonAry.length;i++){
    var cur=jsonAry[i];
    cur["sex"]=(cur["sex"]==0)?"男":"女";
    var oTr=document.createElement("tr");
    for(var key in cur){
        var oTd=document.createElement("td");
        oTd.innerHTML=cur[key];
        oTr.appendChild(oTd);
    }
    frg.appendChild(oTr);
}
tBody.appendChild(frg);
frg=null;
function changeBg(){
    for(var i=0;i<oRows.length;i++){
        oRows[i].className=(i%2==1)?"bg":null;
    }
}
changeBg();
//排序
function arySort(n){
    for(var i=0;i<oThs.length;i++){
        (i!==n)?oThs[i].flag=-1:null;
    }
    oThs[n].flag*=-1;
    var nowFlag=oThs[n].flag;
    var ary=utils.listToAry(oRows);
    var frg=document.createDocumentFragment();
    ary.sort(function(a,b){
        var cur= a.cells[n].innerHTML,next= b.cells[n].innerHTML;
        var curNum=Number(cur),nextNum=Number(next);
        if(isNaN(curNum)||isNaN(nextNum)){
            return cur.localeCompare(next)*nowFlag;
        }
        return (curNum-nextNum)*nowFlag;
    })
    for(var i=0;i<ary.length;i++){
    frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg=null;
    changeBg();
}
//点击绑定
for(var i=0;i<oThs.length;i++){
    if(oThs[i].className=="cursor"){
        oThs[i].flag=-1;
        oThs[i].index=i;
    oThs[i].onclick=function(){
        arySort(this.index);
    }
    }
}
