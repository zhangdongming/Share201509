/**
 * Created by lenovo on 2016/1/20.
 */
/*
 * utils.js ?›¥????????????§Ô????????????
 */
var utils = {
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry, 0);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    },
    toJSON: function (str) {
        var obj = null;
        try {
            obj = JSON.parse(str);
        } catch (e) {
            obj = eval("(" + str + ")");
        }
        return obj;
    }
};






