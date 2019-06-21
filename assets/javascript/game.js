    
// Global variables
var baseAttack = 0; 
var player; 
var defender; 
var charArray = []; 
var playerSelected = false;
var defenderSelected = false; 


// Constructor
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}


// Increase attack strength 
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Perform attack
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("You attacked " +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};