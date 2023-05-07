// class Person {
//   constructor(
//     private name: string, 
//     private age: number
//     ){}

//   public getDetails(): string {
//     return `Name: ${this.name}, 
//             Age: ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(
//     name: string, 
//     age: number, 
//     private grade: string) 
// {
//     super(name, age);
//   }

//   public getGrade(): string {
//     return `Grade: ${this.grade}`;
//   }
// }

// const person = new Person('Shakil Khan', 25);
// console.log(person.getDetails());

// const stu = new Student('Borhan Khan', 24, 'A+');
// console.log(stu.getDetails());
// console.log(stu.getGrade());