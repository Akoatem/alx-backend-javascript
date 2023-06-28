// Await / Async
// Import uploadPhoto and createUser from utils.js

// Write an async function named asyncUploadUser that will call these 
// two functions and return an object with the following format:
import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
    try {
      const photoPromise = uploadPhoto();
      const userPromise = createUser();
  
      const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);
  
      return {
        photo: photoResponse,
        user: userResponse,
      };
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  }
  

export {asyncUploadUser};
