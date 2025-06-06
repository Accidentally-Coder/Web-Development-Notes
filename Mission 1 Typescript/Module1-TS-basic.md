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
number, string, boolean, null, undefined, symbol
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
**Use ``?`` after variable/member name after declaring to declare it as an optional member.**
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
*If you hover over **middleName** in declaration, it will show ``(property) middleName?: string | undefined``*

   