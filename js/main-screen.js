import {getElementsFromMarkup} from './utils.js';
import {showScreen} from './main.js';
import getGreetingScreenElement from './greeting-screen.js';
import getHeader from './header.js';
import getFooter from './footer.js';
//import getFooterScreenElement from './footer.js';

const template = `
  <main class="central">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </main>
`;
export default () => {
  const el = getElementsFromMarkup(template);

  el.querySelector(`.intro__asterisk`).addEventListener(`click`, function () {
    showScreen(getGreetingScreenElement());
  });

  return el;
};
