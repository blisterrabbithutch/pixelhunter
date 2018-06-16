import {getElementFromTemplate, getLevelProgressBar, enterNextLevel} from './utils.js';
import getHeader from './header.js';
import getFooterMarkup from './footer.js';
import {userState} from './utils.js';
import {AnswerTime} from './enums.js';

const handleResultOfLevel = (data, firstCardInputsValue) => {
  let answerIsSolved;
  if (firstCardInputsValue === data.cards[0].rightAnswer) {
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
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${currentLevelData.cards[0].cardContent}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        ${getLevelProgressBar(userState.answers)}
      </ul>
    </div>
  </div>
  ${getFooterMarkup()}
  </main>`;

const getOneCardGameScreen = (data, state) => {
  const el = getElementFromTemplate(template(data));
  el.insertAdjacentElement(`afterbegin`, getHeader(state));
  const formEl = el.querySelector(`.game__content`);
  const firstCardRadioInputs = formEl.elements.question1;
  const cardEl = el.querySelector(`.game__option`);
  cardEl.addEventListener(`change`, function () {
    handleResultOfLevel(data, firstCardRadioInputs.value);
    enterNextLevel(data);
  });
  return el;
};
export {getOneCardGameScreen};
