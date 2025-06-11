{
    // object destructuring
    const user = {
        id: 1,
        name: {
            firstName: 'Farzana',
            middleName: 'Reefat',
            lastName: 'Raha'
        },
        email: 'abc@gmail.com',
        country: 'Bangladesh'
    }
    // destructuring
    const { email } = user;
    console.log(`email : ${email}`)

    // destructuring nested objects
    const { name: { lastName } } = user;
    console.log(`Lastname : ${lastName}`);

    // array destructuring
    const numbers: number[] = [10, 20, 30, 40, 50, 60];
    const [a, b] = numbers // a = 10, b = 20
    console.log(a, b)
    const [, , , d, e] = numbers // skips 1st, 2nd, 3rd array element and stores 4th and 5th
    console.log(d, e)
    const [, , ...rest] = numbers // skips 1st, 2nd and stores from 3rd element till end in array
    console.log(rest)
}