let playerTurnValue = 1
let verifySendBtn = false
let countPressBtn = 0
const playerOne = document.getElementById('playerOneName')
const secondPlayer = document.getElementById('secondPlayerName')
const gameTitle = document.getElementById('gameTitle')

// verifica se os campos de nome estão vazios para habilitar botão de 'pronto'
document.querySelectorAll(".playerName").forEach(function (inputPlayerName) {
  inputPlayerName.addEventListener('keyup', function () {
    const sendBtn = document.getElementById('sendBtn')
    if (playerOne.value != '' && secondPlayer.value != '') {
      sendBtn.removeAttribute('disabled')
      sendBtn.className = 'sendEnabled'
      // verifySendBtn = true
    }else{
      sendBtn.setAttribute('disabled', '')
      sendBtn.className = 'sendDisabled'
      // verifySendBtn = false
    }

  })
})

// seta valor de cada quadrado dependendo da vez de quem joga e o desabilita 
document.querySelectorAll(".gameBtn").forEach(function(btn) {
  btn.className += ' sendEnabled'
  btn.addEventListener('click', function () {
    countPressBtn += 1
    if (playerTurnValue == 1) {
      btn.innerHTML = 'X'
      playerTurnValue -= 1
      setPlayerTurn()
    }else {
      btn.innerHTML = 'O'
      playerTurnValue += 1
      setPlayerTurn()
    }
    btn.setAttribute('disabled','disabled')
    btn.className += ' sendDisabled'
    verifyPlayerWinner()
  })
})

// recarrega a pagina para reiniciar o jogo
document.getElementById('refresh').addEventListener('click', function(){
  document.location.reload()
})

// quando botão 'PRONTO' apertado habilita o jogo e o botão de recarregar
document.getElementById('sendBtn').addEventListener('click', function(ev) {
  document.querySelectorAll('.gameBtn').forEach(function(gameBtn) {
      gameBtn.removeAttribute('disabled')
  })
  const refreshBtn = document.getElementById('refresh')
  refreshBtn.removeAttribute('disabled')
  refreshBtn.className = 'sendEnabled'
  // ev.currentTarget.setAttribute('disabled', '')
  // playerOne.setAttribute('disabled', '')
  // secondPlayer.setAttribute('disabled', '')
  const sendBtn = ev.currentTarget
  cadArea = sendBtn.parentNode
  cadArea.parentNode.removeChild(cadArea)
  administerPlayerTurnTitle(1)
  setPlayerTurn()
})

// verifica se deve ser inserido ou removido o nome do jogador da vez
function administerPlayerTurnTitle(verify) {
  const playerNameTitle = document.createElement('h2')
  playerNameTitle.setAttribute('id','playerTurnName')
  if(verify == 1){
    gameTitle.appendChild(playerNameTitle)
  }else if(verify == 0) {
    gameTitle.removeChild(document.getElementById('playerTurnName'))
  }
}

// altera o nome do jogador da vez
function setPlayerTurn() {
  if (countPressBtn < 9) {
    if (playerTurnValue == 1) {
      document.getElementById('playerTurnName').innerHTML = `VEZ JOGADOR: ${(playerOne.value.toUpperCase())} - X`
    }else{
      document.getElementById('playerTurnName').innerHTML = `VEZ JOGADOR: ${secondPlayer.value.toUpperCase()} - O`
    }
  }
}

function announcePlayerWinner(winner) {
  const playerWinner = document.createElement('h2')
  playerWinner.setAttribute('id','playerWinner')
  if (winner === 'X') {
    playerWinner.innerHTML = `GANHADOR: ${playerOne.value.toUpperCase()}`
  }else if (winner === 'O') {
    playerWinner.innerHTML = `GANHADOR: ${secondPlayer.value.toUpperCase()}`
  }else{
    playerWinner.innerHTML = `GANHADOR: EMPATE | DEU VELHA`

  }
  gameTitle.appendChild(playerWinner)
}

