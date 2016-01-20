//获取//获取
var oTab = document.getElementById("tab");//获取tab表格
var tHead = oTab.tHead;//获取tHead
var tBody = oTab.tBodies[0];//获取tBody
var oThs = tHead.rows[0].cells;//获取第一行所有列
var oTrs = tBody.rows;//获取tBody中年所有的行

//数据绑定
function bindData() {
    var frg = document.createDocumentFragment();//创建文档碎片
    for (var i = 0; i < jsonAry.length; i++) {
        //循环jsonAry中每一行的性别改为男女；
        var cur = jsonAry[i];
        cur.sex = cur.sex === 0 ? "男" : "女";
        //每次循环创建一个tr
        var oTr = document.createElement("tr");

        //每一行需要4个td
        for (var key in cur) {
            var oTd = document.createElement("td");
            oTd.innerHTML = cur[key];//每循环一次key的值就将他显示在oTd中
            oTr.appendChild(oTd);//将4个td显示到tr中
        }

        frg.appendChild(oTr);//将循环到的所有Tr加入到文档碎片中
    }
    tBody.appendChild(frg);//将文档碎片内容添加到tBody中
    frg = null;
}
bindData();

//隔行变色
function changeBg() {
    for (var i = 0; i < oTrs.length; i++) {
        oTrs[i].className = "bg" + i % 2;

    }
}
changeBg();


//排序
function sortList(n) { //点击时触发这个排序方法
    var _this = this;
    _this.flag *=-1;

    //
    for (var k = 0; k < oThs.length; k++) {
        if (k !== n) {
            oThs[k].flag = -1;
        }
    }
    var ary = utils.listToArray(oTrs);      //将所有行类数组转换成数组
    ary.sort(function (a, b) {               //sort排序
        var curIn = a.cells[n].innerHTML;      //获取第三列当前项
        var nexIn = b.cells[n].innerHTML;      //获取第三列当前项的后一项
        var curInNum = parseFloat(curIn);   //将当前项转换为有效数字保留两位小数
        var nexInNum = parseFloat(nexIn);   //将后一项转换为有效数字保留两位小数
        if (isNaN(curInNum) || isNaN(nexInNum)) {//如果是有效数字跳出判断，不是非有效数字就执行判断题中的内容
            return (curIn.localeCompare(nexIn)) * _this.flag
        }
        return (curInNum - nexInNum) * _this.flag
    });

//从新按照ary中最新顺序把每一行用文档碎片添加到页面中；
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }

    tBody.appendChild(frg);
    frg = null;
    changeBg();

}
//5、点击触发排序
for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    if (curTh.className === "cursor") {
        curTh.flag = -1;
        curTh.zhufeng = i;
        curTh.onclick = function () {
            sortList.call(this, this.zhufeng)
        };
    }
}








