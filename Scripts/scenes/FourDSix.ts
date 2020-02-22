module scenes
{
    export class FourDSix extends objects.Scene
    {
        private _diceManager: objects.DiceManager;
        private _rollButton: objects.Button

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
            this._diceManager = new objects.DiceManager(4);

            // allows me to use the "this" keyword in a different scope
            let parent = this;
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true, function(){
                parent._diceManager.Roll();
            });

            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this._diceManager.init(this)
            this.addChild(this._rollButton);


        }

        
    }
}