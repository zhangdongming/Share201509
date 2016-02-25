(function () {
    function getCss(curEle, attr) {
        var val = reg = null;
        if ("getComputedStyle" in window) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === "opacity") {
                val = curEle.currentStyle["filter"];
                reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }
        }
        reg = /^-?\d+(?:\.\d+)?(px|pt|em|rem)?$/;
        return reg.test(val) ? parseFloat(val) : val;
    }

    function setCss(curEle, attr, value) {
        if (attr === "float") {
            curEle["style"]["cssFloat"] = value;
            curEle["style"]["styleFloat"] = value;
            return;
        }
        if (attr === "opacity") {
            value > 1 ? value = 1 : null;
            value < 0 ? value = 0 : null;
            curEle["style"]["opacity"] = value;
            curEle["style"]["filter"] = value * 100;
            return;
        }
        var reg = /^(width|height|top|right|bottom|left|(margin|padding(Top|Right|Bottom|Left)?))$/;
        if (reg.test(attr)) {
            reg = /^-?\d+(\.\d+)?$/;
            if (reg.test(value)) {
                curEle["style"][attr] = value + "px";
            }
            return;
        }
        curEle["style"][attr] = value;

    }

    var zhufengEffect = {
        linear: function (t, b, c, d) {
            return c * t / d + b;
        }
    }

    function animate(curEle, tarObj, duration, effect, callBack) {
        var tempEffect=zhufengEffect.linear;
        //获取起始  改变值
        var beginObj = {}, changeObj = {};
        for (var key in tarObj) {
            if (tarObj.hasOwnProperty(key)) {
                beginObj[key] = getCss(curEle, key);
                changeObj[key] = tarObj[key] - beginObj[key];
            }
        }

        var time = 0, interval = 13;
        var timer = window.setInterval(function () {
            time += interval;
            if (time >= duration) {
                for (var key in tarObj) {
                    if (tarObj.hasOwnProperty(key)) {
                        setCss(curEle, key, tarObj[key]);
                    }
                }
                typeof callBack==="function"?callBack.call(curEle):null;
                window.clearInterval(timer);
                return;
            }
            for(var key in changeObj){
                if(changeObj.hasOwnProperty(key)){
                    var curVal=tempEffect(time,beginObj[key],changeObj[key],duration);
                    setCss(curEle,key,curVal);
                }
            }

        }, interval);

    }
    window.zhufengAnimate=animate;
})();