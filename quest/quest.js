import quests from '../data/data.js';
import { findById } from '../utils.js';
import { saveUser, getUser } from '../storage/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);
const section = document.querySelector('section');

// console.log(searchParams.get('id'));
const id = searchParams.get('id');
const quest = findById(quests, id);

// console.log(quest); //should be the array of the matching quest

//use quest to make something on the page
const h2 = document.createElement('h2');
h2.textContent = quest.title;
section.appendChild(h2);

// console.log(quest.choices);
const form = document.createElement('form');
section.appendChild(form);

//creates a form via a loop
quest.choices.forEach(choice => {
    const radios = document.createElement('input');
    radios.type = 'radio';
    radios.value = 'choice.id';
    radios.name = 'choices';
    //for descriptions:
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;
    label.append(span, radios);
    form.appendChild(label);
});

const button = document.createElement('button');
button.textContent = 'Decide';

//add event listener
form.addEventListener('click', (e) => {
    e.preventDefault;
    const checked = document.querySelector(':checked');

    const selection = checked.value;
    //console.log(selection); gives the radio value

    //to assign a value to the choice selected (++ or -- user pts) we do into the array to find the selected one:
    const choice = findById(quest.choices, selection);

    //grab user, update (get) state, save (set) user
    const user = getUser();
    user.gold += choice.gold;
    user.hp -= choice.hp;

    //when user completes quest set in local storage; map page should see if user completed adventure:
    user.completed[quest.id] = true;
    saveUser(user);
    console.log(user);

});

form.appendChild.button;