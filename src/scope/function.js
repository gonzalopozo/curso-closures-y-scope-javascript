function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }

}

greeting(); // "Ana" y "Hello Ana!" 
console.log(userName); // ReferenceError: nombre is not defined