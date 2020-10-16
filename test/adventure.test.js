// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';
import { quests } from '../data/data.js';

const test = QUnit.test;


test('should take in an array and id and shuld return the matching object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const id = 'cubs';

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        id: 'cubs',
        title: 'A Den of Cubs',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'bears.jpg',
        description: `
        You scurry towards a capacious bush to stow away in when you realize you are stumbling into a bear's den. You are perturbed to find yourself amidst 3 young cubs.  What do you do?
    `,
        choices: [{
            id: 'play',
            description: 'Play with Them',
            result: `Baby cubs love to roll around and wrestle. They can be awfully endearing, but beware when they wake their sleeping momma. She is not too pleased to find you cavorting with her babes. She lets out a thunderous growl, and swats you out of her den. At least you leave with a sexy scar.
`,
            hp: -30,
            gold: 10
        }, {
            id: 'steal',
            description: 'Steal Their Honey',
            result: `
            What a low-life to steal from some darling baby bears! I hope you're happy with yourself! ...But at least your belly is full.
        `,
            hp: -10,
            gold: 20
        }, {
            id: 'get-out',
            description: 'Get Out of There!',
            result: `
            You slip out of the den before anyone notices. Points for your stealthiness!
        `,
            hp: 50,
            gold: 0
        }]
    };

    const foundId = findById(quests, id);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(foundId, expected);
});
