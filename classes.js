class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myTeacher1 = new Car("Abdur Rahim", 2014);
  const myTeacher2 = new Car("Abdul Karim", 2019);
  
  document.getElementById("demo").innerHTML =
  myTeacher1.name + " " + myTeacher2.name;




  class Rayhan {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myRayhan = new Rayhan("Rayhan", 2002);
  document.getElementById("demo2").innerHTML =
  "I am  " + myRayhan.age() + " years old.";




  class Sister {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(y) {
      return y - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();
  
  const mySister = new Sister("Liza", 1994);
  document.getElementById("demo3").innerHTML=
  "My sister is" + mySister.age(year)   +" years old.";






class Fruit {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myFruit = new Fruit("Apple");
document.getElementById("demo4").innerHTML = Fruit.hello();


// Rayhan short note,
// If i want add the fruit name than i have to use a peramiter on static hello()

class Fruits {
    constructor(name) {
      this.name = name;
    }
    static hello(X) {
        return "Hello " + X.name;
    }
  }
  
  const myFruits = new Fruits("Apple");
  document.getElementById("demo5").innerHTML = Fruits.hello(myFruits);