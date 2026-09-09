// ========================================
// Google Apps Script
// ========================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzEGq0wP9pkZNoVjzBfcOA_A1IStNjWbbxZtprB_dHDoZAMt177G00VB7CoAflV2Sgp/exec";


// ========================================
// 質問
// ========================================

const QUESTIONS = [

  {
    id: 1,
    title: "哲学・倫理学についての経験",
    text: "これまでに、哲学や倫理学について学んだことがありますか？",
    type: "single",
    choices: [
      "ある",
      "少しある",
      "ほとんどない",
      "まったくない",
      "その他"
    ]
  },

  {
    id: 2,
    title: "哲学・倫理学についての経験",
    text: "どのような形で哲学・倫理学について学びましたか？",
    type: "textarea",
    conditional: true
  },

  {
    id: 3,
    title: "哲学・倫理学への関心",
    text: "あなたは、哲学や倫理学にどの程度興味がありますか？",
    type: "single",
    choices: [
      "とても興味がある",
      "ある程度興味がある",
      "どちらともいえない",
      "あまり興味がない",
      "まったく興味がない"
    ]
  },

  {
    id: 4,
    title: "倫理学のイメージ",
    text: "あなたは「倫理学」と聞いて、どのようなことを思い浮かべますか？",
    type: "textarea"
  },

  {
    id: 5,
    title: "哲学のイメージ",
    text: "あなたは「哲学」と聞いて、どのようなことを思い浮かべますか？",
    type: "textarea"
  },

  {
    id: 6,
    title: "哲学・倫理学について知っていること",
    text: "あなたが知っている哲学・倫理学についての考え方、人物、用語などがあれば、自由に書いてください。",
    description: "「特にない」と答えても構いません。",
    type: "textarea"
  },

  {
    id: 7,
    title: "善悪の存在",
    text: "「善いこと」や「悪いこと」は、実際に存在すると思いますか？",
    type: "scale"
  },

  {
    id: 8,
    title: "善の普遍性",
    text: "どの時代・どの社会・どの文化においても、誰にとっても「善い」といえることは存在すると思いますか？",
    type: "scale"
  },

  {
    id: 9,
    title: "悪の普遍性",
    text: "どの時代・どの社会・どの文化においても、誰にとっても「悪い」といえることは存在すると思いますか？",
    type: "scale"
  },

  {
    id: 10,
    title: "絶対的な悪",
    text: "どのような事情があったとしても、「絶対にしてはいけない」といえる行為は存在すると思いますか？",
    type: "scale"
  },

  {
    id: 11,
    title: "「正しさ」は人それぞれ？",
    text: "「何が正しいか」は、人によって異なると思いますか？",
    type: "scale"
  },

  {
    id: 12,
    title: "文化と善悪",
    text: "ある行為が「善い」か「悪い」かは、その社会の文化や価値観によって変わると思いますか？",
    type: "scale"
  },

  {
    id: 13,
    title: "多数派と正しさ",
    text: "多くの人が「正しい」と考えていることは、それだけで正しいと言えると思いますか？",
    type: "scale"
  },

  {
    id: 14,
    title: "真理",
    text: "「真理」は、人によって異なるものではなく、最終的には一つに定まるものだと思いますか？",
    type: "scale"
  },

  {
    id: 15,
    title: "具体的なケース①",
    text:
      "ある社会Aでは、奴隷制度が広く受け入れられています。\n\n" +
      "その社会では、奴隷制度は昔から続いており、多くの人が「当然の制度」だと考えています。\n\n" +
      "あなたは、この社会において奴隷制度を「正しい」と言えると思いますか？",
    type: "scale",
    choices: [
      "正しいと言える",
      "どちらかといえば正しいと言える",
      "どちらともいえない",
      "どちらかといえば正しいとは言えない",
      "正しいとは言えない"
    ]
  },

  {
    id: 16,
    title: "具体的なケース②",
    text:
      "Aさんは、「無差別に人を殺すことは、してはいけないことではない」と考えています。\n\n" +
      "そしてAさんは、「私は無差別殺人をしたい」という理由で、実際に無差別殺人をしようとしています。\n\n" +
      "Aさんの行為は、倫理的に許容されると思いますか？",
    type: "scale",
    choices: [
      "許容される",
      "どちらかといえば許容される",
      "どちらともいえない",
      "どちらかといえば許容されない",
      "許容されない"
    ]
  },

  {
    id: 17,
    title: "トロッコ問題①",
    text:
      "あなたは暴走しているトロッコの運転席にいます。\n\n" +
      "このまま何もしなければ、5人の作業員がトロッコにひかれて死亡します。\n\n" +
      "あなたの手元には、線路を切り替えるレバーがあります。\n\n" +
      "レバーを切り替えると、1人の作業員がいる別の線路にトロッコが進み、その作業員が死亡します。\n\n" +
      "あなた自身には危険はありません。",
    type: "trolley",
    choices: [
      "レバーを切り替える",
      "レバーを切り替えない"
    ]
  },

  {
    id: 18,
    title: "トロッコ問題①――理由",
    text: "なぜ、そのように判断しましたか？",
    type: "textarea"
  },

  {
    id: 19,
    title: "トロッコ問題②",
    text:
      "あなたは今度は、トロッコを橋の上から見ています。\n\n" +
      "トロッコの先には5人の作業員がいます。このままでは5人全員が死亡します。\n\n" +
      "あなたの隣には、一人の男性が立っています。\n\n" +
      "この男性を橋から突き落とすと、男性はトロッコにひかれて死亡しますが、トロッコが止まり、5人は助かります。\n\n" +
      "あなた自身には危険はありません。",
    type: "bridge",
    choices: [
      "男性を突き落とす",
      "男性を突き落とさない"
    ]
  },

  {
    id: 20,
    title: "トロッコ問題②――理由",
    text: "なぜ、そのように判断しましたか？",
    type: "textarea"
  },

  {
    id: 21,
    title: "具体的なケース③――薬",
    text:
      "ある男性の妻が重い病気にかかっています。\n\n" +
      "妻の命を救うためには、特定の薬が必要です。\n\n" +
      "しかし、その薬は非常に高価で、男性には購入することができません。\n\n" +
      "男性は薬屋に事情を説明し、薬を安くしてもらうことや、後払いにしてもらうことを頼みました。\n\n" +
      "しかし、薬屋はそれを断りました。\n\n" +
      "このままでは妻は亡くなってしまいます。\n\n" +
      "男性は、妻を助けるために薬を盗むことを考えています。\n\n" +
      "あなたは、この男性は薬を盗むべきだと思いますか？",
    type: "scale",
    choices: [
      "盗むべきだと思う",
      "どちらかといえば盗むべきだと思う",
      "どちらともいえない",
      "どちらかといえば盗むべきではない",
      "盗むべきではない"
    ]
  },

  {
    id: 22,
    title: "具体的なケース③――理由",
    text: "なぜ、そのように判断しましたか？",
    type: "textarea"
  },

  {
    id: 23,
    title: "倫理判断の基準",
    text:
      "あなたが「良い・悪い」を判断するとき、重視しているものはどれですか？\n" +
      "あてはまるものをすべて選んでください。",
    type: "multiple",
    choices: [
      "結果（多くの人にとって良い結果になるか）",
      "結果（自分の利益になるか）",
      "ルールや義務（守るべき原則に従っているか）",
      "理性・論理",
      "人の気持ちや人間関係（他者の気持ちを害さないか）",
      "自分自身の信念・価値観",
      "社会的な規範・慣習",
      "他者の意見",
      "自分が「普通はこうだ」と考える感覚",
      "身近な人の価値観",
      "直観",
      "法律に反しているかどうか",
      "その他"
    ]
  },

  {
    id: 24,
    title: "倫理判断の基準",
    text:
      "あなたが「良い・悪い」を判断するとき、特に1番重視しているものはどれですか？\n" +
      "1つ選んでください。",
    type: "priority"
  },

  {
    id: 25,
    title: "哲学・倫理学への関心",
    text:
      "ここまでの問いについて考えてみて、哲学や倫理学にどの程度興味を持ちましたか？",
    type: "single",
    choices: [
      "とても興味を持った",
      "少し興味を持った",
      "変わらない",
      "あまり興味を持てなかった",
      "まったく興味を持てなかった"
    ]
  },

  {
    id: 26,
    title: "このアンケートで一番答えにくかった問い",
    text: "このアンケートで、最も答えにくかった問いはどれでしたか？",
    type: "single",
    choices: [
      "善悪の存在",
      "善悪の普遍性",
      "「正しさ」は人それぞれか",
      "奴隷制度",
      "無差別殺人",
      "トロッコ問題①",
      "トロッコ問題②",
      "薬を盗む問題",
      "倫理判断の基準",
      "その他"
    ]
  }

];


