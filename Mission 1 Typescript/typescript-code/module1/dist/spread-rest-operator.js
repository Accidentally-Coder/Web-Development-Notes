"use strict";
{
    // spread operator
    // Arrays
    // copy an array
    let subjects = ['BGS', 'Bangla', 'Maths'];
    console.log('Initial subjects : ', subjects);
    let newSubjects = ['English', 'Biology', 'Physics'];
    console.log('Initial newSubjects: ', newSubjects);
    subjects.push(...newSubjects);
    console.log('subjects after spreading newSubjects:', subjects);
    const oldArray = [1, 3, 5];
    const newArray = [2, 4, 6];
    // copies newArray to oldArray
    oldArray.push(...newArray);
    console.log(oldArray);
    // merge arrays
    const sub1 = ['Bangla', 'English', 'Spanish'];
    const sub2 = ['Biology', 'Physics', 'Chemistry'];
    const sub = [...sub1, ...sub2];
    console.log(sub);
    // objects
    const obj1 = {
        a: 1,
        b: 2
    };
    const obj2 = {
        b: 4,
        c: 10
    };
    const mergedObj = Object.assign(Object.assign({}, obj1), obj2);
    console.log(mergedObj);
    // function parameters
    function sum(a, b, c) {
        return a + b + c;
    }
    // same as sum(1,2,3)
    const numbers = [1, 2, 3];
    const result = sum(...numbers);
    console.log(`sum with spread operator : ${result}`);
    // Rest Operator
    function sumRest(...nums) {
        let sum = 0;
        nums.forEach((num) => {
            sum = sum + num;
        });
        return sum;
    }
    console.log(`sum with rest operator : ${sumRest(1, 2, 3)}`);
}
