"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._fourDSix = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 300, true);
            this._diceManager = new objects.DiceManager(2);
            // allows me to use the "this" keyword in a different scope
            var parent = this;
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true, function () {
                parent._diceManager.Roll();
            });
            createjs.Ticker.on("tick", this.Update);
            this.Main();
        };
        Play.prototype.Update = function () {
            this._diceManager.Update();
        };
        Play.prototype.Main = function () {
            this.addChild(new objects.Image(config.Game.ASSETS.getResult("background")));
            this._fourDSix.on("click", function () {
                config.Game.SCENE = scenes.State.FOUR_D_SIX;
            });
            this._diceManager.init(this);
            this.addChild(this._rollButton);
            this.addChild(this._fourDSix);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map