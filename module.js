'use strice'

var http = require ('http');
var events = require('events'),
    config = require('./config').events,
    log = "" ;
    emitter = new events();



function getLog(){
 return log;
};

exports.getLog = getLog;

class BasketBallPlayer {

    constructor($name, $medal, $baskets) {
        this.name = $name;
        this.medal = $medal;
        this.baskets = $baskets;

        this.getName = function() { return _name; };
        this.getAchievement = function () {return _Achievement};
        this.getBaskets = function() {return baskets};

    }

    plusBasket() {
        this.baskets += 1;
        emitter.emit(config.ADDBASKET, this.name, this.baskets);
    }

    minusBasket() {
        if(this.baskets == 0){
            console.log ("cannot remove a basket for " + this.name, this.baskets);
            emitter.emit('CANNOT');
        }
        this.baskets -= 1;
        emitter.emit(config.MINUBASKET, this.name, this.baskets);
    }

    plusMedal() {
        this.medal += 1;
        emitter.emit(config.ADDMEDAL, this.name, this.medal);
    }

}

exports.newPlayer = function ($name, $medal, $baskets){
    var newPlayer = new BasketBallPlayer($name, $medal,  $baskets);
    return newPlayer;
}

emitter.on(config.ADDBASKET, function(name, baskets){
    console.log(name + " add basket! he has - " + baskets + " baskets ");
    log += name + " add basket! he has - " + baskets + " baskets ";
});

emitter.on(config.MINUBASKET, function(name, baskets){
    console.log(name + " add basket! he has - " + baskets + " baskets ");
    log += name + " miss basket! he has - " + baskets + " baskets ";
});

emitter.on(config.ADDMEDAL, function(name, medal){
    console.log(name + " win a medal! ");
    log += name + " win a medal! ";
});

emitter.on(config.CANNOT, function(name, medal, baskets){
    console.log("CANNOT remove");
    log += name + " " + baskets;
});