// ========================================
// 状態
// ========================================

let currentIndex = 0;

const answers = {};

let studentNo = "";
let studentName = "";
let gender = "";


// ========================================
// DOM
// ========================================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const completeScreen = document.getElementById("completeScreen");

const questionArea = document.getElementById("questionArea");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");


// ========================================
// 開始
// ========================================

startButton.addEventListener("click", () => {

  studentNo =
    document.getElementById("studentNo").value.trim();

  studentName =
    document.getElementById("studentName").value.trim();

  gender =
    document.getElementById("gender").value;

  if (!gender) {
    alert("性別を選択してください。");
    return;
  }

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentIndex = 0;

  showQuestion();
});


// ========================================
// 質問表示
// ========================================

function showQuestion() {

  const question = QUESTIONS[currentIndex];

  progressText.textContent =
    `${currentIndex + 1} / ${QUESTIONS.length}`;

  progressFill.style.width =
    `${((currentIndex + 1) / QUESTIONS.length) * 100}%`;

  questionArea.innerHTML = "";

  const number = document.createElement("div");
  number.className = "question-number";
  number.textContent = `質問 ${question.id}`;

  const title = document.createElement("h2");
  title.className = "question-title";
  title.textContent = question.title;

  const text = document.createElement("div");
  text.className = "question-description";
  text.innerText = question.text;

  questionArea.appendChild(number);
  questionArea.appendChild(title);
  questionArea.appendChild(text);


  if (question.description) {

    const desc = document.createElement("p");

    desc.className = "note";

    desc.textContent =
      question.description;

    questionArea.appendChild(desc);
  }


  // 条件付き質問②

  if (question.conditional) {

    const experience = answers[1];

    if (
      experience !== "ある" &&
      experience !== "少しある" &&
      experience !== "その他"
    ) {

      currentIndex++;

      if (currentIndex < QUESTIONS.length) {
        showQuestion();
      }

      return;
    }
  }


  if (question.type === "single") {

    renderSingle(question);

  } else if (question.type === "scale") {

    renderScale(question);

  } else if (question.type === "textarea") {

    renderTextarea(question);

  } else if (question.type === "multiple") {

    renderMultiple(question);

  } else if (question.type === "priority") {

    renderPriority(question);

  } else if (question.type === "trolley") {

    renderTrolley(question);

  } else if (question.type === "bridge") {

    renderBridge(question);
  }


  backButton.style.visibility =
    currentIndex === 0 ? "hidden" : "visible";

  nextButton.textContent =
    currentIndex === QUESTIONS.length - 1
      ? "回答を送信する"
      : "次へ";
}


