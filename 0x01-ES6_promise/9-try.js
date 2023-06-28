// Throw an error
// Write a function named guardrail that will accept one argument mathFunction (Function)
// When the mathFunction function is executed, the value returned by the function should be appended to the queue. 
// If this function throws an error, the error message should be appended to the queue. 
// In every case, the message Guardrail was processed should be added to the queue.

function guardrail(mathFunction) {
    const queue = [];
  
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(error.message);
    } finally {
      queue.push('Guardrail was processed');
    }
  
    return queue;
  }

  export {guardrail};