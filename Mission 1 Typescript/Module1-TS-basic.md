# What is Typescript
Typescript is an OOP language built on JS with extra features.

## Why TS? / Pros of TS
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


# Program
Say, ts file name is "index.ts"
- **Running ts file using node:** ```node index.ts```
- **converting ts file to js:** ```tsc index.ts```

*Ts and js files are not kept in the same folder. So, configure ts:*
- **configure ts:** ```tsc --init``` and a configuration file ```tsconfig.json``` will open in the root directory.
- Press ctrl+f and search ```rootDir```, uncomment it and write the directory where ts file should be saved.
For example:  ```"rootDir": "./module1/src/",```
- Press ctrl+f and search ```outDir``` and give the location where ts file will be compiled into js file and be saved. For example:
  ```"outDir": "./module1/dist",```
Here, ```dist``` is *distributor* file.
- Now go to the root directory and give command ```tsc```, *index.js* file will be created in *./module1/dist* directory if ran successfully.