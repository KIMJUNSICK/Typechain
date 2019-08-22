class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const junsik = new Human("junsik", 25);

export {};

const sayHello = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} & gender is ${
    person.gender
  }!`;
};

console.log(sayHello(junsik));
