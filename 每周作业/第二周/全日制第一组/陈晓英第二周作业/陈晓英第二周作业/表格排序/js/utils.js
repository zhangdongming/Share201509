
var utils={
    //listToArray：把类数组转化为数组；（兼容所有的浏览器）
    listToArray: function(likeAry){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likeAry,0);
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                ary[ary.length]=likeAry[i];
            }
        }
        return ary;
    },
    //toJSON把json格式的字符串转化为json格式的对象
    toJOSN:function(str){
        var obj=null;
        try{
            obj=JSON.parse(str);
        }catch(e){
            obj=eval("("+str+")");/*eval:把字符串转化为js表达式执行*/
        }
        return obj;
    }


};
utils.getCss=function(curEle,attr){
    var val=reg=null;
    if("getComputedStyle" in window){
        val=window.getComputedStyle(curEle,null)[attr];
    }else{
        if(attr==="opacity"){
            val=curEle.currentStyle["filter"];
            reg=/^/
        }
    }
};