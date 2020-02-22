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
    var FourDSix = /** @class */ (function (_super) {
        __extends(FourDSix, _super);
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function FourDSix() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        FourDSix.prototype.Start = function () {
            this._diceManager = new objects.DiceManager(4);
            // allows me to use the "this" keyword in a different scope
            var parent = this;
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true, function () {
                parent._diceManager.Roll();
            });
            this.Main();
        };
        FourDSix.prototype.Update = function () {
        };
        FourDSix.prototype.Main = function () {
            this._diceManager.init(this);
            this.addChild(this._rollButton);
        };
        return FourDSix;
    }(objects.Scene));
    scenes.FourDSix = FourDSix;
})(scenes || (scenes = {}));
//# sourceMappingURL=FourDSix.js.map