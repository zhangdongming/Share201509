charset = "UTF-8";

var utils = {
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    },
    toJSON: function (str) {
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    },
    getCSS:function(curEle,attr){
        var val= reg =null;
        if("getComputedStyle"in window){
            val=window.getComputedStyle(curEle,null)[attr];
        }else{
            if(attr==="opacity"){
                val=curEle.currentStyle["filter"];
                reg=/^alpha\(opacity=(\d+(\.\d+)?)\)$/;
                var reg
            }
        }

    }
};
