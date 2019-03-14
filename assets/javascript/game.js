var luke = {
	hp: 120,
	name: "Luke Skywalker",
	attack: 0,
	base: 8,
	defend: 15,
	player: false,
	defender: false,
	death: false,
}

var vader = {
	hp: 150,
	name: "Darth Vader",
	attack: 0,
	base: 10,
	defend: 9,
	player: false,
	defender: false,
	death: false,
}
var maul = {
	hp: 100,
	name: "Darth Moul",
	attack: 0,
	base: 14,
	defend:8,
	player: false,
	defender: false,
	death: false,
}

var yoda = {
	hp: 180,
	name: "Yoda",
	attack: 0,
	base: 8,
	defend: 15,
	player: false,
	defender: false,
	death: false,
}

var playerChosen = false;
var defenderCosen = false;
var choosing = true;

function reset() {
	$(".chosen").hide();
	$(".enemy").hide();
	$(".defender").hide();
	$(".luke-health").text(luke.hp);
	$(".vader-health").text(vader.hp);
	$(".maul-health").text(maul.hp);
	$(".yoda-health").text(yoda.hp);
	luke.player = false;
	vader.player = false;
	maul.player = false;
	yoda.player = false;
	luke.defender = false;
	vader.defender = false;
	maul.defender = false;
	yoda.defender = false;
	luke.death = false;
	vader.death = false;
	maul.death = false;
	yoda.death = false;
	playerChosen = false;
	defenderCosen = false;
	choosing = true;
}


