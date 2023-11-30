class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge(){
        return `${this.name} არის ${this.age} წლის`;
    }
    
    getHeight(){
        return `${this.name} არის ${this.height} სანტიმეტრი`;
    }

    getWeight() {
        return `${this.name} არის ${this.weight}კილოგრამი`;
      }
}

const p1 = new Player ("David Jones", 25 , 175 , 75);

console.log(p1.getAge());
console.log(p1.getHeight());
console.log(p1.getWeight());


class FootballPlayer extends Player {
    constructor(name, age, height, weight, position){
        super(name, age, height, weight);
        this.position = position;
    }
    getPosition(){
        return `${this.name} თამაშობს ${this.position} პოზიციაზე`;
    }
}

class BasketballPlayer extends Player {
    constructor(name, age, height, weight, position){
        super(name, age, height, weight);
        this.position = position;
    }
    getPosition(){
        return `${this.name} თამაშობს ${this.position} პოზიციაზე`;
    }
}

const footballPlayer = new FootballPlayer("John Doe", 28, 180, 80, "forward");
console.log(footballPlayer.getAge());
console.log(footballPlayer.getHeight());
console.log(footballPlayer.getWeight());
console.log(footballPlayer.getPosition());

const basketballPlayer = new BasketballPlayer("Davit Tavdgiridze", 16, 180, 85, "Center");
console.log(basketballPlayer.getAge());
console.log(basketballPlayer.getHeight());
console.log(basketballPlayer.getWeight());
console.log(basketballPlayer.getPosition());