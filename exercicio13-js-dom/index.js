let namePlayers = [];
let count = '0';
const savePlayersName = document.getElementById('savePlayersNameBtn').addEventListener('click',function(){

    const player1Name = document.getElementById('namePlayer1').innerText

    const player2Name = document.getElementById('namePlayer2').innerText

    namePlayers.id = count
    namePlayers.name = player1Name

    count++;
    namePlayers.id = count
    namePlayers.name = player2Name
})

const boardRegions = document.querySelectorAll('#gameBoard span')
const vBoard = []
let turnPlayer = ''

function updateTitle(){

    const playerInput = document.getElementById(turnPlayer)

    document.getElementById('turnPlayer').innerText = playerInput.value

}

function initializeGame(){
    vBoard = [['','',''],['','',''],['','','']];
    turnPlayer = 'namePlayer1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function(element){
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function handleBoardClick(ev){

}

