var utils = {
    listToAry:function(likeAry){
        var ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry,0);
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                var cur = likeAry[i];
                ary[ary.length] += cur;
            }
        }
        return ary;
    },

}