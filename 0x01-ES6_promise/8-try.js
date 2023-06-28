// Throw error / try catch
// Write a function named divideFunction that will accept two arguments: 
// numerator (Number) and denominator (Number).
// Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).
// Otherwise it should return the numerator divided by the denominator.

export function divideFunction(numerator, denominator){
    if (denominator === 0) {
        throw new Error('Cannot divide by 0');
      }
    
      return numerator / denominator;
    }