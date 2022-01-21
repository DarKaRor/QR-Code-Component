let card = document.querySelector('.card');
let cardBack = document.querySelector('.card__back');
let coolDown = false;

function addClass(element, classes) {
    removeClass(element, classes);
    element.offsetWidth = element.offsetWidth;
    for(const c of classes) element.classList.add(c);
}

function removeClass(element,classes){
    for(const c of classes) element.classList.remove(c);
}


card.addEventListener('mouseenter', function () {
    if (coolDown) return;
    coolDown = true;
    addClass(card, ['spin']);
    addClass(cardBack, ['spin', 'appear']);
    setTimeout(function () {
        coolDown = false;
    }, 1000);
})