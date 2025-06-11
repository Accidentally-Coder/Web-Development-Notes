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

}