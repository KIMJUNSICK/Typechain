interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "junsik",
  age: 25,
  gender: "male"
};

export {};

const sayHello = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} & gender is ${
    person.gender
  }!`;
};

console.log(sayHello(person));
