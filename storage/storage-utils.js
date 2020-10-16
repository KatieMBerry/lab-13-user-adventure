
export const USER = 'USER';

//Initialize State Object in Local Storage
export function saveUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(user);
    return JSON.parse(stringyUser);
}