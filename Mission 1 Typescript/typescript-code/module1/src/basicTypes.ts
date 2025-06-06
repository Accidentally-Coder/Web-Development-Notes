// Basic Data Types

let str = 'I feel homesick'
console.log(str)
// str = 3 // shows error :  cannot be assigned as str is string already

let str2: string = 'I want to go home'
console.log(str2)

let day: number = 362025

let sad: boolean = true

let kobeBashayJabo: undefined = undefined

let ticketNai: null = null

let anyVar // declared as any Type
anyVar = 4
console.log(anyVar)
anyVar = 'aaaaaaaaa'
anyVar = false
console.log(anyVar)

let anyVar2: any = 5
console.log(anyVar2)
anyVar2 = 'nnnnnaaaaaaaaa'
anyVar2 = true
console.log(anyVar2)

// Array
let arr = [2, 'x', true, 100, 'abc']
console.log(arr)

// string array declaration
let friends: string[] = ['agdum', 'bagdum']
console.log(friends)
// number array declaration
let numArr: number[] = [1, 3, 4, 5, 3]
console.log(numArr)

// array add elements
friends.push('bhombol')
console.log(friends)

// different data type er array
let multiArr: (number | string | boolean)[] = [3, 'multi array', true, 342, false]
console.log(multiArr)

// tuple : typed array with pre-defined length
// and types for each index

let myTuple: [number, string, boolean] = [1, 'Ammu', true]
console.log(myTuple)

myTuple = [2, 'value change korte dey', true]
console.log(myTuple)

// myTuple = [3, 'tuple e defined length = 3 tar beshi element dile error dibe', true, 682]
// console.log(myTuple)

// myTuple = [true, 4, 'tuple e type er order change kora jay na']
// console.log(myTuple)

myTuple[0] = 3
console.log(myTuple)

let mytup2: [number, boolean]
// Here, defined length is 2 and
// length er kom declare korle hobe na tuple e
// mytup2 = [1]
// mytup2.push(true)
// console.log(mytup2)