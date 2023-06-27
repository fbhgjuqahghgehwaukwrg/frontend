document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * 0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

class Image {
    constructor (url, caption, description, href) {
        this.url = url
        this.caption = caption
        this.description = description
        this.href = href
    }
}
let gallery_button_right = document.getElementsByClassName("gallery__button__right")[0];
let gallery_button_left = document.getElementsByClassName("gallery__button__left")[0];
let gallery_cards = document.getElementsByClassName("gallery__cards")[0];
console.log(gallery_cards)
let card_index = 0
let cards = []
let card_images = [
    new Image ("images\\axalotl.jpg", "Аксалотль", "Аксолотль (англ. Axolotl) — это дружелюбный моб, обитающий в воде", "test.html"),
    new Image ("images\\bear.jpg", "Медведь", "Белый медведь (англ. Polar Bear) — нейтральный моб, обитающий в холодных биомах.", ""),
    new Image ("images\\bee.jpg", "Пчела", "Пчела (англ. Bee) — летающий нейтральный моб, живущий в ульях и пчелиных гнёздах. Игрока, спровоцировавшего пчелу, атакует рой, который отравляет его.", ""),
    new Image ("images\\cat.jpg", "Оцелот", "Оцелот (англ. Ocelot) — это редкий пассивный моб, встречающийся в джунглях.", ""),
    new Image ("images\\chicken.jpg", "Курица", "Курица (англ. Chicken) — дружелюбный моб (птица), откладывающий яйца и не получающий урона от падения.", ""),
    new Image ("images\\dolphin.jpg", "Дельфин", "Дельфин (англ. Dolphin) — нейтральный моб, обитающий во всех видах океана, кроме замёрзшего.", ""),
    new Image ("images\\parrot.png", "Попугай", "Попугай (англ. Parrot) — это редкий дружелюбный приручаемый моб, обитающий в джунглях.", ""),
    new Image ("images\\sth.jpg", "Спрут", "Спрут, кальмар или осьминог (англ. Squid) — дружелюбный моб, обитающий в воде, на большой глубине, часто группами по несколько особей (2-5).", ""),
    new Image ("images\\wolf.jpg", "Волк", "Волк (англ. Wolf) — нейтральный моб-животное, который может быть приручён игроком.", "")
]
for (let i = 0; i < 3; i++) {
    add_card(card_images[i], "right");
}
function add_card(image, side) {
    let new_card = document.createElement("div");
    new_card.innerHTML = `
        <div class = "gallery__card__caption__background"></div>
        <img src="${image.url}" class="gallery__card__pic">
        <h1 class="gallery__card__caption">${image.caption}</h1>
        <h3 class="gallery__card__description">${image.description}</h3>
        <a href = "">
            <div class = "gallery__card__href"></div>
        </a>
    `
    new_card.classList.add("gallery__card")
    if (side == "left") {
        cards.unshift(new_card);
        gallery_cards.prepend(new_card);
    }
    else {
        cards.push(new_card);
        gallery_cards.append(new_card);
    }
}
gallery_button_right.addEventListener("click", event => {
    gallery_cards.removeChild(cards[0]);
    cards.shift()
    card_index++;
    if (card_index > card_images.length - 1) {
        card_index = 0
    }
    add_card(card_images[(card_index + 2) % card_images.length], "right")
})

gallery_button_left.addEventListener("click", event => {
    gallery_cards.removeChild(cards[2]);
    cards.pop()
    card_index--;
    if (card_index < 0) {
        card_index =  card_images.length - 1
    }
    add_card(card_images[card_index], "left")
})

let bubbles = document.getElementById("bubbles")
for (let i = 0; i < 150; i++) {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    Object.assign (
        bubble, {
            style: `
            --size: ${Math.random() * 4 + 2}rem;
            --left: ${Math.random() * 104-2}%;
            --time: ${Math.random() * 2 + 2}s;
            --delay: -${Math.random() * 2 + 2}s;
            `
        })
}
