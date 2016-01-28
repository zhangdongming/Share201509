var oTab=document.getElementById('tab');
var oTh=oTab.tHead;
var oTbody=oTab.tBodies[0];
var oTrs=oTbody.rows;
var oThs=oTh.rows[0].cells;
oThs[0].text1='name';oThs[1].text1='age';oThs[2].text1='power';oThs[3].text1='sex';
//数据绑定；
function blindDate(){
    var str ="";
    for(i=0;i<jsonAry.length;i++){
        var cur=jsonAry[i];
        var sex1=cur.sex==0?'女':'男';
        str+='<tr><td>'+cur.name+'</td><td>'+cur.age+'</td><td>'+cur.power+'</td><td>'+sex1+'</td></tr>';
    }
    oTbody.innerHTML=str;
}
blindDate();
//点击事件绑定
for(i=0;i<oThs.length;i++){
    var cur=oThs[i];
    cur.index=i;
    cur.num=-1;
    cur.onclick=function(){
        this.num*=-1;
        sortAry(this.text1,this.num);
        blindDate();
        changeColor();
    }
};//JSON排序
function sortAry(property,num){
    jsonAry.sort(utils.comparObj(property,num))
}//隔行变色
function changeColor(){
    for(i=0;i<oTrs.length;i++){
        var cur =oTrs[i];
        i%2==0?cur.className='bg1':cur.className='bg2';
    }
}
changeColor();
