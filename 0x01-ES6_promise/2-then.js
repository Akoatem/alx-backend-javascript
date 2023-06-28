// Catch me if you can!
// Using the function prototype below

// method 1
 function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error())
      .finally(() => { console.log('Got a response from the API'); });
  }

// method 2

/*function handleResponseFromAPI(promise){
    return new Promise((resolve, reject) =>{
        if(promise){
            resolve({
                status: 200,
                body: 'success'
            });
        }else{
            reject('Error');
        }
    })
}

handleResponseFromAPI().then((handleResponseFromAPI) =>{
    console.log('Message;', handleResponseFromAPI);
}).catch((err) =>{
    console.error("Error:", err);
}).finally(() =>{
    console.log('Got a response from the API');
})*/

  export {handleResponseFromAPI};