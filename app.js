const quiz = [
  {
    question: 'スタレンスタジアム作ったの誰や？',
    answers: [ 'りゅうへい', 'りく', '来人', '新美'],
    correct: 'りく'
  }, {
    question: '来人のBANが解除されるのはいつ？',
    answers: [ '7/1', '7/22', '7/31', '8/1'],
    correct: '7/22'
  }, {
    question: '現在スタレン回数第5位のまあまあのユーザーは誰？（BOTを含む）',
    answers: [ 'りく', 'らいと', 'ひかる', 'みくと'],
    correct: 'みくと'
  }, {
    question: '暴言BOTは何回死んでる？（スタレンスタジアムによる死亡以外は除く）',
    answers: [ '3', '4', '5', '6'],
    correct: '6'
  }, {
    question: 'スタレンスタジアムで最もよく使われている言葉は？※267245回使われています',
    answers: [ 'あ', 'ﾌｧｧｧｧｧｧｧｧｧｧｧwwwwww', '人権', 'りゅうへい'],
    correct: 'あ'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解！\n当たり前だよなぁ？');
    score++;
  } else {
    $window.alert('は？こんな簡単な問題も間違えちゃうの？ｗ\n抜けたら？ｗ');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'ですオツカレサマデシタ';   
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}