$(document).ready(function () {
	console.log(luke.attack);
	console.log("ready!");
	
	reset();
	///fase1 choose character to play
	//luke player
	$(".luke-char").click(function () {
		luke.player = true;
		playerChosen = true;
		$(".characters").hide();
		$(".enemy").show();
		$(".luke-enemy").hide();
		$(".chosen").show();
		$("#choosenew").text("");
		$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
		//'visibility','hidden o 'display','hide'
	});


	//vader player
	$(".vader-char").click(function () {
		vader.player = true;
		playerChosen = true;
		$(".characters").hide();
		$(".enemy").show();
		$(".vader-enemy").hide();
		$(".chosen").show();
		$("#choosenew").text("");
		$(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
	});

	//maul player
	$(".maul-char").click(function () {
		maul.player = true;
		playerChosen = true;
		$(".characters").hide();
		$(".enemy").show();
		$(".maul-enemy").hide();
		$(".chosen").show();
		$("#choosenew").text("");
		$(".luke-chosen, .vader-chosen, .yoda-chosen").hide();
	});
	
	//yoda player
	$(".yoda-char").click(function () {
		yoda.player = true;
		playerChosen = true;
		$(".characters").hide();
		$(".enemy").show();
		$(".yoda-enemy").hide();
		$(".chosen").show();
		$("attack").hide();
		$(".luke-chosen, .vader-chosen, .maul-chosen").hide();
	});


	//fase 2 Select defender
	//luke defender
	$(".luke-enemy").click(function () {
		$("#choosenew").text("");
		$("#attack").show();
		luke.defender = true;
		defenderCosen = true;
		if (vader.player && choosing) {
			console.log(choosing);
			$(".characters").hide();
			$(".enemy").show();
			$(".luke-enemy, .vader-enemy").hide();
			if(yoda.death){
				$(".yoda-enemy").hide();	
				}
				if(maul.death){
					$(".maul-enemy").hide();	
				}
			$(".chosen").show();
			$(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
			console.log(choosing);

		}
		else if (maul.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".luke-enemy, .maul-enemy").hide();
			if(yoda.death){
				$(".yoda-enemy").hide();	
				}
				if(vader.death){
					$(".vader-enemy").hide();	
					}
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".luke-enemy, .yoda-enemy").hide();
			if(vader.death){
				$(".vader-enemy").hide();	
				}
				if(maul.death){
					$(".maul-enemy").hide();	
				}
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;


		}

	});
	//vader defender
	$(".vader-enemy").click(function () {
		$("#choosenew").text("");
		$("#attack").show();
		vader.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".vader-enemy, .luke-enemy").hide();
			if(yoda.death){
				$(".yoda-enemy").hide();	
			}
			if(maul.death){
				$(".maul-enemy").hide();	
			}
			$(".chosen").show();
			$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (maul.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".vader-enemy, .maul-enemy").hide();
			if(yoda.death){
				$(".yoda-enemy").hide();	
				}
				if(luke.death){
					$(".luke-enemy").hide();	
					}
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".vader-enemy, .yoda-enemy").hide();
			if(luke.death){
				$(".luke-enemy").hide();	
				}
				if(maul.death){
					$(".maul-enemy").hide();	
				}
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}

	});


	//maul defender
	$(".maul-enemy").click(function () {
		$("#choosenew").text("");
		$("#attack").show();
		maul.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".maul-enemy, .luke-enemy").hide();
			if(vader.death){
			$(".vader-enemy").hide();	
			}
			if(yoda.death){
				$(".yoda-enemy").hide();	
				}
			$(".chosen").show();
			$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (vader.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".maul-enemy, .vader-enemy").hide();
			if(yoda.death){
				$(".yoda-enemy").hide();	
				}
				if(luke.death){
					$(".luke-enemy").hide();	
					}
			$(".chosen").show();
			$(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".maul-enemy, .yoda-enemy").hide();
			if(vader.death){
				$(".vader-enemy").hide();	
			}
			if(luke.death){
				$(".luke-enemy").hide();	
				}
			$(".chosen").show();
			$(".luke-chosen, .maul-chosen, .vader-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
	});

	//yoda defender
	$(".yoda-enemy").click(function () {
		$("#choosenew").text("");
		$("#attack").show();
		yoda.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".yoda-enemy, .luke-enemy").hide();
			if(vader.death){
				$(".vader-enemy").hide();	
			}
			if(maul.death){
				$(".maul-enemy").hide();	
			}
			$(".chosen").show();
			$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
		else if (vader.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".yoda-enemy, .vader-enemy").hide();
			if(luke.death){
				$(".luke-enemy").hide();	
				}
				if(maul.death){
					$(".maul-enemy").hide();	
				}
			$(".chosen").show();
			$(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
		else if (maul.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".yoda-enemy, .maul-enemy").hide();
			if(vader.death){
				$(".vader-enemy").hide();	
			}
			if(luke.death){
				$(".luke-enemy").hide();	
				}
			$(".chosen").show();
			$(".luke-chosen, .vader-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
	});

	

$("#attack").click(function(){
	//luke vs vader
if(luke.player){
if (luke.player && vader.defender && luke.hp>0 && vader.hp>0){
	console.log("fighting");
	luke.attack += luke.base
luke.hp-=vader.defend;
vader.hp-=luke.attack;
$("#playermsg").text("You have attacked "+vader.name+" whith an attack power of "+ luke.attack);
$("#defendermsg").text(vader.name+" Attacked you whith a counter attack power of "+ vader.defend);

console.log("luke hp" + luke.hp);
	console.log("vader hp" + vader.hp);

$(".luke-health").text(luke.hp);
$(".vader-health").text(vader.hp);
}
if (vader.hp<1 && luke.hp > 0 && !vader.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".vader-defender ").hide();
	$(".vader-enemy ").hide();
	vader.death=true;
	$("#attack").hide();
	alert("vader death");
}
else if (luke.hp<1 && vader.hp > 0){
	$("#attack").hide();
	alert("loose");
}
else if(luke.hp<0 && vader.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}


//luke vs maul
if (luke.player && maul.defender && luke.hp>0 && maul.hp>0){
	console.log("fighting");
	
		luke.attack += luke.base;
luke.hp-=maul.defend;
maul.hp-=luke.attack;
$("#playermsg").text("You have attacked "+maul.name+" whith an attack power of "+ luke.attack);
$("#defendermsg").text(maul.name+" Attacked you whith a counter attack power of "+ maul.defend);
console.log("luke hp" + luke.hp);
	console.log("maul hp" + maul.hp);
$(".luke-health").text(luke.hp);
$(".maul-health").text(maul.hp);
}
if (maul.hp<1 && luke.hp > 0 && !maul.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".maul-defender ").hide();
	$(".maul-enemy ").hide();
	maul.death=true;
	$("#attack").hide();
	alert("maul death");
}
else if (luke.hp<1 && maul.hp > 0 ){
	$("#attack").hide();
	alert("loose");
}
else if(luke.hp<0 && maul.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}


//luke vs yoda
if (luke.player && yoda.defender && luke.hp>0 && yoda.hp>0){
	console.log("fighting");
			luke.attack += luke.base;
luke.hp-=yoda.defend;
yoda.hp-=luke.attack;
$("#playermsg").text("You have attacked "+yoda.name+" whith an attack power of "+ luke.attack);
$("#defendermsg").text(yoda.name+" Attacked you whith a counter attack power of "+ yoda.defend);
console.log("luke hp" + luke.hp);
	console.log("yoda hp" + yoda.hp);
$(".luke-health").text(luke.hp);
$(".yoda-health").text(yoda.hp);
}
if (yoda.hp<1 && luke.hp > 0 && !yoda.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".yoda-defender ").hide();
	$(".yoda-enemy ").hide();
	yoda.death=true;
	$("#attack").hide();
	alert("yoda death");
}
else if (luke.hp<1 && yoda.hp > 0 ){
	$("#attack").hide();
	alert("loose");
}
else if(luke.hp<0 && yoda.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}
}

