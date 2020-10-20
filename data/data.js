export const quests = [
    {
        id: 'cubs',
        title: 'A Den of Cubs',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'bears.png',
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
    },
    {
        id: 'tourist',
        title: 'A Troublesome Tourist',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'tourist3.png',
        description: `
        You found some lovely day-old pizza and cabbage in the dumpster near the beach.  It's such a nice day out, might as well eat by the water. You're inhaling your rum-soaked pizza when you see an insipid tourist clad in socks and sandals who spots you from afar.  He's approaching fervently with camera in-hand. Will you:
    `,
        choices: [{
            id: 'run',
            description: 'Take Your Eats and Bounce',
            result: `
            You stuff your face with the pizza and high tail it to the nearest tree where you haul-up your head of cabbage. The tourist decides it's too much effort to run in sock and sandals after you, so you've escaped the bright flash of his camera. But you drop your head of lettuce to the ground on the way up and a loathsome blue jay flies away with it.
        `,
            hp: -15,
            gold: 15
        }, {
            id: 'bite',
            description: 'Bite His Ankles!',
            result: `
            You are so sick of these half-brained tourists in your forrest town. You drop your pizza and charge towards him, flinging yourself to his feet.  You bite at his ankles, but his socks are so thick you barely make a dent. He flinches and kicks you off, and you go tumbling.  The tourist stomps off mumbling to himself as you are left looking for your pizza and cabbage, which have been stolen by a family of chipmunks.  Points for bravery though! 
        `,
            hp: -40,
            gold: 20
        }, {
            id: 'ignore',
            description: 'Ignore the Weirdo and Continue to Stuff Your Muzzle',
            result: `
            Tourists can be annoying, but when you find such a trove of good eats and can enjoy them while lounging on a beach, who gives a pellet!? Points for your finds and for your chill!
        `,
            hp: 30,
            gold: 30
        }]
    },
    {
        id: 'apples',
        title: 'Apple Tree',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: ['cubs', 'tourist'],
        image: 'apples2.png',
        description: `
        You pick-up a sweet, sweet scent and after a long ramble through the woods you come across a fruiting apple tree.  There must be hundreds!  But only three have fallen to the ground, and you're too tired now to stockpile them for later.  Which one do you choose?
    `,
        choices: [{
            id: 'green',
            description: 'The Green Apple',
            result: 'Woah, that is souuuurrrr!  It makes you grimmace, but hey it is food.',
            hp: -10,
            gold: 30
        }, {
            id: 'golden',
            description: 'The Golden Apple',
            result: 'Oh no! The apple is not golden, it is rotting!  And you almost bit into a worm, gross.',
            hp: -50,
            gold: 30
        }, {
            id: 'red',
            description: 'The Red Apple',
            result: 'You bite into a crisp, luscious apple. Time to kick your paws up and relax.',
            hp: 30,
            gold: 30
        }]
    }
]; 