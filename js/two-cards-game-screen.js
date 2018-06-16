import {getElementFromTemplate, getLevelProgressBar, enterNextLevel} from './utils.js';
import getHeader from './header.js';
import getFooterMarkup from './footer.js';
import {userState} from './game-settings.js';
import {AnswerTime} from './enums.js';

const handleResultOfLevel = (data, firstCardInputsValue, secondCardInputsValue) => {
  let answerIsSolved;
  if (firstCardInputsValue === data.cards[0].rightAnswer && secondCardInputsValue === data.cards[1].rightAnswer) {
    answerIsSolved = true;
  } else {
    userState.lives = userState.lives - 1;
    answerIsSolved = false;
  }
  let answerOnCard = {
    time: AnswerTime.NORMAL,
    solved: answerIsSolved
  };
  userState.answers.push(answerOnCard);
  return answerOnCard;
};

const template = (currentLevelData) => `
  <main class="central">
    <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
    ${currentLevelData.cards.map((card, i) => {
    return `<div class="game__option">
      <img src="${card.cardContent}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="${`question` + (i + 1)}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="${`question` + (i + 1)}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`;
  }).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        ${getLevelProgressBar(userState.answers)}
      </ul>
    </div>
  </div>
  ${getFooterMarkup()}
  </main>
  `;

const getTwoCardsGameScreen = (data, state) => {
  const el = getElementFromTemplate(template(data));
  el.insertAdjacentElement(`afterbegin`, getHeader(state));
  const form = el.querySelector(`.game__content`);
  const firstCardRadioInputs = form.elements.question1;
  const secondCardRadioInputs = form.elements.question2;
  form.addEventListener(`change`, function () {
    if (firstCardRadioInputs.value && secondCardRadioInputs.value) {
      handleResultOfLevel(data, firstCardRadioInputs.value, secondCardRadioInputs.value);
      enterNextLevel(data);
    }
  });
  return el;
};

export {getTwoCardsGameScreen};
