class Cat {
    limbs = 4;
    tail = 1;
    cuteness_level = 'high';

    meow () {
        console.log('MEOW!');
    }
    lick(){
        console.log('Lick thyself');
    }
    scratch (){
        console.log('Scratch, scratch, scratch');
    }
}
const Bombay = new Cat();
console.log(Bombay);

const Siamese = new Cat();
console.log(Siamese);

Bombay.meow();
Siamese.lick();
Bombay.scratch();

class Pirate {
    constructor(name, itemsArr, level, shipsArr, lovesTreasure){
        this.name = name;
        this.belongings = itemsArr;
        this.level_of_drunkeness = level;
        this.ships = shipsArr;
        this.lovesTreasure = lovesTreasure || true; 
    }
    want (desireObject){
        this.desire = desireObject;
        console.log(this.name + ' wanted ' + this.desire);
  }
    origins (hometown){
        this.origin = hometown;
        console.log('Hometown: ' + hometown);
    }
    setQuote (saying){
        this.quote = quote
        console.log(this.name + this.quote);
    }
  }
//Fictional Pirates
const blackPearl = [new Pirate ('Jack Sparrow', ['Sword', 'Compass', 'Cursed Medallion'], 'Very very high', ['HMS Interceptor']), new Pirate ('Hector Barboassa', ['Cursed Medallion', 'A parrot'], 'Varies', ['The Black Pearl']), new Pirate ('Davy Jones',['Liar\'s Dice', 'Dead Man\'s Chest'], 'Unaffected by alcohol', ['Flying Dutchman'])]

//Real-life Pirates
const queensAnnesRevenge = [new Pirate ('Francis Drake', ['Buckland Abbey', 'dozen chest of coins', '80lbs of gold', '26 tons of silver'], 'low', ['Golden Hind']), new Pirate ('Blackbeard', ['treasure'], 'unknown but probably high', ['Queen Anne\'s Revenge', 'Adventure', 'Protestant Caesar']), new Pirate ('Zheng Yi Sao', ['24 ships under her command'], 'Zero', ['She had a lot of ships'])] 

for (let i=0; i < blackPearl.length; i++) {
	console.log('Name: ' + blackPearl[i].name);
    console.log('Belongings: ' + blackPearl[i].belongings);
    console.log('Ships under their command: ' + blackPearl[i].ships);
}

for (let i=0; i < queensAnnesRevenge.length; i++) {
	console.log('Name: ' + queensAnnesRevenge[i].name);
    console.log('Belongings ' + queensAnnesRevenge[i].belongings);
    console.log('Ships under their command: ' + queensAnnesRevenge[i].ships);
}
