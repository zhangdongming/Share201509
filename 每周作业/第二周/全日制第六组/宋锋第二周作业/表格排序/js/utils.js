/**
 * Created by Administrator on 2016/1/19 0019.
 */
var utils={
    listToArray:function(likeAry){
        var ary=[];
        try{
        ary=Array.prototype.slice.call(likeAry);
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                ary[ary.length]=likeAry[i];
            }
        }
        return ary;
    }

};
