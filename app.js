
var allSquares = document.getElementsByClassName("boardsquare");

for (var i = 0; i < allSquares.length; i++) {
	allSquares[i].addEventListener("click", addXO);
}

var counter = 0;

function addXO (event){
	if (event.target.innerHTML.length===0) {
		//document.querySelector("h1").innerHTML="PLAYER ONE, please select a square.";
		if (counter%2===0) {
			event.target.innerHTML="x";
			document.querySelector("h1").innerHTML="PLAYER TWO, it's your move.";
			event.target.style.backgroundColor="orange";
		} else {
			event.target.innerHTML="o";
			document.querySelector("h1").innerHTML="PLAYER ONE, it's your move.";
			event.target.style.backgroundColor="gold";
		}
	counter++;
	}
	findWinner ();
}

function findWinner() {
	winCombo("x");
	winCombo("o");
}

function winCombo(player) {
	var playerName;
	if (player==="x") {
		playerName="Player One";
	} else if (player==="o") {
		playerName="Player Two";
	}

	if (allSquares[0].innerHTML===player && allSquares[1].innerHTML===player && allSquares[2].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[3].innerHTML===player && allSquares[4].innerHTML===player && allSquares[5].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[6].innerHTML===player && allSquares[7].innerHTML===player && allSquares[8].innerHTML===player) {
		alert(playerName + " is the winner!");	
		removeXO (); 
	} else if (allSquares[0].innerHTML===player && allSquares[3].innerHTML===player && allSquares[6].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[1].innerHTML===player && allSquares[4].innerHTML===player && allSquares[7].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[2].innerHTML===player && allSquares[5].innerHTML===player && allSquares[8].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[2].innerHTML===player && allSquares[4].innerHTML===player && allSquares[6].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} else if (allSquares[0].innerHTML===player && allSquares[4].innerHTML===player && allSquares[8].innerHTML===player) {
		alert(playerName + " is the winner!");
		removeXO (); 
	} 
}

function resetButton () {
	var reset = document.getElementsByTagName("button");
	reset[0].addEventListener("click", removeXO);
}	
function removeXO () {
	for (var i = 0; i < allSquares.length; i++) {
		allSquares[i].innerHTML="";
		allSquares[i].style.backgroundColor="white";
	}
	document.querySelector("h1").innerHTML="Player One, please start the game by selecting a square.";
	counter = 0;
}
resetButton();
// when reset button is clicked, remove all inner html from all boardsquare