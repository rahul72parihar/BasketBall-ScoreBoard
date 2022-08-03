// let homePoints = document.getElementById("home-score").textContent
// let awayPoints = document.getElementById("away-score").textContent
let homePoints = 12
let awayPoints = 5
document.getElementById("home-score").textContent = homePoints
document.getElementById("away-score").textContent = awayPoints
let homeEl = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")

function addHome1(){
    homePoints+=1
    homeEl.textContent = homePoints
}
function addHome2(){
    homePoints+=2
    homeEl.textContent = homePoints
}
function addHome3(){
    homePoints+=3
    homeEl.textContent = homePoints
}
function addaway1(){
    awayPoints+=1
    awayEl.textContent = awayPoints
}
function addaway2(){
    awayPoints+=2
    awayEl.textContent = awayPoints
}
function addaway3(){
    awayPoints+=3
    awayEl.textContent = awayPoints
}
function reset(){
    homePoints=0
    awayPoints=0
    homeEl.textContent = homePoints
    awayEl.textContent = awayPoints
}