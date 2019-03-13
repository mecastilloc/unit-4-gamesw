var luke = {
	hp: 200,
	name: "Luke Skywalker",
	attack: 8,
	defend: 30,
	player: false,
	defender: false,
	death: false,
}

var vader = {
	hp: 250,
	name: "Darth Vader",
	attack: 10,
	defend: 35,
	player: false,
	defender: false,
	death: false,
}
var maul = {
	hp: 220,
	name: "Darth Moul",
	attack: 12,
	defend: 20,
	player: false,
	defender: false,
	death: false,
}

var yoda = {
	hp: 255,
	name: "Yoda",
	attack: 18,
	defend: 35,
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
	console.log(luke.attack)
	console.log("ready!");
	luke.attack += luke.attack;

	console.log(luke.attack)
	luke.attack += luke.attack;

	console.log(luke.attack)
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
		$(".luke-chosen, .vader-chosen, .maul-chosen").hide();
	});


	//fase 2 Select defender
	//luke defender
	$(".luke-enemy").click(function () {
		luke.defender = true;
		defenderCosen = true;
		if (vader.player && choosing) {
			console.log(choosing);
			$(".characters").hide();
			$(".enemy").show();
			$(".luke-enemy, .vader-enemy").hide();
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
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".vader-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;


		}

	});
	//vader defender
	$(".vader-enemy").click(function () {
		vader.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".vader-enemy, .luke-enemy").hide();
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
			$(".chosen").show();
			$(".vader-chosen, .luke-chosen, .maul-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .maul-defender, .yoda-defender").hide();
			choosing = false;
		}

	});


	//maul defender
	$(".maul-enemy").click(function () {
		maul.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".maul-enemy, .luke-enemy").hide();
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
			$(".chosen").show();
			$(".luke-chosen, .maul-chosen, .vader-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .yoda-defender").hide();
			choosing = false;
		}
	});

	//yoda defender
	$(".yoda-enemy").click(function () {
		yoda.defender = true;
		if (luke.player && choosing) {
			$(".characters").hide();
			$(".enemy").show();
			$(".yoda-enemy, .luke-enemy").hide();
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
			$(".chosen").show();
			$(".luke-chosen, .vader-chosen, .yoda-chosen").hide();
			$(".defender").show();
			$(".luke-defender, .vader-defender, .maul-defender").hide();
			choosing = false;
		}
	});




});
//final