const Person1 = {
  introduce: function () {
    return console.log(`Hello I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

const Person2 = {
  name: "John",
  age: 20,
};

Person1.introduce.call(Person2);
