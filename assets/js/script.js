// for (var z = 0; z<4 ; z++) {
//     testArray[z] = 
// }
// console.log(testArray);

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

var vocabR = shuffle(vocab);

var i = -1;
var forgotA = [];
var meaningArray = [];

console.log(vocabR);

function index(x) {
    // console.log(x);
    if (i < 1) {console.log('nope')} else {
        i = i + x;   
        
        console.log(i);
        
        var countin = document.getElementsByTagName('h2')[0];
        var txt = document.querySelector('.h3');
        
        txt.style = null;
        txt.innerText = vocabR[i][0];
        
        if ( i=== 0) {countin.style.display = "block";}
        countin.innerText = `${i+1} / ${vocabR.length}`;
        // i++;
    }
}

function vocabL() {
    i++;
    console.log(i);
    if (i===vocabR.length) {
        reset();
    }

	var countin = document.getElementsByTagName('h2')[0];
    var txt = document.querySelector('.h3');

    txt.style = null;
    
    if (vocabR[i][1] !== '') {    
        txt.innerText = `${vocabR[i][0]}*`;
    } else {   
        txt.innerText = vocabR[i][0];
    }

	if ( i=== 0) {countin.style.display = "block";}
	countin.innerText = `${i+1} / ${vocabR.length}`;

}

function meaningWhat() {
    meaningArray[i] = window.prompt("Enter it: ");
    console.log(meaningArray);
}

function forgot() {
    forgotA.push(` ${vocabR[i][0]}`) ;
    console.log(forgotA);
    vocabL();
}

function reset() {
    document.querySelector('.word').innerHTML =
    `
    

    <h1 style="font-size: 50px;">Here's what u havnt remember yet bích :)</h1>
    <p>${forgotA}!!</p>
    <p class="p2"> Reload to roll againnnn .-. </p>
    <div onclick="showList()" class="btn btn--after ds">list</div>
    `;
}

// function hint() {
// 	var j = i - 1;

// 	if (vocabR[j][1] !== '') {
// 		alert(vocabR[j][1]);
// 	} else {alert('Nothin herrreeeee!');}
// }


function f2Show() {
    // console.log(f2);
    var j = i;

    if (vocabR[j][1] !== '') {    
        var f2 = document.querySelector('.frame2');
        document.querySelector('.frame2').innerHTML =
        `
        ${vocabR[j][1]}
        <div onclick="f2uShow()" class="btn__back">
            <i class="btn__back__icon fa-solid fa-circle-chevron-left"></i>
        </div>
        `;
        
        f2.classList.add('f2__act');
    } else {alert('Nothin herrreeeee!');}
}

function f2uShow() {
    var f2 = document.querySelector('.frame2');
    console.log(f2);
    f2.classList.remove('f2__act');
}

function testDraft() {
    for (var z = 0 ; z<10 ; z++) {
        if (meaningArray[z]) {
            console.log(`${vocabR[z][0]} - ${meaningArray[z]}`);
        }
    }
}

function showList() {
    var tempArray = [];

    for (var z = 0 ; z<meaningArray.length ; z++) {
        if (meaningArray[z]) {
            tempArray.push(` ${vocabR[z][0]} - ${meaningArray[z]}`) ;
        }
    }

    var f2 = document.querySelector('.frame2');
    document.querySelector('.frame2').innerHTML =
    `
    ${tempArray}
    <div onclick="f2uShow()" class="btn__back">
        <i class="btn__back__icon fa-solid fa-circle-chevron-left"></i>
    </div>
    `;
    
    f2.classList.add('f2__act');
    f2.style.fontSize = '30px';
}