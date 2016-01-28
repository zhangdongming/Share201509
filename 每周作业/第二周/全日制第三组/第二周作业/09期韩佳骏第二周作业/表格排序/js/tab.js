var oTab= document.getElementById("tab");
var tHead =oTab.tHead;
var tBody =oTab.tBodies[0];
var oRows = tBody.rows;
var oThs = tHead.rows[0].cells;
function bindData(){
    var frg =document.createDocumentFragment();
    for(var i=0;i<str.length;i++){
        var cur =str[i];
        cur.sex=(cur.sex===0?"男":"女");
        var oTr =document.createElement("tr");
        for(var key in cur){
            var oTd = document.createElement("td");
            oTd.innerHTML=cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg=null;
}
bindData();
 function changeBg(){
     for(var i=0;i<oRows.length;i++){
         oRows[i].className=i%2===1?"bg":null;
     }
 }
changeBg();
function sortLIst(n){
    var _this= this;
    //console.dir(_this);
    _this.flag*=-1;
    //console.log(_this.flag);
    var ary =utils.listToArray(oRows);
    ary.sort(function(a,b){
        var curIn= a.cells[n].innerHTML,nexIn= b.cells[n].innerHTML;
        var curNum=parseFloat(curIn),nexNum=parseFloat(nexIn);  console.log(curNum,nexNum);
        if(isNaN(curNum)||isNaN(nexNum)){
            //console.log(_this.flag);
           return curIn.localeCompare(nexIn)*_this.flag;
        }
      /*  console.log(_this.flag);*/
        return (curNum-nexNum)*_this.flag;

    });
       var frg=document.createDocumentFragment();
      for(var i=0;i<ary.length;i++){
          frg.appendChild(ary[i]);
      }
    tBody.appendChild(frg);
    frg = null;
    changeBg();

}
for(var i=0;i<oThs.length;i++) {
    var curOth = oThs[i];
    if (curOth.className === "cursor") {
        curOth.flag = -1;
        console.dir(curOth);
        curOth.index = i;
        curOth.onclick = function () {
            sortLIst.call(this, this.index);


        }
    }
}

