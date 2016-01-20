/**
 * Created by Administrator on 2016/1/20.
 */
var utils={
    listToAry:function(likeAry){
        try{
            return [].slice.call(likeAry);
        }
        catch(e){
            var ary=[];
            for(var i=0;i<likeAry.length;i++){
                ary[likeAry.length]=likeAry[i];
            }
        }
    }
}