// Reject the promises
// Write and export a function named uploadPhoto. It should accept one argument fileName (string).
// The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

function uploadPhoto(filename) {
    return Promise.reject(Error(`${filename} cannot be processed`));
}

export { uploadPhoto };