//vader vs luke
if(vader.player){
if (vader.player && luke.defender && vader.hp>0 && luke.hp>0){
	console.log("fighting");
			vader.attack += vader.base;
vader.hp-=luke.defend;
luke.hp-=vader.attack;
$("#playermsg").text("You have attacked "+luke.name+" whith an attack power of "+ vader.attack);
$("#defendermsg").text(luke.name+" Attacked you whith a counter attack power of "+ luke.defend);
console.log("vader hp" + vader.hp);
	console.log("luke hp" + luke.hp);
$(".vader-health").text(vader.hp);
$(".luke-health").text(luke.hp);
}
if (luke.hp<1 && vader.hp > 0 && !luke.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".luke-defender ").hide();
	$(".luke-enemy ").hide();
	luke.death=true;
	$("#attack").hide();
	alert("luke death");
}
else if (vader.hp<1 && luke.hp > 0 ){
	$("#attack").hide();
	alert("loose with luke");
}
else if(vader.hp<0 && luke.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}



//vader vs maul
if (vader.player && maul.defender && vader.hp>0 && maul.hp>0){
	console.log("fighting");
			vader.attack += vader.base;
vader.hp-=maul.defend;
maul.hp-=vader.attack;
$("#playermsg").text("You have attacked "+maul.name+" whith an attack power of "+ vader.attack);
$("#defendermsg").text(maul.name+" Attacked you whith a counter attack power of "+ maul.defend);
console.log("vader hp" + vader.hp);
	console.log("maul hp" + maul.hp);
$(".vader-health").text(vader.hp);
$(".maul-health").text(maul.hp);
}
if (maul.hp<1 && vader.hp > 0 && !maul.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".maul-defender ").hide();
	$(".maul-enemy ").hide();
	maul.death=true;
	$("#attack").hide();
	alert("maul death");
}
else if (vader.hp<1 && maul.hp > 0 ){
	$("#attack").hide();
	alert("loose with maul");
}
else if(vader.hp<0 && maul.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}



