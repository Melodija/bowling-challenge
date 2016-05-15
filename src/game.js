'use strict';

function Game() {
  this._round = 1;
  this.MAX_ROUND = 10;
  this.START_ROLL = 1;
  this.START_PINS = 10;
  this._pins = this.START_PINS;
  this.numberOfRolls = this.START_ROLL;
  this._points = 0;
}

Game.prototype.getRound = function () {
  return this._round;
};

Game.prototype.numberOfPins = function () {
  return this._pins;
};

Game.prototype.rollBall = function (number) {
  this._pins -= number;
  this._points += number;
  this.checkResult();
};

Game.prototype.checkResult = function () {
  if(this._pins === 0 || this.numberOfRolls === 2) {
    this._newRound();
  } else {
    this.numberOfRolls ++
  };
};

Game.prototype.roundScore = function () {
  return this._points
};

Game.prototype._newRound = function () {
  if(this._round === 10) { return; };
  this._pins = this.START_PINS;
  this._round ++;
  this.numberOfRolls = this.START_ROLL;
  console.log('This is a new round!');
};
