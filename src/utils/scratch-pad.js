// const password = 'PASSWORDpassword!@#$$%%1234';

const password = 'PASSx#@!!';
const numbers = 'asdf';

const x = password.split('').some((c) => c.toUpperCase().match('[A-Z]'));

const n = numbers.split('').some((c) => c.match('[0-9]'));

console.log(n);
