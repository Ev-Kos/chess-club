const fotoTemplate = document.querySelector('#fotoCard').content;
const fotoCards = document.querySelector('.cards');
const popups = document.querySelectorAll('.popup');
const fotoSlider = document.querySelector('#fotoSlider');

//функция открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

//функция закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
  
//закрытие попапов на esc
  
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}

//закрытие по клику на оверлэй и крестик

popups.forEach(function(popup) {
    popup.addEventListener('mousedown', function(evt) {
      if (evt.target.classList.contains('popup')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close-button')) {
       closePopup(popup);
     }
    })
  });

//slider

function sliderNext (cardImages, sliderImage) {
    let n;
    for(let i = 0; i < cardImages.length; i++) {
        if (cardImages[i].src === sliderImage.src) {
            i === cardImages.length - 1 ? n = 0 : n = i+1
            sliderImage.src = cardImages[n].src;
            break;
        }
   }
}

  
function createFotos(obj) {
    const card = fotoTemplate.querySelector('.card').cloneNode(true);
    const image = card.querySelector('.card__image');
    const name = card.querySelector('.card__name');
    const prof = card.querySelector('.card__prof');
    image.src = obj.src;
    image.alt = obj.alt;
    name.textContent = obj.name;
    prof.textContent = obj.prof;
    
    image.addEventListener('click', function() {
      openPopup(fotoSlider);
      fotoSlider.querySelector('.slider__item').src = obj.src;;
      fotoSlider.querySelector('.slider__item').alt = obj.alt;
    });

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
    const image = card.querySelector('.card__image');
    image.src = obj.src;
    image.alt = obj.alt;

    image.addEventListener('click', function() {
        openPopup(fotoSlider);
        fotoSlider.querySelector('.slider__item').src = obj.src;;
        fotoSlider.querySelector('.slider__item').alt = obj.alt;
      });

    return card;
}

initialBattleCard.forEach(function(obj) {
    const card = createBattles(obj);
    battleCards.append(card);
});



const buttonsForvard = fotoSlider.querySelector('.slider__button-next');
const cardsImages = fotoCards.querySelectorAll('.card__image')
const sliderImages = fotoSlider.querySelector('.slider__item')
const cardImages = battleCards.querySelectorAll('.card__image')

buttonsForvard.addEventListener('click',  () => sliderNext(cardsImages, sliderImages))
buttonsForvard.addEventListener('click',  () => sliderNext(cardImages, sliderImages))
