var oTable = document.getElementById('Table'); 
var oThead = oTable.tHead;
var oTbody = oTable.tBodies[0];
var oRows = oTbody.rows;
var oThs = oThead.rows[0].cells;

function bindData() {
	var frg = document.createDocumentFragment();
	for (var i = 0; i < jsonAry.length; i++) {
	    var cur = jsonAry[i];
	    cur["sex"] == 1 ? cur["sex"] = "男" : cur["sex"] = "女";
	    var oTr = document.createElement("tr");
	    
	    oTr.innerHTML = "<td>" + cur["name"] + "</td><td>" + cur["age"] + "</td><td>" + cur["skill"] + "</td><td>"+ cur["sex"] + "</td>";
	    frg.appendChild(oTr);
	}
	oTbody.appendChild(frg);
	frg = null;
}
bindData();

function changeBg(){
	for(var i = 0; i < oRows.length; i++){
		i%2==1 ? oRows[i].className = null : oRows[i].className = "bg";
	}
}
changeBg();

function sortList(n){
	var table_this = this;

	table_this.flag *= -1;

	for (var k = 0; k < oThs.length; k++) {
        k !== n ? oThs[k].flag = -1 : null;
    }

	var ary = utils.listToArray(oRows);
	ary.sort(function(a, b){
		var curIn = a.cells[1].innerHTML, nexIn = b.cells[1].innerHTML;
		var curInNum = parseFloat(curIn), nexInNum = parseFloat(nexIn);
		if(isNaN(curInNum) || isNaN(nexInNum)){
			return (curIn.localeCompare(nexIn)) * table_this.flag;
		}
		//console.log((curInNum - nexInNum)+"a-b");				
		return (curInNum - nexInNum)*table_this.flag;
	});
	//console.log(ary);

	var frg = document.createDocumentFragment();
	for(var i = 0; i < ary.length; i++){
		frg.appendChild(ary[i]);
	}
	oTbody.appendChild(frg);
	frg = null;
	changeBg();
}

for(var i = 0; i <oThs.length; i++){
	var curTh = oThs[i];
	if(curTh.className === "cur"){
		curTh.flag = -1;
		curTh.index = i;
		curTh.onclick = function(){
			sortList.call(this,this.index);
		}
	}

}
