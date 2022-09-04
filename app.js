    let homeDisplay = document.getElementById('homeScore')
    let homeScoreSide = document.getElementsByClassName('home-score')[0];
    let guestDisplay = document.getElementById('guestScore')
    let guestScoreSide = document.getElementsByClassName('guest-score')[0]
    let newGameBtn = document.getElementById('newgame-btn')
    let resetBtn = document.getElementById("reset-btn")
    let endGameBtn = document.getElementById("endgame-btn")
    let timeMinutes = document.getElementById("timeMinutes")
    let timeSeconds = document.getElementById("timeSeconds")
    let leadingTeam = document.getElementById("leading-team")
    let winner = document.getElementById('winner-text')
    let winnerContainer = document.getElementById('winner-cont')
    let mins = 5
    let secs = 1
    let homeScore = 0
    let guestScore = 0
    let text = document.getElementsByTagName('h3')[2]

      // INITIALIZE COUNTDOWN
let timerId 

// Score count
function scoreCount(id) {

    if ( id === homeIncOne ) {
        homeScore += 1
    } else if ( id === homeIncTwo ) {
        homeScore += 2
    } else if ( id === homeIncThree ) {
        homeScore += 3  
    } else if ( id === incOne ) {
        guestScore += 1
    } else if ( id === incTwo ) {
        guestScore += 2
    } else if ( id === incThree ) {
        guestScore += 3
    }
    
    homeScore >= 100  ? homeScore = 0 : "" 
    guestScore >= 100  ? guestScore = 0 : "" 
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
    
     if (homeScore > guestScore) {
         homeScoreSide.setAttribute('id', 'active')
         guestScoreSide.removeAttribute('id', 'active')
         leadingTeam.textContent = "Home Team winning!"
         leadingTeam.style.color = "#075985"
     } else {
         guestScoreSide.setAttribute('id', 'active')
         homeScoreSide.removeAttribute('id', 'active')
         leadingTeam.textContent = "Guest Team winning!"
         leadingTeam.style.color = "#FDE68A"
     }
}

// reset score
function resetScore() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
    homeScoreSide.removeAttribute('id', 'active')
    guestScoreSide.removeAttribute('id', 'active')
}

// new game
function newGame() {
    enableButton()
    resetScore()
    timerId = setInterval(timerCountdown, 1000)
    timerCountdown()
    newGameBtn.style.display = "none"
    resetBtn.style.display = "inline"
    endGameBtn.style.display = "inline"
}

// Enable & disable buttons
function enableButton() {
    homeIncOne.disabled = false
    homeIncTwo.disabled = false
    homeIncThree.disabled = false
    incOne.disabled = false
    incTwo.disabled = false
    incThree.disabled = false
    removeClass()
}

function disableButton() {
    homeIncOne.disabled = true
    homeIncTwo.disabled = true
    homeIncThree.disabled = true
    incOne.disabled = true
    incTwo.disabled = true
    incThree.disabled = true
    addClass()
}

// Add & remove class
function removeClass() {
    homeIncOne.classList.remove("disabled")
    homeIncTwo.classList.remove("disabled")
    homeIncThree.classList.remove("disabled")
    incOne.classList.remove("disabled")
    incTwo.classList.remove("disabled")
    incThree.classList.remove("disabled")
}

function addClass() { 
    homeIncOne.classList.add("disabled")
    homeIncOne.classList.add("disabled")
    homeIncTwo.classList.add("disabled")
    homeIncThree.classList.add("disabled")
    incOne.classList.add("disabled")
    incTwo.classList.add("disabled")
    incThree.classList.add("disabled")
}

//Reset game
function resetGame() {
    resetScore()
    clearInterval(timerId)
    mins = 5
    secs = 1
    timerId = setInterval(timerCountdown, 1000)
    timerCountdown()
}

// End game
function endGame() {
    winningTeam()
    resetGame()
    disableButton()
    mins = 5 
    secs = 1
    clearInterval(timerId)
    resetBtn.style.display = "none"
    endGameBtn.style.display = "none"
    newGameBtn.style.display = "block"
    
    resetScore()

}

// Timer 
function timerCountdown() {
    secs --
    let decZero = "0" + secs
    timeSeconds.textContent = secs
    timeMinutes.textContent = "0" + mins + ":"
   
    if(secs < 10) {
        timeSeconds.textContent = decZero
    }
    
    if (secs < 0) {
        mins --
        secs = 60
        secs --
        timeMinutes.textContent = "0" + mins + ":"
        timeSeconds.textContent = secs
   }
   
    if (mins === 0 && secs === 0) {
       clearInterval(timerId)
       resetBtn.style.display = "none"
       endGame()
   }
}

// display winning team
function winningTeam() {
        

    console.log(text)
    winnerContainer.style.display = "block"
    if (homeScore > guestScore) {
         winner.textContent = "Home team"
         winnerContainer.style.backgroundColor = "#0C4A6E" 
         
     } else if (homeScore === 0 && guestScore === 0) {

         text.textContent = "tie"
       winner.textContent = "Both teams"
       winnerContainer.style.backgroundColor = "#BE123C"  
           
     }
     else {
         winner.textContent = "Guest team"
         winnerContainer.style.backgroundColor = "#FCD34D"
     } 

}

// close winner display tab
function closeWinnerDIsplay() {
    winnerContainer.style.display = "none"
}
