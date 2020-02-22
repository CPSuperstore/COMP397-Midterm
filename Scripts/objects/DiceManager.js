"use strict";
var objects;
(function (objects) {
    var DiceManager = /** @class */ (function () {
        // constructor
        function DiceManager(dice) {
            this.dice = [];
            var x = 0;
            for (var i = 0; i < dice; i++) {
                this.dice.push(new objects.Dice(x));
                x += this.dice[this.dice.length - 1].width + 10;
            }
        }
        DiceManager.prototype.init = function (stage) {
            this.dice.forEach(function (dice) {
                dice.init(stage);
            });
        };
        // PRIVATE METHODS
        DiceManager.prototype._checkBounds = function () {
        };
        DiceManager.prototype.Roll = function () {
            this.dice.forEach(function (dice) {
                dice.Roll();
            });
        };
        DiceManager.prototype.CalculateValues = function () {
            return 5;
        };
        return DiceManager;
    }());
    objects.DiceManager = DiceManager;
})(objects || (objects = {}));
//# sourceMappingURL=DiceManager.js.map