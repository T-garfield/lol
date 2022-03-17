var vocab = [
	'competion',
	'opponent',
	'referee',
	'pleasure',
	'carry on',
	'eat out',
	'send off',
	'take up',
	'in the middle of',
	'athlete',
	'athletic',
	'beat',
	'board game in',
	'caption',
	'challenge',
	'champion',
	'cheat',
	'classical music',
	'club',
	'coach',
	'competition',
	'concert',
	'defeat',
	'entertaining',
	'folk music',
	'group',
	'gym',
	'have fun',
	'member',
	'opponent',
	'organise',
	'pleasure',
	'referee',
	'rhytm',
	'risk',
	'score',
	'support',
	'team',
	'video game',
	'carry on',
	'eat out',
	'give up',
	'join in',
	'send off',
	'take up',
	'turn down',
	'turn up'
]

// txt.innerText = 'abc';

//test
    // var vocab = [
    //     'a',
    //     'b',
    //     'c',
    //     'd',
    //     'e',
    //     'f'
    // ]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var array2 = shuffle(vocab);

function vocabR() {
    console.log('abc');
    var txt = document.querySelector('.h3');
    txt.style = null;
    var random = Math.floor(Math.random() * vocab.length);
    console.log(random);    
    
    txt.innerText = vocab[random];
}

var i = 0;
var forgotA = [];
// var forgotA = [	' send off',
// ' take up',
// ' turn down',
// ' turn up'];

function vocabL() {
    if (i===array2.length) {
        reset();
    }

    var txt = document.querySelector('.h3');
    txt.style = null;
    txt.innerText = array2[i];
    i++;
    // return i;
}

function forgot() {
    forgotA.push(` ${array2[i-1]}`) ;
    console.log(forgotA);
    vocabL();
}

// vocabR()
// console.log(vocab);

console.log(array2);

// for (i in vocab) {
//     array2[i] = Math.floor(Math.random() * vocab.length);
//     console.log(array2[i]);
// }



function reset() {
    // console.log(document.querySelector('.word').innerHTML);
    document.querySelector('.word').innerHTML =
    `
    <h1 style="font-size: 50px;">Here's what u havnt remember yet bích :)</h1>
    <p>${forgotA}!!</p>
    <p class="p2"> Reload to roll againnnn .-. </p>
    `;
}

// reset();