// ========================================
// 単一選択
// ========================================

function renderSingle(question) {

  const list = document.createElement("div");

  list.className = "choice-list";

  question.choices.forEach(choice => {

    const label = document.createElement("label");

    label.className = "choice";

    const input = document.createElement("input");

    input.type = "radio";
    input.name = `q${question.id}`;
    input.value = choice;

    if (answers[question.id] === choice) {
      input.checked = true;
      label.classList.add("selected");
    }

    input.addEventListener("change", () => {

      answers[question.id] = choice;

      document
        .querySelectorAll(".choice")
        .forEach(el => el.classList.remove("selected"));

      label.classList.add("selected");
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(choice));

    list.appendChild(label);
  });

  questionArea.appendChild(list);
}


// ========================================
// 5段階
// ========================================

function renderScale(question) {

  const choices = question.choices || [
    "強くそう思う",
    "ある程度そう思う",
    "どちらともいえない",
    "あまりそう思わない",
    "まったくそう思わない"
  ];

  renderChoiceArray(question, choices);
}


// ========================================
// 共通選択
// ========================================

function renderChoiceArray(question, choices) {

  const list = document.createElement("div");

  list.className = "choice-list";

  choices.forEach(choice => {

    const label = document.createElement("label");

    label.className = "choice";

    const input = document.createElement("input");

    input.type = "radio";
    input.name = `q${question.id}`;
    input.value = choice;

    if (answers[question.id] === choice) {

      input.checked = true;

      label.classList.add("selected");
    }

    input.addEventListener("change", () => {

      answers[question.id] = choice;

      list
        .querySelectorAll(".choice")
        .forEach(el => el.classList.remove("selected"));

      label.classList.add("selected");
    });

    label.appendChild(input);

    label.appendChild(
      document.createTextNode(choice)
    );

    list.appendChild(label);
  });

  questionArea.appendChild(list);
}


// ========================================
// 自由記述
// ========================================

function renderTextarea(question) {

  const textarea = document.createElement("textarea");

  textarea.placeholder =
    "自由に記入してください。";

  textarea.value =
    answers[question.id] || "";

  textarea.addEventListener("input", () => {

    answers[question.id] =
      textarea.value;
  });

  questionArea.appendChild(textarea);
}


// ========================================
// 複数選択
// ========================================

function renderMultiple(question) {

  const list = document.createElement("div");

  list.className = "choice-list";

  const selected =
    answers[question.id] || [];

  question.choices.forEach(choice => {

    const label = document.createElement("label");

    label.className =
      "choice checkbox-choice";

    const input =
      document.createElement("input");

    input.type = "checkbox";

    input.value = choice;

    input.checked =
      selected.includes(choice);

    input.addEventListener("change", () => {

      const values =
        [...list.querySelectorAll("input:checked")]
          .map(input => input.value);

      answers[question.id] =
        values;
    });

    label.appendChild(input);

    label.appendChild(
      document.createTextNode(choice)
    );

    list.appendChild(label);
  });

  questionArea.appendChild(list);
}


// ========================================
// 最重要項目
// ========================================

function renderPriority(question) {

  const previous =
    answers[23] || [];

  if (previous.length === 0) {

    const message =
      document.createElement("p");

    message.className = "note";

    message.textContent =
      "前の質問で選択した項目がありません。";

    questionArea.appendChild(message);

    return;
  }

  renderChoiceArray(
    question,
    previous
  );
}


// ========================================
// トロッコ
// ========================================

function renderTrolley(question) {

  const scene =
    document.createElement("div");

  scene.className =
    "trolley-scene";

  scene.innerHTML = `
    <div class="track"></div>
    <div class="trolley">🚋</div>
    <div class="worker-group">
      👷 👷 👷 👷 👷
    </div>
  `;

  questionArea.appendChild(scene);

  renderChoiceArray(
    question,
    question.choices
  );
}


// ========================================
// 橋
// ========================================

function renderBridge(question) {

  const scene =
    document.createElement("div");

  scene.className =
    "bridge-scene";

  scene.innerHTML = `
    <div class="bridge"></div>
    <div class="person">🧍</div>
  `;

  questionArea.appendChild(scene);

  renderChoiceArray(
    question,
    question.choices
  );
}


// ========================================
// 次へ
// ========================================

nextButton.addEventListener("click", () => {

  const question =
    QUESTIONS[currentIndex];

  if (
    question.type !== "multiple" &&
    !answers[question.id]
  ) {

    alert("回答を選択してください。");

    return;
  }

  if (
    question.type === "multiple" &&
    (!answers[question.id] ||
     answers[question.id].length === 0)
  ) {

    alert("少なくとも1つ選択してください。");

    return;
  }


  if (
    currentIndex <
    QUESTIONS.length - 1
  ) {

    currentIndex++;

    showQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } else {

    submitAnswers();
  }

});


// ========================================
// 戻る
// ========================================

backButton.addEventListener("click", () => {

  if (currentIndex > 0) {

    currentIndex--;

    showQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

});


// ========================================
// Google Sheetsへ送信
// ========================================

function submitAnswers() {

  nextButton.disabled = true;

  nextButton.textContent =
    "送信中…";


  const record = {

    timestamp:
      new Date().toLocaleString("ja-JP"),

    studentNo:
      studentNo,

    name:
      studentName,

    gender:
      gender,

    answers:
      answers
  };


  fetch(
    GOOGLE_SCRIPT_URL,
    {
      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body:
        JSON.stringify(record)
    }
  )
  .then(() => {

    quizScreen.classList.add("hidden");

    completeScreen.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  })
  .catch(error => {

    console.error(error);

    alert(
      "送信中にエラーが発生しました。もう一度お試しください。"
    );

    nextButton.disabled = false;

    nextButton.textContent =
      "回答を送信する";
  });

}
