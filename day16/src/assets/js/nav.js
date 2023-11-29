
let isOpen = false
function openHamburger() {
    let hamburgerNavContainer = document.getElementById("hamburger-nav-container")

    if(!isOpen){
        hamburgerNavContainer.style.display = "flex"
        isOpen = true
    } else {
        hamburgerNavContainer.style.display = "none"
        isOpen = false
    }
}