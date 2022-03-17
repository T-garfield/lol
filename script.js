var vocab = [
	'athlete',
	'athletic',
	'beat',
	'board game in',
	'caption',
	'carry on',
	'challenge',
	'champion',
	'cheat',
	'classical music',
	'club',
	'coach',
	'competition',
	'concert',
	'defeat',
	'eat out',
	'entertaining',
	'folk music',
	'give up',
	'group',
	'gym',
	'have fun',
	'in the middle of',
	'join in',
	'member',
	'opponent',
	'organise',
	'pleasure',
	'referee',
	'rhytm',
	'risk',
	'score',
	'send off',
	'support',
	'take up',
	'team',
	'turn down',
	'turn up',
	'video game'
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

	var countin = document.getElementsByTagName('h2')[0];
    var txt = document.querySelector('.h3');

    txt.style = null;
    txt.innerText = array2[i];

	if ( i=== 0) {countin.style.display = "block";}
	countin.innerText = `${i+1} / ${array2.length}`;

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