//vader vs yoda
if (vader.player && yoda.defender && vader.hp>0 && yoda.hp>0){
	console.log("fighting");
			vader.attack += vader.base;
vader.hp-=yoda.defend;
yoda.hp-=vader.attack;
$("#playermsg").text("You have attacked "+yoda.name+" whith an attack power of "+ vader.attack);
$("#defendermsg").text(yoda.name+" Attacked you whith a counter attack power of "+ yoda.defend);
console.log("vader hp" + vader.hp);
	console.log("yoda hp" + yoda.hp);
$(".vader-health").text(vader.hp);
$(".yoda-health").text(yoda.hp);
}
if (yoda.hp<1 && vader.hp > 0 && !yoda.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".yoda-defender ").hide();
	$(".yoda-enemy ").hide();
	yoda.death=true;
	$("#attack").hide();
	alert("yoda death");
}
else if (vader.hp<1 && yoda.hp > 0 ){
	$("#attack").hide();
	alert("loose with yoda");
}
else if(vader.hp<0 && yoda.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}
}


//maul vs luke
if(maul.player){
if (maul.player && luke.defender && maul.hp>0 && luke.hp>0){
	console.log("fighting");
			maul.attack += maul.base;
maul.hp-=luke.defend;
luke.hp-=maul.attack;
$("#playermsg").text("You have attacked "+luke.name+" whith an attack power of "+ maul.attack);
$("#defendermsg").text(luke.name+" Attacked you whith a counter attack power of "+ luke.defend);
console.log("maul hp" + maul.hp);
	console.log("luke hp" + luke.hp);
$(".maul-health").text(maul.hp);
$(".luke-health").text(luke.hp);
}
if (luke.hp<1 && maul.hp > 0 && !luke.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".luke-defender ").hide();
	$(".luke-enemy ").hide();
	luke.death=true;
	$("#attack").hide();
	alert("luke death");
}
else if (maul.hp<1 && luke.hp > 0 ){
	$("#attack").hide();
	alert("loose with luke");
}
else if(maul.hp<0 && luke.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}

//maul vs vader
	if (maul.player && vader.defender && maul.hp>0 && vader.hp>0){
		console.log("fighting");
				maul.attack += maul.base;
	maul.hp-=vader.defend;
	vader.hp-=maul.attack;
	$("#playermsg").text("You have attacked "+vader.name+" whith an attack power of "+ maul.attack);
	$("#defendermsg").text(vader.name+" Attacked you whith a counter attack power of "+ vader.defend);
	console.log("maul hp" + maul.hp);
		console.log("vader hp" + vader.hp);
	$(".maul-health").text(maul.hp);
	$(".vader-health").text(vader.hp);
	}
	if (vader.hp<1 && maul.hp > 0 && !vader.death){
		
		choosing=true;
		$("#choosenew").text("choose new enemy to figth")
		$(".vader-defender ").hide();
		$(".vader-enemy ").hide();
		vader.death=true;
		$("#attack").hide();
		alert("vader death");
	}
	else if (maul.hp<1 && vader.hp > 0 ){
		$("#attack").hide();
		alert("loose with vader");
	}
	else if(maul.hp<0 && vader.hp<0){
		$("#attack").hide();
		alert("both death whith last strike")
	}

//maul vs yoda
if (maul.player && yoda.defender && maul.hp>0 && yoda.hp>0){
	console.log("fighting");
			maul.attack += maul.base;
maul.hp-=yoda.defend;
yoda.hp-=maul.attack;
$("#playermsg").text("You have attacked "+yoda.name+" whith an attack power of "+ maul.attack);
$("#defendermsg").text(yoda.name+" Attacked you whith a counter attack power of "+ yoda.defend);
console.log("maul hp" + maul.hp);
	console.log("yoda hp" + yoda.hp);
$(".maul-health").text(maul.hp);
$(".yoda-health").text(yoda.hp);
}
if (yoda.hp<1 && maul.hp > 0 && !yoda.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".yoda-defender ").hide();
	$(".yoda-enemy ").hide();
	yoda.death=true;
	$("#attack").hide();
	alert("yoda death");
}
else if (maul.hp<1 && yoda.hp > 0 ){
	$("#attack").hide();
	alert("loose with yoda");
}
else if(maul.hp<0 && yoda.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}

}


