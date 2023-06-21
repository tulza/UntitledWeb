setTimeout(() => {
    const elem = document.getElementById("preloader");
    elem.parentNode.removeChild(elem);
}, 2100);

console.log('hi');

let luckyNum = 7;
console.log(luckyNum);

luckyNum = new Object();
console.log(luckyNum);

luckyNum = {
    luckType: 'pogas',
    number: 7,
    creation: '21/06/23',
};

console.log(luckyNum)

function add(a, b){
    return a+b
};
console.log(this)
wtfIsThis();
function wtfIsThis(){
    console.log(this);
};

const person = {
    wtfIsThis: () => {
        console.log(this);
    }
}

console.log(person)

function CLICKED(){
    alert('random button')
}