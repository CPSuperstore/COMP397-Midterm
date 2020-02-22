module scenes
{
    export class FourDSix extends objects.Scene
    {
        private _diceManager: objects.DiceManager;
        private _rollButton: objects.Button
        private _regularMode: objects.Button;


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
            this._regularMode = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 300, true);

            this._diceManager = new objects.DiceManager(4);

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
            this._regularMode.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

            this._diceManager.init(this)
            this.addChild(this._rollButton);
            this.addChild(this._regularMode);


        }

        
    }
}