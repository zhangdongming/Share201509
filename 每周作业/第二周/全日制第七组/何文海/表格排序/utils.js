/**
 * Created by sea on 2016/1/18.
 */

//公用方法库

var utils = {
    //类数组转数组
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry, 0)
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    },
    //JSON字符串格式转换JSON对象格式
    toJOSN:function(str){  //

        return "JSON" in window ?JSON.parse(str):eval("("+str+")");
    }
};
