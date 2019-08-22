const name = "junsik",
  age = 25,
  gender = "male";

export {};

const sayHello = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age} & gender is ${gender}`;
};

console.log(sayHello(name, age, gender));
