// Dom Elements 

const oneCup = document.querySelector('#one-cup');
const twoCups = document.querySelector('#two-cups');
const threeCups = document.querySelector('#three-cups');
const message = document.querySelector('#message');
const blackCobraButton = document.querySelector('#blackcobra');
const body = document.querySelector('backgroundimage');

// Coffee Ratio Calculations Object (1:17 Ratio)

const ratios = [
    {name: "One Cup", measurement: "13"},
    {name: "Two Cups", measurement: '27'},
    {name: "Three Cups", measurement: '41'}
];



// Filter Coffee using filter method

//const oneCupRatio = ratios.filter(ratios => ratios.measurement === "13");



// Show water ratio function

function clickResult(ratios) {
    if (ratios === "one") {
       message.innerHTML = '13 Grams of Coffee';
    } if (ratios === "two") {
        message.innerHTML = '27 Grams of Coffee';
    } if (ratios === "three") {
        message.innerHTML = '41 Grams of Coffee';
    } if (ratios === "black") {
        message.innerHTML = 'Use the whole coffee bag. Take deep breaths. Relax, you are a champion.';
    }
}


    // Add event listener

blackCobraButton.addEventListener('click', () => blackCobraButton.style.backgroundColor = 'red')


    
 
