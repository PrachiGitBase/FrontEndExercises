// Initialization scripts
var newArr=[];
var color = null;
// Function for creating chessboard 
document.addEventListener('DOMContentLoaded', function() {
    var white = "<div class='chessboardCell whiteCell' onclick='findAllFourDiagonalOnSquareClick(event)' ";
    var black = "<div class='chessboardCell blackCell' onclick='findAllFourDiagonalOnSquareClick(event)' ";
	for (var row = 0; row < 8; row++) {
        var startWithWhite = row % 2;
        for (var col = 0; col < 8; col++) {
            var cellType = startWithWhite ? black : white;
            startWithWhite = !startWithWhite;
            cellType = cellType + "id = '" + row + "," + col + "'>";
            document.getElementById("board").innerHTML += cellType;
        }
    }
});
// Onclick function for finding the all 4 diagonals of partiular chessboard square click 
function findAllFourDiagonalOnSquareClick(evt) {
	//Reset Color function declarations
	resetChessCellColor(newArr,color);
    var chessCellId = "";
    var uniqueId = evt.target.id;
	newArr=[];
	color=null;
	evt.target.style = "Background-color:red";
	color = evt.target.classList[1] == "blackCell"?"black":"white";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var k = i.toString() + "," + j.toString();
            chessCellId = GetClickedChessCellId(evt,"diagBackDownArr");
            if (k == chessCellId) {
                evt.target.id = chessCellId;
                newArr.push(chessCellId);
            }
        }
    }
    evt.target.id = uniqueId;
    for (var i = 7; i >= 0; i--) {
        for (var j = 7; j >= 0; j--) {
            var k = i.toString() + "," + j.toString();
            chessCellId = GetClickedChessCellId(evt,"diagBackUpArr");
            if (k == chessCellId) {
                evt.target.id = chessCellId;
                newArr.push(chessCellId);
            }
		}
    }
    evt.target.id = uniqueId;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var k = i.toString() + "," + j.toString();
            chessCellId = GetClickedChessCellId(evt,"diagForDownArr");
            if (k == chessCellId) {
                evt.target.id = chessCellId;
                newArr.push(chessCellId);
            }
        }
    }
    evt.target.id = uniqueId;
    for (var i = 7; i >= 0; i--) {
        for (var j = 7; j >= 0; j--) {
            var k = i.toString() + "," + j.toString();
           chessCellId = GetClickedChessCellId(evt,"diagForUpArr");
            if (k == chessCellId) {
                evt.target.id = chessCellId;
                newArr.push(chessCellId);
            }
        }
    }
	evt.target.id = uniqueId;
	newArr.push(evt.target.id);
	colorDiagonalSideOfChessBoard(newArr,"red");
}
// Function for coloring all the diagonal squares of clicked squares 
function colorDiagonalSideOfChessBoard(newArr, color) {
    newArr.sort();
    for (var i = 0; i < newArr.length; i++) {
		document.getElementById(newArr[i]).style.backgroundColor = color;
	}
}
// Function for getting chessCellId of all 4 diagonals 
function GetClickedChessCellId(evt,type)
{
	 var spiltId = evt.target.id.split(",");
	 if(type == "diagBackDownArr")
	 {
		 spiltId[0] = parseInt(spiltId[0]) + 1;
		 spiltId[1] = parseInt(spiltId[1]) + 1;
	 }
	 	 if(type == "diagBackUpArr")
	 {
		 spiltId[0] = parseInt(spiltId[0]) - 1;
         spiltId[1] = parseInt(spiltId[1]) - 1;
	 }
	 	 if(type == "diagForDownArr")
	 {
		 spiltId[0] = parseInt(spiltId[0]) + 1;
         spiltId[1] = parseInt(spiltId[1]) - 1;
	 }
	 	 if(type == "diagForUpArr")
	 {
		spiltId[0] = parseInt(spiltId[0]) - 1;
        spiltId[1] = parseInt(spiltId[1]) + 1;
	 }
	
	chessCellId = spiltId[0].toString() + "," + spiltId[1].toString();
	return chessCellId;
}
// reset color function defination 
function resetChessCellColor(newArr,color)
{
	 if(newArr.length>0 && color != null)
	{
		colorDiagonalSideOfChessBoard(newArr,color);
	} 
}