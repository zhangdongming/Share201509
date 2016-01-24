/**
 * Created by Logan on 2016/1/17.
 */
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
  }
};