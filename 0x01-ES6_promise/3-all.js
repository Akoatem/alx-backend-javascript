// Handle multiple successful promises
// Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve 
// all promises and log body firstName lastName to the console.

import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup(){
    const photo = uploadPhoto();
    const user =  createUser();

    return Promise.all([photo, user]).then((result) =>{
        console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`)
    }).catch((err) =>{
        console.log('Signup system offline', err);
    })
}

export { handleProfileSignup };