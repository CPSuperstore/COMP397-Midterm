"use strict";
var objects;
(function (objects) {
    var DiceManager = /** @class */ (function () {
        // constructor
        function DiceManager(dice) {
            this.waitingForRoll = false;
            this.fourDSixMode = dice >= 4;
            this.dice = [];
            var x = 0;
            for (var i = 0; i < dice; i++) {
                this.dice.push(new objects.Dice(x));
                x += this.dice[this.dice.length - 1].width + 10;
            }
            this.totalLabel = new objects.Label("", "20pt", "Arial", undefined, 100, 300);
        }
        DiceManager.prototype.init = function (stage) {
            this.dice.forEach(function (dice) {
                dice.init(stage);
            });
            stage.addChild(this.totalLabel);
        };
        // PRIVATE METHODS
        DiceManager.prototype._checkBounds = function () {
        };
        DiceManager.prototype.Roll = function () {
            this.dice.forEach(function (dice) {
                dice.Roll();
            });
            this.waitingForRoll = true;
        };
        DiceManager.prototype.Update = function () {
            this.dice.forEach(function (dice) {
                dice.Update();
            });
            if (!this.dice[0].IsRolling() && this.waitingForRoll) {
                this.waitingForRoll = false;
                if (this.fourDSixMode)
                    this.totalLabel.setText("Total: " + this.CalculateValues());
            }
        };
        DiceManager.prototype.CalculateValues = function () {
            var values = [];
            this.dice.forEach(function (dice) {
                values.push(dice.GetValue());
            });
            var i = values.indexOf(Math.min.apply(Math, values));
            delete values[i];
            var sum = 0;
            values.forEach(function (v) {
                sum += v;
            });
            return sum;
        };
        return DiceManager;
    }());
    objects.DiceManager = DiceManager;
})(objects || (objects = {}));
//# sourceMappingURL=DiceManager.js.map