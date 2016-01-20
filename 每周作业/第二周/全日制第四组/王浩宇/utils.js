var utils={
    listToArray:function(likeArray){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likeArray,0);
        }catch(e){
            for (var i=0; i<likeArray.length; i++){
                ary[ary.length]=likeArray[i];
            }
        }
        return ary;
    },
    toJOSN:function(str) {
        var obj = null;
        try{
            obj=JSON.parse(str);
        }catch(e){
            obj=eval("("+str+")");
        }
        return obj;
    }
};
