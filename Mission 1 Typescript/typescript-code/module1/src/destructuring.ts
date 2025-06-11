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

}