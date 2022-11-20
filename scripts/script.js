const fotoTemplate = document.querySelector('#fotoCard').content;
const fotoCards = document.querySelector('.cards');

function createFotos(obj) {
    const card = fotoTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = obj.src;
    card.querySelector('.card__image').alt = obj.alt;
    card.querySelector('.card__name').textContent = obj.name;
    card.querySelector('.card__prof').textContent = obj.prof;

    return card;
}

initialFotoCard.forEach(function(obj) {
    const card = createFotos(obj);
    fotoCards.append(card);
});

const battleTemplate = document.querySelector('#battleCard').content;
const battleCards = document.querySelector('#battleCards');

function createBattles(obj) {
    const card = battleTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = obj.src;
    card.querySelector('.card__image').alt = obj.alt;

    return card;
}

initialBattleCard.forEach(function(obj) {
    const card = createBattles(obj);
    battleCards.append(card);
});