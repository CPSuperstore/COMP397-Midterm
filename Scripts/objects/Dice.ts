module objects
{
    export class Dice extends GameObject
    {       
        private value:number;
        private label:objects.Label;
        private realStage:objects.Scene

        // constructor
        constructor(x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(config.Game.ASSETS.getResult("blank"), x, y, isCentered);
            this.value = -1;
            this.label = new objects.Label("", undefined, undefined, undefined, x + (this.image.width / 2), y + this.image.height + 10);
            this.Start();
        }

        public init(stage:objects.Scene){
            this.realStage = stage;
            this.realStage.addChild(this);
            this.realStage.addChild(this.label);
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        /**
         * This function is used for initialization
         *
         * @memberof Button
         */
        public Start(): void {
            this.name = "Dice";
        }

        public Update(): void {
            
        }

        public Reset(): void {
            
        }

        public Roll(): void {
            this.value = this.getNextNumber();
            console.log("dice" + this.value)
            this.image = new createjs.Bitmap(config.Game.ASSETS.getResult("dice" + this.value)).image;
            this.label.setText("[" + this.value + "]");
        }

        private getNextNumber():number{
            let min = Math.ceil(1);
            let max = Math.floor(6);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        public GetValue():number{
            return this.value;
        }
    }
}