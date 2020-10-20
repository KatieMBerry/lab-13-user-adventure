import { quests } from '../data/data.js';
import { getUser, USER } from '../storage/storage-utils.js';

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
    questLink.href = `../quest/?id=${quest.id}`;

    ul.append(li);
});

//map page should see if the user completed the adventure
const user = getUser(USER);
// console.log(user);

function userFinishedQuests(user) {
    for (let i = 0; i < quests.length; i++) {
        const questCompleted = quests[i];
        if (!user.completed[questCompleted.id]) {
            return false;
        }
    }
    return true;
}
//check conditions of user to see if need to be sent to the results page
if (user.hp <= 0 || userFinishedQuests(user)) {
    window.location.href = '../results/';
}


