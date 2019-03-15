
var luke = {
	hp: 125,
	name: "Luke Skywalker",
	attack: 0,
	base: 9,
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
	defend: 13,
	player: false,
	defender: false,
	death: false,
}
var maul = {
	hp: 100,
	name: "Darth Moul",
	attack: 0,
	base: 14,
	defend: 8,
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
	$(".btn").hide();
	$(".chosen-cont").hide();
	$(".enemy-cont").hide();
	$(".defender").hide();
	$(".luke-health").text(luke.hp);
	$(".vader-health").text(vader.hp);
	$(".maul-health").text(maul.hp);
	$(".yoda-health").text(yoda.hp);
	$("#win-lose").text("" );
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
	setTimeout(function () {
		$("#startpage").hide();
	}, 150);
}

$(document).ready(function () {
	console.log("ready!");
	reset();

	///fase1 choose character to play
	//luke player
	$(".luke-char").click(function () {
		luke.player = true;
		playerChosen = true;
		$(".character-cont").hide();
		$(".enemy-cont").show();
		$(".luke-enemy").hide();
		$(".chosen-cont").show();
		$("#attack").hide();
		$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
		$("#choosenew").text("Choose an enemy to figth");
		//'visibility','hidden o 'display','hide'
	});

	//vader player
	$(".vader-char").click(function () {
		vader.player = true;
		playerChosen = true;
		$(".character-cont").hide();
		$(".enemy-cont").show();
		$(".vader-enemy").hide();
		$(".chosen-cont").show();
		$("#choosenew").text("Choose an enemy to figth");
		$("#attack").hide();
		$(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
	});

	//maul player
	$(".maul-char").click(function () {
		maul.player = true;
		playerChosen = true;
		$(".character-cont").hide();
		$(".enemy-cont").show();
		$(".maul-enemy").hide();
		$(".chosen-cont").show();
		$("#choosenew").text("Choose an enemy to figth");
		$("#attack").hide();
		$(".luke-chosen, .vader-chosen, .yoda-chosen").hide();
	});

	//yoda player
	$(".yoda-char").click(function () {
		yoda.player = true;
		playerChosen = true;
		$(".character-cont").hide();
		$(".enemy-cont").show();
		$(".yoda-enemy").hide();
		$(".chosen-cont").show();
		$("#choosenew").text("Choose an enemy to figth");
		$("#attack").hide();
		$(".luke-chosen, .vader-chosen, .maul-chosen").hide();
	});

	//fase 2 Select defender
	//luke defender
	$(".luke-enemy").click(function () {
		$("#choosenew").text("");
		$("#win-lose").text("");
		$("#attack").show();
		luke.defender = true;
	//	defenderChosen = true;
		if (vader.player && choosing) {
			console.log(choosing);
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".luke-enemy, .vader-enemy").hide();
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (maul.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".luke-enemy, .maul-enemy").hide();
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			//$(".chosen-cont").show();
			// $(".vader-chosen, .luke-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".luke-enemy, .yoda-enemy").hide();
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
	});

	//vader defender
	$(".vader-enemy").click(function () {
		$("#choosenew").text("");
		$("#win-lose").text("");
		$("#attack").show();
		vader.defender = true;
		if (luke.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".vader-enemy, .luke-enemy").hide();
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			//	$(".chosen-cont").show();
			//$(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (maul.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".vader-enemy, .maul-enemy").hide();
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".vader-chosen, .luke-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".vader-enemy, .yoda-enemy").hide();
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}
	});

	//maul defender
	$(".maul-enemy").click(function () {
		$("#choosenew").text("");
		$("#win-lose").text("");
		$("#attack").show();
		maul.defender = true;
		if (luke.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".maul-enemy, .luke-enemy").hide();
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (vader.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".maul-enemy, .vader-enemy").hide();
			if (yoda.death) {
				$(".yoda-enemy").hide();
			}
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
		else if (yoda.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".maul-enemy, .yoda-enemy").hide();
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".luke-chosen, .maul-chosen, .vader-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
	});

	//yoda defender
	$(".yoda-enemy").click(function () {
		$("#choosenew").text("");
		$("#win-lose").text("");
		$("#attack").show();
		yoda.defender = true;
		if (luke.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".yoda-enemy, .luke-enemy").hide();
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".vader-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
		else if (vader.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".yoda-enemy, .vader-enemy").hide();
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			if (maul.death) {
				$(".maul-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".luke-chosen, .maul-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
		else if (maul.player && choosing) {
			$(".character-cont").hide();
			$(".enemy-cont").show();
			$(".yoda-enemy, .maul-enemy").hide();
			if (vader.death) {
				$(".vader-enemy").hide();
			}
			if (luke.death) {
				$(".luke-enemy").hide();
			}
			// $(".chosen-cont").show();
			// $(".luke-chosen, .vader-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
	});

	//Fase3
	//Attack!!!
	$("#attack").click(function () {
		$(".btn").show();

		//luke vs vader
		if (luke.player) {
			if (vader.defender) {
				if (luke.player && vader.defender && luke.hp > 0 && vader.hp > 0) {
					console.log("fighting");
					luke.hp -= vader.defend;
					vader.hp -= luke.attack;
					luke.attack += luke.base;
					$("#playermsg").text("You have attacked " + vader.name + " whith an attack power of " + luke.attack);
					$("#defendermsg").text(vader.name + " Attacked you whith a counter attack power of " + vader.defend);
					// console.log("luke hp" + luke.hp);
					// console.log("vader hp" + vader.hp);
					$(".luke-health").text(luke.hp);
					$(".vader-health").text(vader.hp);
				}
				if (vader.hp < 1 && luke.hp > 0 && !vader.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth")
					$("#win-lose").text("You defeated " + vader.name);
					$(".vader-defender ").hide();
					$(".vader-enemy ").hide();
					$(".defender").hide();
					vader.death = true;
					vader.defend = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (luke.hp < 1 && vader.hp > 0) {
					$("#attack").hide();
					$("#win-lose").text(vader.name + " defeated you");
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (luke.hp < 1 && vader.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//luke vs maul
			if (maul.defender) {
					if (luke.player && maul.defender && luke.hp > 0 && maul.hp > 0) {
					console.log("fighting");
					luke.hp -= maul.defend;
					maul.hp -= luke.attack;
					luke.attack += luke.base;
					$("#playermsg").text("You have attacked " + maul.name + " whith an attack power of " + luke.attack);
					$("#defendermsg").text(maul.name + " Attacked you whith a counter attack power of " + maul.defend);
					// console.log("luke hp" + luke.hp);
					// console.log("maul hp" + maul.hp);
					$(".luke-health").text(luke.hp);
					$(".maul-health").text(maul.hp);
				}
				if (maul.hp < 1 && luke.hp > 0 && !maul.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + maul.name);
					$(".defender").hide();
					$(".maul-defender ").hide();
					$(".maul-enemy ").hide();
					maul.death = true;
					maul.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (luke.hp < 1 && maul.hp > 0) {
					$("#attack").hide();
					$("#win-lose").text(maul.name + " defeated you");
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (luke.hp < 1 && maul.hp < 1) {
					$("#attack").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
					
				}
			}

			//luke vs yoda
			if (yoda.defender) {
				if (luke.player && yoda.defender && luke.hp > 0 && yoda.hp > 0) {
					console.log("fighting");
					luke.hp -= yoda.defend;
					yoda.hp -= luke.attack;
					luke.attack += luke.base;
					$("#playermsg").text("You have attacked " + yoda.name + " whith an attack power of " + luke.attack);
					$("#defendermsg").text(yoda.name + " Attacked you whith a counter attack power of " + yoda.defend);
					// console.log("luke hp" + luke.hp);
					// console.log("yoda hp" + yoda.hp);
					$(".luke-health").text(luke.hp);
					$(".yoda-health").text(yoda.hp);
				}
				if (yoda.hp < 1 && luke.hp > 0 && !yoda.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + yoda.name);
					$(".defender").hide();
					$(".yoda-defender ").hide();
					$(".yoda-enemy ").hide();
					yoda.death = true;
					yoda.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (luke.hp < 1 && yoda.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
					$("#win-lose").text(yoda.name + " defeated you");
				}
				else if (luke.hp < 1 && yoda.hp < 1 && yoda.defender) {
					$("#attack").hide();
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					
				}
			}
		}

		//vader vs luke
		if (vader.player) {
			if (luke.defender) {
				if (vader.player && luke.defender && vader.hp > 0 && luke.hp > 0) {
					console.log("fighting");
					vader.hp -= luke.defend;
					luke.hp -= vader.attack;
					vader.attack += vader.base;
					$("#playermsg").text("You have attacked " + luke.name + " whith an attack power of " + vader.attack);
					$("#defendermsg").text(luke.name + " Attacked you whith a counter attack power of " + luke.defend);
					// console.log("vader hp" + vader.hp);
					// console.log("luke hp" + luke.hp);
					$(".vader-health").text(vader.hp);
					$(".luke-health").text(luke.hp);
				}
				if (luke.hp < 1 && vader.hp > 0 && !luke.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + luke.name);
					$(".defender").hide();
					$(".luke-defender ").hide();
					$(".luke-enemy ").hide();
					luke.death = true;
					luke.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && luke.hp > 0) {
					$("#attack").hide();
					(".defender").hide();
					$("#win-lose").text(luke.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && luke.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//vader vs maul
			if (maul.defender) {
				if (vader.player && maul.defender && vader.hp > 0 && maul.hp > 0) {
					console.log("fighting");
					vader.hp -= maul.defend;
					maul.hp -= vader.attack;
					vader.attack += vader.base;
					$("#playermsg").text("You have attacked " + maul.name + " whith an attack power of " + vader.attack);
					$("#defendermsg").text(maul.name + " Attacked you whith a counter attack power of " + maul.defend);
					// console.log("vader hp" + vader.hp);
					// console.log("maul hp" + maul.hp);
					$(".vader-health").text(vader.hp);
					$(".maul-health").text(maul.hp);
				}
				if (maul.hp < 1 && vader.hp > 0 && !maul.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + maul.name);
					$(".defender").hide();
					$(".maul-defender ").hide();
					$(".maul-enemy ").hide();
					maul.death = true;
					maul.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && maul.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#win-lose").text(maul.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && maul.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//vader vs yoda
			if (yoda.defender) {
				if (vader.player && yoda.defender && vader.hp > 0 && yoda.hp > 0) {
					console.log("fighting");					
					vader.hp -= yoda.defend;
					yoda.hp -= vader.attack;
					vader.attack += vader.base;
					$("#playermsg").text("You have attacked " + yoda.name + " whith an attack power of " + vader.attack);
					$("#defendermsg").text(yoda.name + " Attacked you whith a counter attack power of " + yoda.defend);
					// console.log("vader hp" + vader.hp);
					// console.log("yoda hp" + yoda.hp);
					$(".vader-health").text(vader.hp);
					$(".yoda-health").text(yoda.hp);
				}
				if (yoda.hp < 1 && vader.hp > 0 && !yoda.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + yoda.name);
					$(".defender").hide();
					$(".yoda-defender ").hide();
					$(".yoda-enemy ").hide();
					yoda.death = true;
					yoda.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && yoda.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#win-lose").text(yoda.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (vader.hp < 1 && yoda.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}
		}

		//maul vs luke

		if (maul.player) {
			if (luke.defender) {
				if (maul.player && luke.defender && maul.hp > 0 && luke.hp > 0) {
					console.log("fighting");					
					maul.hp -= luke.defend;
					luke.hp -= maul.attack;
					maul.attack += maul.base;
					$("#playermsg").text("You have attacked " + luke.name + " whith an attack power of " + maul.attack);
					$("#defendermsg").text(luke.name + " Attacked you whith a counter attack power of " + luke.defend);
					// console.log("maul hp" + maul.hp);
					// console.log("luke hp" + luke.hp);
					$(".maul-health").text(maul.hp);
					$(".luke-health").text(luke.hp);
				}
				if (luke.hp < 1 && maul.hp > 0 && !luke.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth")
					$("#win-lose").text("You defeated " + luke.name);
					$(".defender").hide();
					$(".luke-defender ").hide();
					$(".luke-enemy ").hide();
					luke.death = true;
					luke.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && luke.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#win-lose").text(luke.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && luke.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//maul vs vader
			if (vader.defender) {
				if (maul.player && vader.defender && maul.hp > 0 && vader.hp > 0) {
					console.log("fighting");					
					maul.hp -= vader.defend;
					vader.hp -= maul.attack;
					maul.attack += maul.base;
					$("#playermsg").text("You have attacked " + vader.name + " whith an attack power of " + maul.attack);
					$("#defendermsg").text(vader.name + " Attacked you whith a counter attack power of " + vader.defend);
					// console.log("maul hp" + maul.hp);
					// console.log("vader hp" + vader.hp);
					$(".maul-health").text(maul.hp);
					$(".vader-health").text(vader.hp);
				}
				if (vader.hp < 1 && maul.hp > 0 && !vader.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth")
					$("#win-lose").text("You defeated " + vader.name);
					$(".defender").hide();
					$(".vader-defender ").hide();
					$(".vader-enemy ").hide();
					vader.death = true;
					vader.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && vader.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#win-lose").text(vader.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && vader.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//maul vs yoda
			if (yoda.defender) {
				if (maul.player && yoda.defender && maul.hp > 0 && yoda.hp > 0) {
					console.log("fighting");					
					maul.hp -= yoda.defend;
					yoda.hp -= maul.attack;
					maul.attack += maul.base;
					$("#playermsg").text("You have attacked " + yoda.name + " whith an attack power of " + maul.attack);
					$("#defendermsg").text(yoda.name + " Attacked you whith a counter attack power of " + yoda.defend);
					// console.log("maul hp" + maul.hp);
					// console.log("yoda hp" + yoda.hp);
					$(".maul-health").text(maul.hp);
					$(".yoda-health").text(yoda.hp);
				}
				if (yoda.hp < 1 && maul.hp > 0 && !yoda.death) {
					choosing = true;					
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + yoda.name);
					$(".defender").hide();
					$(".yoda-defender ").hide();
					$(".yoda-enemy ").hide();
					yoda.death = true;
					yoda.defender=false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && yoda.hp > 0) {
					$("#attack").hide();
					$(".defender").hide();
					$("#win-lose").text(yoda.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (maul.hp < 1 && yoda.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}
		}

		//yoda vs luke
		if (yoda.player) {
			if (luke.defender) {
				if (yoda.player && luke.defender && yoda.hp > 0 && luke.hp > 0) {
					console.log("fighting");					
					yoda.hp -= luke.defend;
					luke.hp -= yoda.attack;
					yoda.attack += yoda.base;
					$("#playermsg").text("You have attacked " + luke.name + " whith an attack power of " + yoda.attack);
					$("#defendermsg").text(luke.name + " Attacked you whith a counter attack power of " + luke.defend);
					// console.log("yoda hp" + yoda.hp);
					// console.log("luke hp" + luke.hp);
					$(".yoda-health").text(yoda.hp);
					$(".luke-health").text(luke.hp);
				}
				if (luke.hp < 1 && yoda.hp > 0 && !luke.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth")
					$("#win-lose").text("You defeated " + luke.name);
					$(".defender").hide();
					$(".luke-defender ").hide();
					$(".luke-enemy ").hide();
					luke.death = true;
					luke.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && luke.hp > 0) {
					$("#attack").hide();
					$("#win-lose").text(luke.name + " defeated you");
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && luke.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//yoda vs vader
			if (vader.defender) {
				if (yoda.player && vader.defender && yoda.hp > 0 && vader.hp > 0) {
					console.log("fighting");					
					yoda.hp -= vader.defend;
					vader.hp -= yoda.attack;
					yoda.attack += yoda.base;
					$("#playermsg").text("You have attacked " + vader.name + " whith an attack power of " + yoda.attack);
					$("#defendermsg").text(vader.name + " Attacked you whith a counter attack power of " + vader.defend);
					// console.log("yoda hp" + yoda.hp);
					// console.log("vader hp" + vader.hp);
					$(".yoda-health").text(yoda.hp);
					$(".vader-health").text(vader.hp);
				}
				if (vader.hp < 1 && yoda.hp > 0 && !vader.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$("#win-lose").text("You defeated " + vader.name);
					$(".defender").hide();
					$(".vader-defender ").hide();
					$(".vader-enemy ").hide();
					vader.death = true;
					vader.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && vader.hp > 0) {
					$("#attack").hide();
					$("#win-lose").text(vader.name + " defeated you");
					$(".defender").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && vader.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}

			//yoda vs maul
			if (maul.defender) {
				if (yoda.player && maul.defender && yoda.hp > 0 && maul.hp > 0) {
					console.log("fighting");
					yoda.hp -= maul.defend;
					maul.hp -= yoda.attack;
					yoda.attack += yoda.base;
					$("#playermsg").text("You have attacked " + maul.name + " whith an attack power of " + yoda.attack);
					$("#defendermsg").text(maul.name + " Attacked you whith a counter attack power of " + maul.defend);
					// console.log("yoda hp" + yoda.hp);
					// console.log("maul hp" + maul.hp);
					$(".yoda-health").text(yoda.hp);
					$(".maul-health").text(maul.hp);
				}
				if (maul.hp < 1 && yoda.hp > 0 && !maul.death) {
					choosing = true;
					$("#choosenew").text("choose new enemy to figth");
					$(".defender").hide();
					$("#win-lose").text("You defeated " + maul.name);
					$(".maul-defender ").hide();
					$(".maul-enemy ").hide();
					maul.death = true;
					maul.defender = false;
					$("#attack").hide();
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && maul.hp > 0) {
					$("#attack").hide();
					$("#win-lose").text(maul.name + " defeated you");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
				else if (yoda.hp < 1 && maul.hp < 1) {
					$("#attack").hide();
					$(".defender").hide();
					$(".enemy-cont").hide();
					$("#win-lose").text("Both died with last stroke");
					$("#playermsg").text("");
					$("#defendermsg").text("");
				}
			}
		}

		///End of game with all defenders death
		if (luke.player && yoda.death && vader.death && maul.death) {
			$("#attack").hide();
			$("#win-lose").text("The Force is strong with You, It's a Win");
			$("#choosenew").hide();
			$(".enemy-cont").hide();
		}

		if (vader.player && yoda.death && luke.death && maul.death) {
			$("#attack").hide();
			$("#win-lose").text("The Force is strong with You, It's a Win");
			$("#choosenew").hide();	
			$(".enemy-cont").hide();
		}

		if (maul.player && yoda.death && luke.death && vader.death) {
			$("#attack").hide();
			$("#win-lose").text("The Force is strong with You, It's a Win");
			$("#choosenew").hide();
			$(".enemy-cont").hide();
		}

		if (yoda.player && maul.death && luke.death && vader.death) {
			$("#attack").hide();
			$("#win-lose").text("The Force is strong with You, It's a Win");
			$("#choosenew").hide();
			$(".enemy-cont").hide();
		}



	});
	//end attack



});
//final