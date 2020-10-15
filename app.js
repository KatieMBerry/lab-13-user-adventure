import { USER } from './storage/storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault;

    const data = new FormData(form);

    //Set Up State Object
    const user = {
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 50,
        completed: {}
    };

    //Set State Object in Local Storage
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
});


