#pragma strict

class Count extends System.object {
    constructor(min, max){
        this = super();
        this.minimum = min;
        this.maximum = max;
    }
}

var columns = 8;
var rows = 8;
var wallCount = Count(5, 9);
var foodCount = Count(1, 5);
var exit;
var floorTiles = [];
var wallTiles = [];
var foodTiles = [];
var enemyTiles = [];
var outerWallTiles = [];

private var boardHolder;
private var gridPositions = [];

private function initialiseList() {
    gridPositions = [];
    for (var x = 1; x < columns - 1; x++){
        for(var y = 1; y < rows -1; y++){
        	gridPositions.push(new Vector2(x,y));
        }
    }
}

private function boardSetup() {
	boardHolder = (new GameObject("Board")).transform;
    for (var x = -1; x < columns + 1; x++){
        for(var y = -1; y < rows + 1; y++){
        	var toInstantiate = floorTiles[Random.Range(0, floorTiles.length)];
        }
    }
}

function Start () {

}

function Update () {

}