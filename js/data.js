
//const levels = [
//  {
//    levelType: `one-card`,
//    levelNumber: 1,
//    cards: [
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      }
//    ]
//  },
//  {
//    levelType: `two-cards`,
//    levelNumber: 2,
//    cards: [
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      },
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      }
//    ]
//  },
//  {
//    levelType: `three-cards`,
//    levelNumber: 3,
//    cards: [
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      },
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      },
//      {
//        cardContent: `http://placehold.it/468x458`,
//        answers: [
//          { title: `photo`, isCorrect: true},
//          { title: `paint`, isCorrect: false}
//        ]
//      }
//    ]
//  }
//];

const levels = [
  {
    levelType: `one-card`,
    levelNumber: `level-1`,
    levelOrder: 1,
    cards: [
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-2`
        }
      }
    ]
  },
  {
    levelType: `two-cards`,
    levelNumber: `level-2`,
    levelOrder: 2,
    cards: [
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-3`
        }
      },
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-3`
        }
      }
    ]
  },
  {
    levelType: `three-cards`,
    levelNumber: `level-3`,
    levelOrder: 3,
    cards: [
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-4`
        }
      },
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-4`
        }
      },
      {
        cardContent: `http://placehold.it/468x458`,
        answers: {
          'photo': null,
          'paint': `level-4`
        }
      }
    ]
  }
];

const initialState = {
  level: `level-1`,
  levelNumbers: 10,
  lives: 3,
  time: 30
};

export {initialState, levels};
