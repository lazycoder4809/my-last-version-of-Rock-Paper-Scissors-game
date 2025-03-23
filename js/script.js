let item = JSON.parse(localStorage.getItem('1order')) || { order: 0 };

function orderBeer() {
    if (item.order < 30) {
        item.order += 1; 
        document.getElementById("counter").innerText = `Items: ${item.order}`; 
        localStorage.setItem('1order', JSON.stringify(item)); 
    }
}
    //else if (item === 30) {
    //     alert('No more products!');
    //}
//function resetOrder() {
    //item = 0;
  //  document.getElementById("c ounter").innerText = `Items: ${}`;
//}

let IConsole = 0;
let resalt = 0;

function Console() {
     IConsole += 2;
    console.log('you have Ordered:',ICosnsole);
}
function ShowTotal(IConsole){
    console.log('you have total:',IConsole)
}
/*const Youngman = 21
if(Youngman < 18){
    console.
    log('you can not drive')
}
else {
    console.log('welcome')
}
console.log(Math.random())*/



const computermove = Math.random(); 
let move = ''; 
function ComputerFirstMove(computermove) {
    if (computermove >= 0 && computermove < 1/3) {
        move = 'rock';        
        console.log('rock')
    } else if (computermove >= 1/3 && computermove < 2 / 3) {
        move = 'paper';
        console.log('paper')
    } else if(computermove >= 2/3 &&  computermove< 1) {
        move = 'scissors';
        console.log('scissors')
    }
    return move; 
}
let Won = 0
const Timeswon = (Won) =>{
Won = Won + 1
console.log(Won)
} 
//const Supergigachat = undefined||'euro'
    //console.log(Supergigachat)
console.log('anything'.length)