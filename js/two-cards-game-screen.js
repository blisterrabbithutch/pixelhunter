import {getElementFromTemplate, getLevelProgressBar} from './utils.js';
import {showScreen} from './main.js';
import {getOneCardGameScreen} from './one-card-game-screen.js';
import {getThreeCardsGameScreen} from './three-cards-game-screen.js';
import getHeader from './header.js';
import getFooter from './footer.js';
import getStatsScreenElement from './stats-screen.js';
import {levels, answers, userState} from './data.js';

const addLevelResult = (data, firstCardInputsValue, secondCardInputsValue) => {
  let answerOnCard = {};
  if (firstCardInputsValue === data.cards[0].rightAnswer && secondCardInputsValue === data.cards[1].rightAnswer) {
    answerOnCard = {
      time: 15000,
      solved: true
    };
  } else {
    userState.lives = userState.lives - 1;
    answerOnCard = {
      time: 15000,
      solved: false
    };
  }
  return answerOnCard;
};

const checkSelectedAnswer = (data, firstCardInputsValue, secondCardInputsValue) => {
  const numberOfScreen = Array.prototype.indexOf.call(levels, data);
  const nextLevel = levels[numberOfScreen + 1];
  answers.push(addLevelResult(data, firstCardInputsValue, secondCardInputsValue));
  if (nextLevel && userState.lives > 0) {
    if (nextLevel.levelType === `one-card`) {
      showScreen(getOneCardGameScreen(nextLevel, userState));
    } else if (nextLevel.levelType === `three-cards`) {
      showScreen(getThreeCardsGameScreen(nextLevel, userState));
    }
  } else {
    showScreen(getStatsScreenElement(answers, userState));
  }
};

const template = (level) => `
  <main class="central">
    <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
    ${level.cards.map((card, i) => {
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
    </div>`;}).join(``)}
    </form>
    <div class="stats">
      <ul class="stats">
        ${getLevelProgressBar(answers)}
      </ul>
    </div>
  </div>
  ${getFooter()}
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
      checkSelectedAnswer(data, firstCardRadioInputs.value, secondCardRadioInputs.value);
    }
  });
  return el;
};

export {getTwoCardsGameScreen};
