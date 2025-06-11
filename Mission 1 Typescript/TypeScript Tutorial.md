# 1.1 What is Typescript
Typescript is an OOP language built on JS with extra features.

# 1.2 Pros and cons
## Pros of TS
- **Type Safety:** JS has some lackings, for example:
  - JS is a **dynamically typed language** (Language where type of a variable does not have to be declared while writing the code, rather the type is determined at runtime, based on the value assigned to it). 
  - As a result, though it is fast to write, the **type-related bugs may appear at run time** and it is **harder to debug in large codebases**.
- **Supports older browser:** TS transforms into JS at the end of the day(*Browser does not recognize TS, it needs to get converted to JS*) and so it can be **transpiled into older versions of JS**. 
- **Increases productivity**
- **Less bugs and less testing**

## Cons of TS
- **Type complexities**
- **Limited Library support**
- **Over engineering**
- **Migration challenges**


# 1.3 Configuration
Say, ts file name is "index.ts"
- **Running ts file using node:** ```node index.ts```
- **converting ts file to js:** ```tsc index.ts```

  	<small>Note: Use node version manager like ```fnm``` or ```volta``` to manage node version</small>

***Ts and js files are not kept in the same folder. So, configure ts:***
- **configure ts:** ```tsc --init``` and a configuration file ```tsconfig.json``` will open in the root directory.
- Press ctrl+f and search ```rootDir```, uncomment it and write the directory where ts file should be saved.
For example:  ```"rootDir": "./module1/src/",```
- Press ctrl+f and search ```outDir``` and give the location where ts file will be compiled into js file and be saved. For example:
  ```"outDir": "./module1/dist",```
Here, ```dist``` is *distributor* file.
- Now go to the root directory and give command ```tsc```, *index.js* file will be created in *./module1/dist* directory if ran successfully.
- If you want you can also configure the target JavaScript version which should be emitted in ```target``` of configuration file.


**To show output:**

Step 1: Compile ts to js : ```tsc```<br/>
Step 2: Run the compiled js file : ````node jsFileName.js```

# 1.4 Basic Data Types

<table>
<tr>
<th>Primitive types</th>
<th>Non-Primitive types</th>
</tr>
<tr>
<td>
number, string, boolean, null, undefined, symbol, bigint
</td>
<td>
Array, Tuple, Object
</td>
</tr>
</table>

### Type Assignment

Two main ways TS assigns a type:
1. Explicit : writing out the type 
   
   let num : number = 30;
2. Implicit : TS will guess the type, based on the assigned value
   
   let num = 30;

### Check *basicTypes.ts* file to learn more about data types

# 1.5 Object, Optional and Literal Types

## Declaring objects
### Declaring implicitly
**Example 1:**
```
const user = {
  firstName : 'A',
  middleName : 'B',
  lastName : 'C'
}
```
Here, in user, the data has been declared **implicitly**, since we did not say what type of data will be stored beforehand.

### Declaring explicitly:
```
const userEx: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'A',
    middleName: 'B',
    lastName: 'C'
}
```
**Note**:
1. Here, the data types are ended with ``;`` whereas data ended with ``,``
2. Since the members and their datatypes are declared explicitly beforehand, **any mismatch will show error**. For instance, the following code snippets will result in error:
```
   const userEx: {
    firstName: string;
    middleName: string;
    lastName: string;
  } = {
    firsName: 'A', // variable name mismatch
    middleName: 'B',
    lastName: 'C'
  }
```
or,  
```
  const userEx: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'A',
    lastName: 'C'
    // since no middleName was initialized
    // despite being declared explicitly
}
```
### Declaring optional member
Use ``?`` **after variable/member name** after declaring to declare it as an optional member.
````
const userOp: {
    firstName: string;
    middleName?: string; // optional member
    lastName: string;
} = {
    firstName: 'X',
    lastName: 'Z'
}
````
*If you hover over **middleName** in declaration, it will show ``(property) middleName?: string | undefined``.* Other members are taken as **required**.

### Declaring literal type
When a specific value acts as a type, it is called literal type.

or,

A literal type is when a variable or property is allowed to have only a specific value. For example, "Md" is a string literal type, meaning it can only have the exact value "Md" and nothing else.
```
const userLiteral: {
    firstName: 'Md', // literal type
    secondName: string;
    middleName?: string;
    lastName: string;
} = {
    firstName: 'Md',
    secondName: 'X',
    lastName: 'Z'
}
```
### Accessing property
A property can be accessed using : `objectName.propertyName`

```
user.firstName = 'change',
```

### Access Modifier

Access modifiers control the visibility of class members and help enforce encapsulation:

- **public** – Members are accessible from **anywhere** (default behavior).

- **private** – Members are accessible **only within the class** they are declared in.

- **protected** – Members are accessible **within the class and its subclasses**.

- **readonly** – **Prevents reassignment** after initialization (can be used with both classes and object types).

For example, using access modifier `readonly`: 
```
const userAccessModifier: {
    readonly firstName: string;
    secondName: string;
} = {
    firstName: 'fixed',
    secondName: 'X'
}
```
Now, if we want to change firstName using `userAccessModifier.firstName : 'change'`, it will show error since property firstName is **readonly**.

# 1.6 Functions in Typescript
Functions in ts works similarly as js but comes with **type-safety** as you can define the parameter types and return type. Additionally, optional/default parameters and rest parameters can also be declared.

## Types of functions declarations
1. Named function
2. Anonymous function
3. Arrow function

## 1. Named function
A named function is a function that has a specific identifier.

```
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
Here, `greet` is the function name.

