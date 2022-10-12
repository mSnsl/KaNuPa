let choices = ['ROCK','PAPER', 'SCISSORS']
let getComputerPick = choices[Math.floor(Math.random()*choices.length)]

let playerImput = prompt ("Rock, Paper or Scissors?")
    let getPlayerPick = playerImput.toUpperCase()

function playRound (playerSelection,computerSelection){
    if (playerSelection ==='ROCK'){
        if (computerSelection === 'PAPER'){
            return('You lost, Paper wraps Rock') }
        else if (computerSelection === 'SCISSORS'){
            return('You won, Rock dull Scissors')
        }
        else 
            return('You and PC selected both Rock - Draw, try again')}
    
    else if (playerSelection==='PAPER'){
        if (computerSelection === 'SCISSORS'){
            return('You lost, Scissors cuts Paper') }
        else if (computerSelection === 'ROCK'){
            return('You won, Paper wraps Rock')
        }
        else 
            return('You and PC selected both Paper - Draw, try again')}
    else { /*Scissors*/
        if (computerSelection === 'ROCK'){
            return('You lost, Rock dulls Scissors') }
        else if (computerSelection === 'PAPER'){
            return('You won, Scissors cut Paper')
        }
        else 
            return('You and PC selected both Scissors - Draw, try again')}
}

console.log(playRound (getPlayerPick,getComputerPick))
