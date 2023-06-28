// Simple promise

function signUpUser(firstName, lastName) {
    return new Promise((resolve)=>{
        resolve({
            firstName,
            lastName,
        });
    })
}

export { signUpUser };