//yoda vs luke
if(yoda.player){
	if (yoda.player && luke.defender && yoda.hp>0 && luke.hp>0){
		console.log("fighting");
				yoda.attack += yoda.base;
	yoda.hp-=luke.defend;
	luke.hp-=yoda.attack;
	$("#playermsg").text("You have attacked "+luke.name+" whith an attack power of "+ yoda.attack);
	$("#defendermsg").text(luke.name+" Attacked you whith a counter attack power of "+ luke.defend);
	console.log("yoda hp" + yoda.hp);
		console.log("luke hp" + luke.hp);
	$(".yoda-health").text(yoda.hp);
	$(".luke-health").text(luke.hp);
	}
	if (luke.hp<1 && yoda.hp > 0 && !luke.death){
		
		choosing=true;
		$("#choosenew").text("choose new enemy to figth")
		$(".luke-defender ").hide();
		$(".luke-enemy ").hide();
		luke.death=true;
		$("#attack").hide();
		alert("luke death");
	}
	else if (yoda.hp<1 && luke.hp > 0 ){
		$("#attack").hide();
		alert("loose with luke");
	}
	else if(yoda.hp<0 && luke.hp<0){
		$("#attack").hide();
		alert("both death whith last strike")
	}

//yoda vs vader
	if (yoda.player && vader.defender && yoda.hp>0 && vader.hp>0){
		console.log("fighting");
				yoda.attack += yoda.base;
	yoda.hp-=vader.defend;
	vader.hp-=yoda.attack;
	$("#playermsg").text("You have attacked "+vader.name+" whith an attack power of "+ yoda.attack);
	$("#defendermsg").text(vader.name+" Attacked you whith a counter attack power of "+ vader.defend);
	console.log("yoda hp" + yoda.hp);
		console.log("vader hp" + vader.hp);
	$(".yoda-health").text(yoda.hp);
	$(".vader-health").text(vader.hp);
	}
	if (vader.hp<1 && yoda.hp > 0 && !vader.death){
		
		choosing=true;
		$("#choosenew").text("choose new enemy to figth")
		$(".vader-defender ").hide();
		$(".vader-enemy ").hide();
		vader.death=true;
		$("#attack").hide();
		alert("vader death");
	}
	else if (yoda.hp<1 && vader.hp > 0 ){
		$("#attack").hide();
		alert("loose with vader");
	}
	else if(yoda.hp<0 && vader.hp<0){
		$("#attack").hide();
		alert("both death whith last strike")
	}

//yoda vs maul
if (yoda.player && maul.defender && yoda.hp>0 && maul.hp>0){
	console.log("fighting");
			yoda.attack += yoda.base;
yoda.hp-=maul.defend;
maul.hp-=yoda.attack;
$("#playermsg").text("You have attacked "+maul.name+" whith an attack power of "+ yoda.attack);
$("#defendermsg").text(maul.name+" Attacked you whith a counter attack power of "+ maul.defend);
console.log("yoda hp" + yoda.hp);
	console.log("maul hp" + maul.hp);
$(".yoda-health").text(yoda.hp);
$(".maul-health").text(maul.hp);
}
if (maul.hp<1 && yoda.hp > 0 && !maul.death){
	
	choosing=true;
	$("#choosenew").text("choose new enemy to figth")
	$(".maul-defender ").hide();
	$(".maul-enemy ").hide();
	maul.death=true;
	$("#attack").hide();
	alert("maul death");
}
else if (yoda.hp<1 && maul.hp > 0 ){
	$("#attack").hide();
	alert("loose with maul");
}
else if(yoda.hp<0 && maul.hp<0){
	$("#attack").hide();
	alert("both death whith last strike")
}


}

///End of game with defenders death
if(luke.player && yoda.death && vader.death && maul.death){
	$("#attack").hide();
	alert("won the game");
}

if(vader.player && yoda.death && luke.death && maul.death){
	$("#attack").hide();
	alert("won the game");
}

if(maul.player && yoda.death && luke.death && vader.death){
	$("#attack").hide();
	alert("won the game");
}

if(yoda.player && maul.death && luke.death && vader.death){
	$("#attack").hide();
	alert("won the game");
}



});
//end attack



});
//final