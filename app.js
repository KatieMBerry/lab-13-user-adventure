import { saveUser } from './storage/storage-utils.js';

const form = document.querySelector('form');

//loads on submit
form.addEventListener('submit', (e) => {
    e.preventDefault;

    const data = new FormData(form);

    //Set Up State Object & save to local storage (refactored)
    saveUser({
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 50,
        completed: {}
    });
    //redirect to map page
    window.location.href = './map/index.html';
});


