// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hi my name is: ${this.name}`)
//         },
//     }
//     return person;
// }

//constructor - doeds not return anything & start with capital
// function Person(name, age){
//        this.name = name,
//         this.age = age
// }

// Person.prototype.talk = function(){
//     console.log(`hi,my name is ${this.name}`);
// };


//using class

// class Person {
//  constructor (name, age) {
//     this.name = name;
//     this.age = age;
//  }
//  talk(){
//     console.log(`hi, my name is ${this.name}`);
//  };
// } 

// let p1 = new Person("eve", 89);
// let p2 = new Person("adam", 19);


//using inheritance

class Person{
    constructor(name,age){
        console.log("constracted from person")
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, I am ${this.name}`);
    };
}

class Student extends Person {
    constructor (name,age, marks){
        super(name.age); //person class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor (name,aga, subject){
        super(name.age); //person class constructor is being called
        this.subject = subject;
    }
}


class Memmal{
    //base class / parent
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("i am eating");
    }
}

class dogs extends Memmal{
    //child
    constructor(name){
        super(name);
    }

    bark(){
        console.log("wooff..");
    }
}

class cats extends Memmal{
    constructor(name){
        super(name);
    }
    meow (){
        console.log("meow..");
    }
}