// Global variables
var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender


// Constructor
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}


// Increase the attack strength (this attack strength + original attack strength)
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Performs an attack
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("You attacked " +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

// Performs a counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $("#msg").append("<br>" + this.name + " counter attacked you for " + this.counterAttackPower + " damage points.");
};


// Initialize all the characters
function initCharacters() {
    var luke = new Character("Luke Skywalker", 100, 10, 5, "./assets/images/luke.jpg");
    var vader = new Character("Darth Vader", 200, 50, 30, "./assets/images/vader.jpg");
    var obi = new Character("Obi-Wan Kenobi", 150, 15, 2, "./assets/images/obi.jpg");
    var chew = new Character("Chewbacca", 180, 30, 12, "./assets/images/chew.jpg");
    charArray.push(luke, vader, obi, chew);
}
