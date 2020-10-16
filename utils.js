export function findById(questArray, questId) {
    for (let i = 0; i < questArray.length; i++) {
        const questItem = questArray[i];
        if (questItem.id === questId) {
            return questItem;
        }
    }
}
