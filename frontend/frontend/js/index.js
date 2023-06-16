document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * 0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

let gallery_button_right = document.getElementsByClassName("gallery_button_right")[0];
let gallery_button_left = document.getElementsByClassName("gallery_button_left")[0];
let gallery_cards = document.getElementsByClassName("gallery_cards")[0];
let card_images = [
    "images\\axalotl.jpg",
    "images\\bear.jpg",
    "images\\bee.jpg",
    "images\\cat.jpg",
    "images\\chicken.jpg",
    "images\\dolphin.jpg",
    "images\\parrot.png",
    "images\\sth.jpg",
    "images\\wolf.jpg"]
for (let i = 0; i < 3; i++) {
    add_card(card_images[i])
}
function add_card(image) {
    let new_card = document.createElement("img")
    new_card.src = image
    gallery_cards.append(new_card)
}
gallery_button_right.addEventListener("click", event => {

})
