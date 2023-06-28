// Don't make a promise...if you know you can't keep it
// Using the prototype below, return a promise. The parameter is a boolean
 
//method 1

function getFullResponseFromAPI(success){
    return new Promise((resolve, reject) => {
        if (success){
            resolve({
                status: 200,
                message: 'success'
            })
        }else{
            reject('The fake API is not working currently');
            
        }
    })
}

  getFullResponseFromAPI(() =>{
    console.log(getFullResponseFromAPI);

}).catch((err) =>{
    console.error("error:", err);
});


// method 2

 /*function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }*/



export { getFullResponseFromAPI };