/**
 * Created by acer on 2016/1/18.
 */
var utils={
  listToArray:function (likeAry) {
      var ary = [];
      try {
          ary = Array.prototype.slice.call(likeAry);
      } catch (e) {
          for (var i = 0; i < likeAry.lenght; i++) {
              ary[ary.length] = likeAry[i]
          }
      }
      return ary;
  },
    toJSON:function(){
        var obj={};
        try{
            obj=JSON.parse(str);
        }catch(e){
            obj=eval("("+str+")");
        }
        return obj;
    }
};

