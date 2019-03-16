# unit-4-gamesw
JQuery RPG game wth star wars characters

[Live Demo](https://mecastilloc.github.io/unit-4-gamesw/index.html)

Star Wars RPG Game (Challenge)



1. Here's how the app works:

   * When the game starts, the player will choose a character by clicking on the Star Wars Character's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies will be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. 

2. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below,  It is removed from the `defender area`. The player is ask to choose a new opponent.

3. The player wins the game  The player loses the game the game if their character's `HP` falls to zero or below. 

   *In any case, the player will be alerted of the result of the game: 
	*Wins the game by defeating all enemy characters.
	*Loses the game if the chosen character's `HP` falls to zero or below.
	*Ties the game if both, the player and the opponent's `HP`, falls to zero or bellow.

##### Game design notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.


##### Commit history

commit 1:
initial file structure created

commit 2: 
game template complete moving characters

commit 3:
game logic complete, design bugs

commit 4:
Bugs in conditions to win or loose fixed, final css styling, code format

commit 5:
JQuery link updated, Javascript Code grouped in functions, new Game button color change, Readme.md  update


