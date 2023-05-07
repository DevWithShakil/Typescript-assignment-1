Q1.

 TypeScript is an open-source pure object-oriented programming language. It is a strongly    typed superset of JavaScript which compiles to plain JavaScript.It is not directly run on the browser. It needs a compiler to compile and generate in JavaScript file. TypeScript source file is in ".ts" extension. We can use any valid ".js" file by renaming it to ".ts" file.

Differences between JavaScript & TypeScript are:

1. Javascript doesn't support strongly typed or static typing where typescriptsupports strongly typed or static typing feature.
2. Javascript is just a scripting language but typescript supports object-oriented programming concept like classes, interfaces, inheritance, generics, etc.
3. Javascript directly run on the browser where typescript can't directly run on the browser.
4. Javascript source file is in ".js" extension where typescript source file is in ".ts" extension.
5. Javascript doesn't support optional parameters. But typescript supports optional parameters.



Q2.

Differences between Type and Interface:

Type:

1. The type is defined for declaring a variable’s data type that means type declaration in typescript is for declaring names of different types such as user-defined, built-in, or any other data types.
2. It uses the “type” keyword for creating new type alias but not a new type instead of a new name for a type defined.
3. The typescript type supports only the data types and not the use of an object.
4. The types can be used for other types also such as primitives, unions, and tuples.

Interface:

1. The interface is defined as the syntax for the class which provides a way to define entities. This contains the declaration of the members for defining the structure which a derived class can follow.
2. It uses the “interface” keyword for declaring an interface that can contain the methods, properties, and events to describe data shapes.
3. The typescript interface supports the use of the object.
4. The interface cannot be used with other types of declaration as done with type in Typescript.


Q6.

"as" keyword used for in TypeScript:

1. Used to cast a value to a more specific or less specific version of the expected type.

2. Commonly used when you have information about the specific type for the value that TypeScript may not be able to determine on its own.


Q4.

Difference between an "unknown" and "any" type in TypeScript:

1. TypeScript forces us to determine the "type" of the "unknown" value before we can work with it, but it doesn’t with the any value.
2. We cannot assign "unknown" to anything but itself or any, while we can assign any to anything.
3. We can use the "unknownType" to describe a value that we don’t know. For example, a value returned from a network call.
4. The "types" any and "unknown" are two primitive types in TypeScript that can come in handy sometimes.


Q3.

Example of how to use generics in TypeScript:

To define a generic type, to use the angle bracket notation (< >) followed by the type parameter name(s). For example, let's define a simple generic function that takes an array of any type and returns its first element:

function getFirst<T>(arr: T[]): T {
  return arr[0];
}





