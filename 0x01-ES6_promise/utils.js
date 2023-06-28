export function createUser(){
    return Promise.resolve({
        firstName: 'Peter',
        lastName: 'Dan'
    });
}


export function uploadPhoto(){
    return Promise.resolve({
        id: 1,
        body: 'Profile-1'
    });
}