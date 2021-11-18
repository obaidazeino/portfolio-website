const sideNav = document.getElementsByClassName("side-nav")
const ham = document.getElementById("hamburger")
const arrow = document.getElementById("arrow")

console.log(sideNav)
console.log(ham)
console.log(arrow)

function openNav() {
  ham.style.transform = "rotate(90deg)"
  sideNav[0].style.width = "250px"
}

function closeNav() {
  ham.style.transform = "rotate(-180deg)"
  sideNav[0].style.width = "0"

}

ham.addEventListener("click", openNav)
arrow.addEventListener("click", closeNav)


// country cards

const syria = document.getElementById("syria")
const armenia = document.getElementById("armenia")
const us = document.getElementById("us")
const canada = document.getElementById("canada")
const mars = document.getElementById("mars")

const locs = [syria, armenia, us, canada, mars]

console.log(canada+ armenia)

const cards = document.getElementsByClassName("card")

function displayCard(card){

}

for (let i=0; i<locs.length; i++) {
  locs[i].addEventListener("mouseenter", () => cards[i].style.opacity = "1")
  locs[i].addEventListener("mouseleave", () => cards[i].style.opacity = "0")
  locs[i].addEventListener("click", () => cards[i].style.opacity = "1")
}


// parallax

const bannerText = document.getElementById("banner-text")
const placesText = document.getElementById("places-text")

window.addEventListener("scroll", function(e){

  let rate = window.pageYOffset *2
  let rate2 = -400 + window.pageYOffset *.5
  console.log(window.pageYOffset)
  bannerText.style.transform = `translateY(-${rate}px)`
  placesText.style.transform = `translateX(${rate2}px)`

})
