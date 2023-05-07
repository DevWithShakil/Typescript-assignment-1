function reverseArrayOfString<T>(...array: T[]): T[] {
  return array.reverse();
}

const strings = ['Black', 'White', 'Green', 'Red', 'Blue', 'Yellow', 'Cyan', 'Magenta'];
const reverseStrings = reverseArrayOfString(...strings);
console.log(reverseStrings);
