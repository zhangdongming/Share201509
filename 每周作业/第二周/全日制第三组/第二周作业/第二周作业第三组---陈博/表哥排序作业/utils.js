var utils={
    listToArray:function(likeArray){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likeArray,0);
        }catch(e){
            for(i=0;i<likeArray.length;i++){
                ary[ary.length]=likeArray[i];
            }
        }
        return ary;
    },
    toJSON:function(str){
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    },
    comparObj:function(property,num){
        return function(a,b){
            var a1=parseFloat(a[property]);
            var b1=parseFloat(b[property]);
            if(isNaN(a1)||isNaN(b1)){
                return a[property].localeCompare(b[property])*num;
            }
            return (a1-b1)*num;

        }
    }
}