```
function add(a: number, b: number): number {
    return a + b;
}
```
Here, a and b are of type number, and the function returns a number.

### Key Features
- Improve code readability.
- **Are hoisted** *(can be called before they are defined in the code).*
- Make debugging easier, as the function name **appears in stack traces**.
  
## 2. Anonymous Function
An anonymous function is a function without a name. It is often assigned to a variable or passed directly as an argument to another function.

```
const greetAnonymously = function (name: string): string {
    return `Hello, ${name}! I am Anonymous!`;
}
```
Here:
- The function has no name after the function keyword.
- It is assigned to the variable `greetAnonymously`, which you use to call it.

### Key Features
- Used as callback functions (e.g., in setTimeout, map, filter, etc.).

- Passed as arguments to higher-order functions.

**Note**: Anonymous functions are **not hoisted**, unlike named functions. So you **must declare them before using** them.

## 3. Arrow Function
An arrow function is a concise way to write function expressions using `=>`*(arrow)* syntax. It was introduced in ES6 and commonly used in JS and TS.
### Syntax
```
const functionName = (parameters)=>{
  //function body
}
```
### Example
```
const greetArrow = (name: string): string => {
    return `Hello, ${name}! I am gonna arrow you!`;
}
```
If the function has only one return statement, you can omit curly braces and the return keyword:

```
const addArrow = (a: number, b: number): number => a + b;
```

### Key Features
- Cannot be used as constructors.
- Commonly used in callbacks, array methods, and functional programming.
- Arrow functions do not have their own `this` context. They use the `this` from the surrounding scope.

## Reminder :  What is callback function?
A callback function is a function that is passed as an argument to another function, and is called/executed later.

```
function greetWithCallback(name: string, callback: () => void): void {
    console.log(`Hello, ${name}! I am gonna call you back!`);
    callback(); // calling the callback function
}

function sayBye(): void {
    console.log('Goodbye!');
}

greetWithCallback('Hooman', sayBye);
```
## Optional paramters
Use `?` to make a parameter optional.
```
function greetOpt(name: string, age?: number): string {
  return age ? `Hello, ${name}. Age: ${age}` : `Hello, ${name}`;
}
```
## Default parameters
Set default values in the parameter list.
```
function greetDef(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```
## Method
A mathod is a function that is a property of an object or a class. 

### Method within an object
- Example 1
```
const person = {
    name: 'Raha',
    age: 24,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}
person.greet();
```
- Example 2
```
const oldUser = {
    name: 'Hooman',
    age: 0,
    incAge(age: number): string {
        return `New age is ${this.age + age}`;
    }
}
console.log(oldUser.incAge(5));
```
# 1.7 Spread and Rest Operator
## 1.7.1 Spread Operator
The spread operator(`...`) is used to **expand elements** of an **array or object**. 
It creates **shallow copies** and is commonly used for **copying**, **merging**, or **passing elements**.

### Why do we need spread opertor?

The following case can be a good example to demonstrate the necessity of spread operator:
```
  let subjects: string[] = ['BGS', 'Bangla', 'Maths'];
  
  console.log('Initial subjects : ', subjects)
  
  let newSubjects: string[] = ['English', 'Biology', 'Physics'];
  
  console.log('Initial newSubjects: ', newSubjects);
  
  subjects.push(newSubjects); // without spread operator
  
  console.log('subjects after spreading newSubjects:', subjects);

```
The above code shows an error because Array.push() expects elements of type string, but newSubjects is an entire string[] (array), not individual strings. Without the spread operator (...), it tries to push the whole array as a single element, causing a type mismatch.

The following code with spread operator will push **individual strings** from `newSubjects` to `subjects`:
```
  let subjects: string[] = ['BGS', 'Bangla', 'Maths'];
  
  console.log('Initial subjects : ', subjects)
  
  let newSubjects: string[] = ['English', 'Biology', 'Physics'];
  
  console.log('Initial newSubjects: ', newSubjects);
  
  subjects.push(...newSubjects); // with spread operator
  
  console.log('subjects after spreading newSubjects:', subjects);

```