
/*  BASIC FLOW ALGORITHM PROJECT

1. Deposit money
2. Collect bet amount
3. Spin the slot machine [Manual/Auto] Spin  
4. Check if user won
5. Release the user winnings
6. Repeat
*/

/* FEATURES TO ADD sorted from most to less priority 
  1. PLAYER WINNINGS (WINS FROM 2 SLOTS & 3 SLOTS).           //done 
  2. - + BUTTONS ON PLACE BET.                                //done
  3. BET MENU MODAL DIALOG.                                   //done
  4. BETTING AND REWARDS INFORMATION (modal).                 //        
  5. MAXIMIZE & MINIMIZE SCREEN WINDOW.                       //done   
  6. RESET DEMO GAME BUTTON (if localStorage is implemented). //done
*/

/* ERRORS TO FIXED 
  1.
*/


/* BUGS TO FIXED
  1. Stop player from spinning/rolling the slot during rolling. //done
  2. ?
*/

let player = {
  credits: 1000.00,
  bet: 0.00,
  winnings: 0.00
};

//load player data from localStorage if it exists
function loadPlayerData() {
  const savedPlayer = localStorage.getItem('player');
  if (savedPlayer) {
    player = JSON.parse(savedPlayer);
  }
}

//save player data to localStorage
function savePlayerData() {
  localStorage.setItem('player', JSON.stringify(player));
}

const imgReels = [
  'c-icon.png', 
  'css-icon.png', 
  'git-icon.png', 
  'github-icon.png',
  'html-icon.png', 
  'js-icon.png', 
  'java-icon.png', 
  'linux-icon.png'
];

const betPools = [0, 10, 20, 40, 50, 100, 250, 500, 750, 1000];

const slotOneImg = document.querySelector('.slot1');
const slotTwoImg = document.querySelector('.slot2');
const slotThreeImg = document.querySelector('.slot3');
const playBtn = document.querySelector('#play-btn');
const autoPlayBtn = document.querySelector('#auto-play-btn');
const infoBtn = document.querySelector('#info-btn');
const fastSpinBtn = document.getElementById('fast_spin_animation_btn');
const betDecrementBtn = document.getElementById('decrease_bet_btn');
const betIncrementBtn = document.getElementById('increase_bet_btn');
const resetDemoBtn = document.getElementById('reset_demo');
const openBetMenu = document.querySelector('.bet-container'); //modal open toggler
const closeBetMenu = document.querySelector('#modal-exit-btn');//modal close toggler
const betMenuModal = document.querySelector('#bet_menu_modal'); //shown when click

let displayCredits = document.querySelector('#credits-indicator');
let displayWinnings = document.querySelector('#winnings-indicator');
let displayBets = document.querySelector('#bets-indicator');
let betValues = document.getElementsByClassName('betvalue');
let randomSlot1;
let randomSlot2;
let randomSlot3;
let betRangeIndex = 0;

//load player data when the page load
loadPlayerData();
updateCredits();
updateBets();
updateWinnings();

resetDemoBtn.addEventListener('click', () => {
  player.credits = 1000.00;
  player.bet = 0.00;
  player.winnings = 0.00;
  updateCredits();
  updateBets();
  updateWinnings();
  savePlayerData();
  swal({
    title: 'Game demo has been reset',
    text: `Your demo credits are now: ${player.credits.toFixed(2)}`,
    icon: 'success'
  })
})

openBetMenu.addEventListener('click', () => {
  betMenuModal.style.display = 'block';
  // console.log(betMenuModal.style.display);
});

//close bet menu modal by clicking outside the modal
window.addEventListener('click', function(event) {
  if (event.target == betMenuModal) {
    betMenuModal.style.display = 'none';
  }
});

//close bet menu modal by clicking exit button
closeBetMenu.addEventListener('click', () => {
  betMenuModal.style.display = 'none';
})

//render bet from bet menu modal
Array.from(betValues).forEach(betValue => {
  betValue.addEventListener('click', () => {
    player.bet = parseFloat(betValue.value);
    updateBets();
    savePlayerData();
    let handIndex = betPools.indexOf(player.bet);
    betRangeIndex = handIndex.toPrecision(1);
    console.log(betRangeIndex);
  });
});

