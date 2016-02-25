(function () {
    var step = 0, autoTimer = null, interval = 2000;
    var banner = document.getElementById("banner"), inner = document.getElementById("inner"), tip = document.getElementById("tip"), tipList = tip.getElementsByTagName("li"), btnLeft = document.getElementById("btnLeft"), btnRight = document.getElementById("btnRight");

    function changeTip() {
        var tempStep = step;
        tempStep >= tipList.length ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "bg" : null;
        }
    }

    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        step++;
        if (step > 4) {
            step = 1;
            inner.style.left = 0;
        }
        zhufengAnimate(inner, {left: -step * 1300}, 500);
        changeTip();
    }

    banner.onmouseenter = function () {
        window.clearInterval(autoTimer);
        btnLeft.style.display = btnRight.style.display = "block";
    };

    banner.onmouseleave = function () {
        autoTimer = window.setInterval(autoMove, interval);
        btnLeft.style.display = btnRight.style.display = "none";
    };


    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                step = this.index;
                zhufengAnimate(inner, {left: -step * 1300}, 500, 3);
                changeTip();
            }
        }
    }

})();
