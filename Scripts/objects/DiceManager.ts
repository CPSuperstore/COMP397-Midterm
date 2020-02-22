module objects
{
    export class DiceManager
    {       
        private dice:objects.Dice[];
        private waitingForRoll:boolean = false;
        private totalLabel:objects.Label;
        private fourDSixMode:boolean;

        // constructor
        constructor(dice:number)
        {
            this.fourDSixMode = dice >= 4
            this.dice = [];

            let x = 0;
            
            for (let i = 0; i < dice; i++) {
                this.dice.push(new objects.Dice(x))
                x += this.dice[this.dice.length-1].width + 10;
            }

            this.totalLabel = new Label("", "20pt", "Arial", undefined, 100, 300);
        }

        public init(stage:objects.Scene){
            this.dice.forEach(dice => {
                dice.init(stage);
            });
            stage.addChild(this.totalLabel);
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        public Roll(): void {
            this.dice.forEach(dice => {
                dice.Roll();
            });
            this.waitingForRoll = true;
        }

        public Update():void{
            this.dice.forEach(dice => {
                dice.Update();
            });
            if (!this.dice[0].IsRolling() && this.waitingForRoll){
                this.waitingForRoll = false;
                if (this.fourDSixMode) this.totalLabel.setText("Total: " + this.CalculateValues())
            }
        }


        public CalculateValues():number{
            let values:number[] = [];
            this.dice.forEach(dice => {
                values.push(dice.GetValue());
            });
            let i = values.indexOf(Math.min(...values));
            delete values[i];
            
            let sum = 0;
            values.forEach(v => {
                sum += v;
            });

            return sum;
        }
    }
}