const user = {
    firstName: 'A',
    middleName: 'B',
    lastName: 'C'
}

console.log(user)

const userEx: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'A',
    middleName: 'B',
    lastName: 'C'
}

console.log(userEx);

const userOp: {
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    firstName: 'X',
    lastName: 'Z'
}
console.log(userOp);
