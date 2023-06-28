// Handle multiple promises
/**
 * Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
    Write and export a function named handleProfileSignup.
    It should accept three arguments firstName (string), 
    lastName (string), and fileName (string). 
    The function should call the two other functions. 
    When the promises are all settled it should return an array with the following structure:
 */

import {signUpUser } from "./4-user-promise.js"
import { uploadPhoto } from"./5-photo-reject.js";

function handleProfileSignup(firstName, lastName, fileName){
    const signUpUserPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);


    return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((value) => {
        const result = [];
        value.forEach((element) =>{
            if(element.status == "fulfilled"){
                result.push({status: element.status, value: element.value})
            }else{
                result.push({status: element.status, value: `${element.reason}`})
            }
        });
        return result;

    });

}
export { handleProfileSignup };