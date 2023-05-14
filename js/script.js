function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
    } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis!");
    } else if (argPlayerMove == "nieznany ruch") {
        printMessage("Wpisałeś liczbę inną niż 1, 2 lub 3 - Nie ładnie :("); 
    } else {
        printMessage("Przegrywasz!");
    }
}    

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let argComputerMove = computerMove;

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
let argPlayerMove = playerMove;

printMessage('Twój ruch to: ' + playerMove);

displayResult(argComputerMove, argPlayerMove);



