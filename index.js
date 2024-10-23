console.log('Log')

const birdInput = document.getElementById('bird');
const bird = birdInput.value;

const roommateInput = document.getElementById('roommate');
const roommate = roommateInput.value;

const nounInput = document.getElementById('noun');
const noun = nounInput.value;

const liquidInput = document.getElementById('liquid');
const liquid = liquidInput.value;

const bodyPartInput = document.getElementById('bodyPart');
const bodyPart = bodyPartInput.value;


const generateMadLibs = () => {
    const madLib = `It was a cold day in Octiober. 
    I woke to the smell of ${bird} roasting in the kitchen.
    My roommate said "see if ${roommate} needs a fresh ${noun}.
    So I carried a glass of ${liquid} into ${roommate}'s room,
    When I got there I couldn't beleive my ${bodyPart}`;

    
    return madLibText 
}

const getInputValue(id)