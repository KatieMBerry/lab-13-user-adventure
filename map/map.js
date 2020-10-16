import quests from '../data/data.js';

// console.log(quests);

//create a ul, same for every link
const ul = document.querySelector('ul');

//need to put all quests (loop) on the page as a link; generate links for each quest
quests.forEach(quest => {
    // console.log(quest);
    const li = document.createElement('li');
    const questLink = document.createElement('a'); //use anchor tags b/c link
    li.appendChild(questLink);
    questLink.textContent = quest.title;

    //query parameter using id
    questLink.href = `/quest/?id=${quest.id}`;

    ul.append(li);
});


