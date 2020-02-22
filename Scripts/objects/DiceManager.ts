module objects
{
    export class DiceManager
    {       
        private dice:objects.Dice[];

        // constructor
        constructor(dice:number)
        {
            this.dice = [];

            let x = 0;
            
            for (let i = 0; i < dice; i++) {
                this.dice.push(new objects.Dice(x))
                x += this.dice[this.dice.length-1].width + 10;
            }
        }

        public init(stage:objects.Scene){
            this.dice.forEach(dice => {
                dice.init(stage);
            });
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        public Roll(): void {
            this.dice.forEach(dice => {
                dice.Roll();
            });
        }


        public CalculateValues():number{
            return 5;
        }
    }
}