import { divideFunction } from "./8-try.js"


try {
    const result =  divideFunction(10, 5);
    const result2 = divideFunction(10, 0);

    console.log('Division result:', result);
    console.log('Division result2:', result2);
  } catch (error) {
    console.error('Error:', error.message);
  }

  //console.log(divideFunction(10, 2));
  //console.log(divideFunction(10, 0));
