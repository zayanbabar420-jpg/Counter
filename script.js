let homeCounter = document.getElementById("home-counter");
let guestCounter = document.getElementById("guest-counter");
let countGuest = 0;
let countHome = 0;
function inc1() {
  countHome += 1;
  homeCounter.innerText = countHome;
}
function inc2() {
  countHome += 2;
  homeCounter.innerText = countHome;
}
function inc3() {
  countHome += 3;
  homeCounter.innerText = countHome;
}
function incg1() {
  countGuest += 1;
  guestCounter.innerText = countGuest;
}
function incg2() {
  countGuest += 2;
  guestCounter.innerText = countGuest;
}
function incg3() {
  countGuest += 3;
  guestCounter.innerText = countGuest;
}
function reset() {
  countGuest = 0;
  countHome = 0;
  guestCounter.innerText = countGuest
  homeCounter.innerText = countHome
}
