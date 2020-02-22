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
            this._fourDSix = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 300, true);


            this._diceManager = new objects.DiceManager(2);

            // allows me to use the "this" keyword in a different scope
            let parent = this;
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true, function(){
                parent._diceManager.Roll();
            });

            createjs.Ticker.on("tick", this.Update);


            this.Main();
        }        
        
        public Update(): void 
        {
            this._diceManager.Update();
        }
        
        public Main(): void 
        {
            this.addChild(new objects.Image(config.Game.ASSETS.getResult("background")))

            this._fourDSix.on("click", ()=>{
                config.Game.SCENE = scenes.State.FOUR_D_SIX;
            });

            this._diceManager.init(this);
            this.addChild(this._rollButton);
            this.addChild(this._fourDSix);


        }

        
    }
}