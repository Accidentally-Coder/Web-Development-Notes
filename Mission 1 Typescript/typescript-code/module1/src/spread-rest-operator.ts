{
    // spread operator

    // Arrays
    // copy an array
    let subjects: string[] = ['BGS', 'Bangla', 'Maths'];
    console.log('Initial subjects : ', subjects)
    let newSubjects: string[] = ['English', 'Biology', 'Physics'];
    console.log('Initial newSubjects: ', newSubjects);
    subjects.push(...newSubjects);
    console.log('subjects after spreading newSubjects:', subjects);

    const oldArray: number[] = [1, 3, 5];
    const newArray: number[] = [2, 4, 6];
    // copies newArray to oldArray
    oldArray.push(...newArray);
    console.log(oldArray)


    // merge arrays
    const sub1: string[] = ['Bangla', 'English', 'Spanish'];
    const sub2: string[] = ['Biology', 'Physics', 'Chemistry'];
    const sub = [...sub1, ...sub2];
    console.log(sub);

    // objects
    const obj1: {
        a: number;
        b: number;
    } = {
        a: 1,
        b: 2
    };
    const obj2: {
        b: number;
        c: number;
    } = {
        b: 4,
        c: 10
    };
    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj);


    // function parameters
    function sum(a: number, b: number, c: number): number {
        return a + b + c;
    }
    // same as sum(1,2,3)
    const numbers: [number, number, number] = [1, 2, 3];
    const result = sum(...numbers);
    console.log(result)
}