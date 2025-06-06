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

const userLiteral: {
    firstName: 'Md',
    secondName: string;
    middleName?: string;
    lastName: string;
} = {
    firstName: 'Md',
    secondName: 'X',
    lastName: 'Z'
}
console.log(userLiteral);