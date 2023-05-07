function ages(arr: { 
    name: string, 
    age: number
}[]): { 
    name: string, 
    age: number 
}[] {
     return arr.filter(person => person.age >= 18);
};