function verifyPlayerWinner() {
  const gameBtn1 = document.getElementById('gameBtn-1').textContent
  const gameBtn2 = document.getElementById('gameBtn-2').textContent
  const gameBtn3 = document.getElementById('gameBtn-3').textContent
  const gameBtn4 = document.getElementById('gameBtn-4').textContent
  const gameBtn5 = document.getElementById('gameBtn-5').textContent
  const gameBtn6 = document.getElementById('gameBtn-6').textContent
  const gameBtn7 = document.getElementById('gameBtn-7').textContent
  const gameBtn8 = document.getElementById('gameBtn-8').textContent
  const gameBtn9 = document.getElementById('gameBtn-9').textContent
  if (gameBtn1 == gameBtn2 && gameBtn1 == gameBtn3 && gameBtn1 !='  '){
    console.log('X-X-X\n|-|-|\n|-|-|');
    announcePlayerWinner(gameBtn1)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(1)
  } else if (gameBtn4 == gameBtn5 && gameBtn4 == gameBtn6 && gameBtn4 !='  ') {
    console.log('|-|-|\nX-X-X\n|-|-|');
    announcePlayerWinner(gameBtn4)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(2)
  } else if (gameBtn7 == gameBtn8 && gameBtn7 == gameBtn9 && gameBtn7 !='  ') {
    console.log('|-|-|\n|-|-|\nX-X-X');
    announcePlayerWinner(gameBtn7)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(3)
  } else if (gameBtn1 == gameBtn5 && gameBtn1 == gameBtn9 && gameBtn1 !='  ') {
    console.log('x-|-|\n|-x-|\n|-|-x');
    announcePlayerWinner(gameBtn1)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(4)
  } else if (gameBtn3 == gameBtn5 && gameBtn3 == gameBtn7 && gameBtn3 !='  ') {
    console.log('|-|-x\n|-x-|\nx-|-|');
    announcePlayerWinner(gameBtn3)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(5)
  } else if (gameBtn1 == gameBtn4 && gameBtn1 == gameBtn7 && gameBtn1 !='  ') {
    console.log('x-|-|\nx-|-|\nx-|-|');
    announcePlayerWinner(gameBtn1)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(6)
  } else if (gameBtn2 == gameBtn5 && gameBtn2 == gameBtn8 && gameBtn2 !='  ') {
    console.log('|-x-|\n|-x-|\n|-x-|');
    announcePlayerWinner(gameBtn2)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(7)
  } else if (gameBtn3 == gameBtn6 && gameBtn3 == gameBtn9 && gameBtn3 !='  ') {
    console.log('|-|-x\n|-|-x\n|-|-x');
    announcePlayerWinner(gameBtn3)
    administerPlayerTurnTitle(0)
    disabledAllBtn()
    colorBtnWinner(8)
  }else if (countPressBtn == 9){
    announcePlayerWinner('')
    administerPlayerTurnTitle(0)
  }
}

function disabledAllBtn(){
  document.querySelectorAll('.gameBtn').forEach(function(btn){
    btn.setAttribute('disabled','')
  })
}

function colorBtnWinner (caseOption){
  const gameBtn1 = document.getElementById('gameBtn-1')
  const gameBtn2 = document.getElementById('gameBtn-2')
  const gameBtn3 = document.getElementById('gameBtn-3')
  const gameBtn4 = document.getElementById('gameBtn-4')
  const gameBtn5 = document.getElementById('gameBtn-5')
  const gameBtn6 = document.getElementById('gameBtn-6')
  const gameBtn7 = document.getElementById('gameBtn-7')
  const gameBtn8 = document.getElementById('gameBtn-8')
  const gameBtn9 = document.getElementById('gameBtn-9')
  const winColor = '#4AED5A'
  switch (caseOption) {
    case 1:
      gameBtn1.style.backgroundColor = winColor
      gameBtn2.style.backgroundColor = winColor
      gameBtn3.style.backgroundColor = winColor
      break;
    case 2:
      gameBtn4.style.backgroundColor = winColor
      gameBtn5.style.backgroundColor = winColor
      gameBtn6.style.backgroundColor = winColor
      break;
    case 3:
      gameBtn7.style.backgroundColor = winColor
      gameBtn8.style.backgroundColor = winColor
      gameBtn9.style.backgroundColor = winColor
      break;
    case 4:
      gameBtn1.style.backgroundColor = winColor
      gameBtn5.style.backgroundColor = winColor
      gameBtn9.style.backgroundColor = winColor
      break;
    case 5:
      gameBtn3.style.backgroundColor = winColor
      gameBtn5.style.backgroundColor = winColor
      gameBtn7.style.backgroundColor = winColor
      break;
    case 6:
      gameBtn1.style.backgroundColor = winColor
      gameBtn4.style.backgroundColor = winColor
      gameBtn7.style.backgroundColor = winColor
      break;
    case 7:
      gameBtn2.style.backgroundColor = winColor
      gameBtn5.style.backgroundColor = winColor
      gameBtn8.style.backgroundColor = winColor
      break;
    case 8:
      gameBtn3.style.backgroundColor = winColor
      gameBtn6.style.backgroundColor = winColor
      gameBtn9.style.backgroundColor = winColor
      break;
  }
  console.log('colorido');
}