const prefixes = [{string: 'in order to', type: 'instruction'}, {string: 'it is important to', type: 'statement'}];
const goal = ['make more money than your friends', 'find true love', 'love yourself', 'reach sexual fulfillment', 'find peace of mind', 'enjoy same sex foot massages', 'be as good as your dad', 'grow that beer belly you have always wanted'];
const filler = ['you need to', 'you should', 'you can', 'make sure to'];
const action = ['pet cats', 'grind harder than anyone else', 'be hard on yourself so that you can improve', 'purchase a wheelbarrow and proudly parade down town', 'picture yourself in a music video', 'meditate on having foreskin', 'think highly of youself', 'watch a good movey', 'lick the top of a girls scalp', 'acquire a pet lizard', 'read affirmations in the mirror'];
const frequency = ['every day', 'from time to time', 'when grandma dies', 'every time your boss sneezes', 'on easter', 'a few times per year'];

//Takes in an array and returns a random index for that array
function getRandomIndex(arr){
    num = Math.floor(Math.random() * arr.length);
    return num;
};

//Capitalizes an element in an array (first letter toUpperCase)
function capitalize(arr, index){
    if(typeof arr[index] === 'object'){
        arr[index].string = arr[index].string.replace(arr[index].string[0], arr[index].string[0].toUpperCase());
    } else {
        arr[index] = arr[index].replace(arr[index][0], arr[index][0].toUpperCase());
    }
};

//Builds a message from they arrays with random indexes.
function buildMessage(){
    const prefixIndex = getRandomIndex(prefixes);
    capitalize(prefixes, prefixIndex);

    //Checks if the string is an instruction or not and formats the string accordingly. (Statments are two sentences).
    if (prefixes[prefixIndex].type === 'instruction'){
        console.log(prefixes[prefixIndex].string + ' ' + goal[getRandomIndex(goal)] + ' ' + filler[getRandomIndex(filler)] + ' ' + action[getRandomIndex(action)] + ' ' + frequency[getRandomIndex(frequency)] + '.');
    } else {
        const fillerIndex = getRandomIndex(filler);
        capitalize(filler, fillerIndex);
        console.log(prefixes[prefixIndex].string + ' ' + goal[getRandomIndex(goal)] + '. ' + filler[fillerIndex] + ' ' + action[getRandomIndex(action)] + ' ' + frequency[getRandomIndex(frequency)] + '.');

    }
}

buildMessage();