//increment bets
betIncrementBtn.addEventListener('click', () => {
  betRangeIndex++;
  if (betRangeIndex > 9) {
    swal({
      title: `Max Value Limit Reached`,
      text: `Please place a bet not more than 1000.00.`,
      icon: `warning`
    });
    betRangeIndex = 9;
  }
  player.bet = betPools[betRangeIndex].toFixed(2);
  updateBets();
  savePlayerData();
});

//decrement bets
betDecrementBtn.addEventListener('click', () => {
  betRangeIndex--;
  if (betRangeIndex < 0) {
    betRangeIndex = 0;
    swal({
      title: `Minimum Bet Value Limit Reached`,
      text: `Please place a bet more than 10.00.`,
      icon: `warning`
    });
  }
  player.bet = betPools[betRangeIndex].toFixed(2);
  updateBets();
  savePlayerData();
});

//update credits
function updateCredits() {
  displayCredits.textContent = parseFloat(player.credits).toFixed(2);
}

//update bets
function updateBets() {
  let tempHand = player.bet;  
  if (typeof tempHand !== 'number') {
    tempHand = parseFloat(tempHand);
  }
  displayBets.textContent = tempHand.toFixed(2);
}


//update winnings
function updateWinnings() {
  displayWinnings.textContent = player.winnings.toFixed(2);
}

//update reels
function updateReels() {
  randomSlot1 = Math.floor(Math.random() * imgReels.length);
  randomSlot2 = Math.floor(Math.random() * imgReels.length);
  randomSlot3 = Math.floor(Math.random() * imgReels.length);
  
  slotOneImg.src = `assets/img/${imgReels[randomSlot1]}`;
  slotTwoImg.src = `assets/img/${imgReels[randomSlot2]}`;
  slotThreeImg.src = `assets/img/${imgReels[randomSlot3]}`;
}

//check if player won
function checkPlayerWin() {
  if (randomSlot1 === randomSlot2 && randomSlot1 === randomSlot3) {
    player.winnings += (player.bet * 3);
    player.credits += player.winnings;
    savePlayerData();
    return true;
  }
  return false;
}

//activate/deactivate fast spin animation
let dynamicInterval = 250;
let temp = 0;
fastSpinBtn.addEventListener('click', () => {
  temp++;
  if (temp % 2 == 0) {
    dynamicInterval = 250;
    fastSpinBtn.style.backgroundColor = '#fb9f05';
  } else {
    dynamicInterval = 10; 
    fastSpinBtn.style.backgroundColor = '#f87004';
  }
  // console.log(dynamicInterval);
  // console.log(temp);
})

//Spin slot machine [Manual]
let tempPlay = 1;
playBtn.addEventListener('click', () => {  
  if (tempPlay != 1) {
    swal({
      title: 'WARNING',
      text: `Please wait a moment to spin again or enable skip animation to prevent this from happening`,
      icon: 'warning'
    })
    return;
  }
  let isPlayerWin = false;
  betMenuModal.style.display = 'none';
  
  if (player.bet < 10) {
    swal({
      title: 'Insufficient Bet',
      text: `Please place a bet.`,
      icon: 'info'
    })
    return;
  }

  if (player.credits < 1 || player.credits < player.bet) {
    swal({
      title: 'Insufficient Credits',
      text: `Please place a bet not higher than on your based credits or reset the game demo to load demo credits.`,
      icon: 'info'
    })
    return;
  }
  else {
    player.credits -= player.bet;
    player.winnings -= player.winnings.toFixed(2);
    updateCredits();
    savePlayerData();
    let spinSlots = setInterval(() => {
      if (tempPlay <= 10) {
        tempPlay++;
        isPlayerWin = updateReels();
      } else {
        clearInterval(spinSlots);
        isPlayerWin = checkPlayerWin();
        updateBets();
        updateCredits();
        updateWinnings();
        tempPlay = 1;
        if (isPlayerWin) {
          swal({
            title: `You've won: ${player.winnings}`,
            text: `Click ok or anywhere to continue`,
            icon: 'success'
          })
          // console.log(isPlayerWin);
        }
      }
    }, dynamicInterval);
  }
});
