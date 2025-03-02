// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health; //100
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) { //30
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) { // it's from the Viking class
        super(health, strength); //comes from the class
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) { //30
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}