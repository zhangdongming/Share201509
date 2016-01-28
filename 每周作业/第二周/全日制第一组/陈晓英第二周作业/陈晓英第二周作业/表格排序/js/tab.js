//首先获得当前所需要的元素
oTab=document.getElementById("tab");
tHead=oTab.tHead;/*获取指定table下的thead*/
tBody=oTab.tBodies[0];/*获取指定table下的所有tbody中的第一个*/
oThs=tHead.rows[0].cells;/*获取第一行的所有列*/
oTrs=tBody.rows;
//1),实现数据绑定；《利用碎片处理》
function bindDate(){
    var frg=document.createDocumentFragment();
    for(var i=0;i<jsonAry.length;i++){
        var cur=jsonAry[i];
        cur.sex=cur.sex===0?"男":"女";
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
}
bindDate();
//实现隔行变色；
function changeBg(){
    for(var i=0;i<oTrs.length;i++){
        oTrs[i].className="bg"+(i%2);
    }
}
changeBg();
//实现表格排序：
  function sortList(n){
      var _this=this;
      _this.flag*=-1;
      for(var k=0;k<oThs.length;k++){
          if(k!==n){
              oThs[k].flag=-1;
          }
      }
      var ary=utils.listToArray(oTrs);
      //然后进行排序
      ary.sort(function(a,b){
          var curIn= a.cells[n].innerHTML;
          var nexIn= b.cells[n].innerHTML;
          var curInNum=parseFloat(curIn);
          var nexInNum=parseFloat(nexIn);
          if(isNaN(curInNum)||isNaN(nexInNum)){
              return (curIn.localeCompare(nexIn))*_this.flag;
          }
          return (curInNum-nexInNum)*_this.flag;
      });

      var frg=document.createDocumentFragment();
      for(var i=0;i<ary.length;i++){
          frg.appendChild(ary[i]);
      }
      tBody.appendChild(frg);
      frg=null;
      changeBg();
  }
//利用碎片把ary中最新的顺序把每一行重新添加到页面中；


//这个时候发现已经影响了我们的隔行变色；所以再让隔行变色重新的执行一次；

//oThs[2].flag=-1;
//oThs[2].onclick=function(){
//    sortList.call(this);
//};
//已经能根据第三行进行排序了，还想用其他行排序；
for(var i=0;i<oThs.length;i++){
    var curTh=oThs[i];
    if(curTh.className==="cursor");
    curTh.flag=-1;
    curTh.index=i;
    curTh.onclick=function(){
        sortList.call(this,this.index);
    }
}


