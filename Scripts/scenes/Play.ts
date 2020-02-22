/**
 * @filename Play.ts
 * @author Christopher Palazzolo (300934032)
 * @date 2020/02/22
 * @description This scene handles the 2 dice version of the game
 * 
 * Note: There is alot of repetition between this module and FourDSix.ts, which could be resolved with a single scene,
 * but the bonus marks required 2 different scenes
 */
module scenes
{
    export class Play extends objects.Scene
    {
        private _diceManager: objects.DiceManager;
        private _rollButton: objects.Button;
        private _fourDSix: objects.Button;


        // PRIVATE INSTANCE MEMBERS
 

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            // create the link to 4D6 mode
            this._fourDSix = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 300, true);

            // create the dice manager with 2 dice
            this._diceManager = new objects.DiceManager(2);

            // allows me to use the "this" keyword in a different scope
            let parent = this;

            // add the "Roll" button
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true, function(){
                // when the "roll" button is clicked, start the rolling of the dice!
                parent._diceManager.Roll();
            });

            // add the "Update" ticker
            createjs.Ticker.on("tick", this.Update);

            this.Main();
        }        
        
        public Update(): void 
        {
            // update the dice manager which updates each dice
            this._diceManager.Update();
        }
        
        public Main(): void 
        {
            // add the background image
            this.addChild(new objects.Image(config.Game.ASSETS.getResult("background")))

            // add the click event to the 4d6 button
            this._fourDSix.on("click", ()=>{
                config.Game.SCENE = scenes.State.FOUR_D_SIX;
            });

            // initialize the dice manager, and add the buttons to the scene
            this._diceManager.init(this);
            this.addChild(this._rollButton);
            this.addChild(this._fourDSix);
        }        
    }
}