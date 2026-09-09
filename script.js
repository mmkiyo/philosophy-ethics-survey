// ===============================
// Apps Script のURL
// ===============================

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxJCrbpjGUQIvkOSGzWfNrM0vB_HJA8WftpKRRwX_nL69G8S0L4909SoWjB9FGpVo0Ghw/exec";


// ===============================
// 質問データ
// ===============================

const questions = [

  {
    id: "studentNumber",
    type: "text",
    title: "学生番号を入力してください",
    required: true
  },

  {
    id: "name",
    type: "text",
    title: "お名前を入力してください",
    required: true
  },

  {
    id: "gender",
    type: "radio",
    title: "性別を教えてください",
    required: false,
    options: [
      "男性",
      "女性",
      "その他",
      "回答しない"
    ]
  },

  {
    id: "q1",
    type: "radio",
    title: "これまでに哲学・倫理学を学んだ経験はありますか？",
    required: true,
    options: [
      "ある",
      "少しある",
      "ほとんどない",
      "まったくない",
      "その他"
    ]
  },

  {
    id: "q2",
    type: "textarea",
    title: "哲学・倫理学をどのように学びましたか？",
    description: "授業、読書、動画、独学など、具体的に教えてください。特にない場合は「特になし」と入力してください。",
    required: true
  },

  {
    id: "q3",
    type: "radio",
    title: "現在、哲学・倫理学にどの程度興味がありますか？",
    required: true,
    options: [
      "とても興味がある",
      "ある程度興味がある",
      "どちらともいえない",
      "あまり興味がない",
      "まったく興味がない"
    ]
  },

  {
    id: "q4",
    type: "textarea",
    title: "あなたにとって「倫理学」とは、どのようなものですか？",
    required: true
  },

  {
    id: "q5",
    type: "textarea",
    title: "あなたにとって「哲学」とは、どのようなものですか？",
    required: true
  },

  {
    id: "q6",
    type: "textarea",
    title: "哲学・倫理学について、知っていることがあれば教えてください。",
    description: "人物、考え方、著作など、何でも構いません。特にない場合は「特になし」と入力してください。",
    required: true
  },

  {
    id: "q7",
    type: "radio",
    title: "「善」や「悪」は、人間や社会とは無関係に、それ自体として存在すると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q8",
    type: "radio",
    title: "「善」は、文化や時代、人によって変わるものではなく、普遍的なものとして存在すると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q9",
    type: "radio",
    title: "「悪」は、文化や時代、人によって変わるものではなく、普遍的なものとして存在すると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q10",
    type: "radio",
    title: "どのような文化や社会であっても、絶対に「悪い」と言える行為は存在すると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q11",
    type: "radio",
    title: "「正しいこと」は、人によって異なるものだと思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q12",
    type: "radio",
    title: "ある行為が「善い」か「悪い」かは、文化や社会のあり方によって変わると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q13",
    type: "radio",
    title: "多くの人が正しいと考えることは、それだけで正しいと言えると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q14",
    type: "radio",
    title: "真理は、人によって異なるものではなく、最終的には一つに定まると思いますか？",
    required: true,
    options: [
      "強くそう思う",
      "ある程度そう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q15",
    type: "radio",
    title: "ある社会Aでは、奴隷制度が広く受け入れられており、多くの人が奴隷制度を正しいと考えています。この社会において、奴隷制度を「正しい」と言えると思いますか？",
    required: true,
    options: [
      "正しいと言える",
      "どちらかといえば正しいと言える",
      "どちらともいえない",
      "どちらかといえば正しいとは言えない",
      "正しいとは言えない"
    ]
  },

  {
    id: "q16",
    type: "radio",
    title: "ある人が、無関係な人々を無差別に殺害したいと考え、実際に殺害しました。この行為は倫理的に許されると思いますか？",
    required: true,
    options: [
      "許される",
      "どちらかといえば許される",
      "どちらともいえない",
      "どちらかといえば許されない",
      "許されない"
    ]
  },

  {
    id: "q17",
    type: "radio",
    title: "【トロッコ問題①】暴走するトロッコの先に5人の作業員がいます。あなたの前には線路を切り替えるレバーがあります。レバーを引けば、トロッコは別の線路に進み、そこにいる1人の作業員が死亡します。あなたはレバーを引きますか？",
    required: true,
    options: [
      "引く",
      "引かない"
    ]
  },

  {
    id: "q18",
    type: "textarea",
    title: "トロッコ問題①で、その選択をした理由を教えてください。",
    required: true
  },

  {
    id: "q19",
    type: "radio",
    title: "【トロッコ問題②】暴走するトロッコの先に5人の作業員がいます。あなたの隣には大きな人が立っています。その人を線路に突き落とせばトロッコは止まり、5人を救えます。あなたはその人を突き落としますか？",
    required: true,
    options: [
      "突き落とす",
      "突き落とさない"
    ]
  },

  {
    id: "q20",
    type: "textarea",
    title: "トロッコ問題②で、その選択をした理由を教えてください。",
    required: true
  },

  {
    id: "q21",
    type: "radio",
    title: "【薬の問題】ある病人が、非常に高価な薬を必要としています。しかし、その薬を買うお金がありません。薬局の人は薬の値段を下げようとしません。病人を助けるために、その人は薬を盗みました。この行為は倫理的に許されると思いますか？",
    required: true,
    options: [
      "許される",
      "どちらかといえば許される",
      "どちらともいえない",
      "どちらかといえば許されない",
      "許されない"
    ]
  },

  {
    id: "q22",
    type: "textarea",
    title: "薬の問題で、その選択をした理由を教えてください。",
    required: true
  },

  {
    id: "q23",
    type: "checkbox",
    title: "あなたが「良い・悪い」を判断するとき、重視しているものはどれですか？",
    description: "あてはまるものをすべて選んでください。",
    required: true,
    options: [
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
    id: "q24",
    type: "radio",
    title: "あなたが「良い・悪い」を判断するとき、特に1番重視しているものはどれですか？",
    required: true,
    options: [
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
    id: "q25",
    type: "radio",
    title: "このアンケートに答えた後、哲学・倫理学への興味は変わりましたか？",
    required: true,
    options: [
      "以前より興味が強くなった",
      "少し興味が強くなった",
      "変わらない",
      "少し興味が弱くなった",
      "以前より興味が弱くなった"
    ]
  },

  {
    id: "q26",
    type: "textarea",
    title: "今回の質問の中で、特に答えにくかった・考えるのが難しかったものがあれば教えてください。",
    description: "質問番号や内容を書いてください。特になければ「特になし」で構いません。",
    required: true
  }

];


// ===============================
// 状態
// ===============================

let currentQuestion = 0;
const answers = {};


// ===============================
// HTML要素
// ===============================

const questionArea = document.getElementById("question-area");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");


// ===============================
// 質問表示
// ===============================

function showQuestion() {

  const q = questions[currentQuestion];

  questionArea.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = q.title;
  questionArea.appendChild(title);

  if (q.description) {
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = q.description;
    questionArea.appendChild(description);
  }

  if (q.type === "text") {
    createTextInput(q);
  }

  if (q.type === "textarea") {
    createTextarea(q);
  }

  if (q.type === "radio") {
    createRadio(q);
  }

  if (q.type === "checkbox") {
    createCheckbox(q);
  }

  updateProgress();

  backButton.disabled = currentQuestion === 0;

  if (currentQuestion === questions.length - 1) {
    nextButton.textContent = "回答を送信";
  } else {
    nextButton.textContent = "次へ";
  }
}


// ===============================
// テキスト入力
// ===============================

function createTextInput(q) {

  const input = document.createElement("input");

  input.type = "text";
  input.id = "answer";
  input.value = answers[q.id] || "";

  questionArea.appendChild(input);
}


// ===============================
// 長文入力
// ===============================

function createTextarea(q) {

  const textarea = document.createElement("textarea");

  textarea.id = "answer";
  textarea.rows = 6;
  textarea.value = answers[q.id] || "";

  questionArea.appendChild(textarea);
}


// ===============================
// ラジオボタン
// ===============================

function createRadio(q) {

  q.options.forEach(option => {

    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");

    input.type = "radio";
    input.name = q.id;
    input.value = option;

    if (answers[q.id] === option) {
      input.checked = true;
    }

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));

    questionArea.appendChild(label);
  });
}


// ===============================
// チェックボックス
// ===============================

function createCheckbox(q) {

  const saved = answers[q.id] || [];

  q.options.forEach(option => {

    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");

    input.type = "checkbox";
    input.name = q.id;
    input.value = option;

    if (saved.includes(option)) {
      input.checked = true;
    }

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));

    questionArea.appendChild(label);
  });
}


// ===============================
// 現在の回答を保存
// ===============================

function saveCurrentAnswer() {

  const q = questions[currentQuestion];

  if (q.type === "text" || q.type === "textarea") {

    const input = document.getElementById("answer");

    if (!input) return false;

    const value = input.value.trim();

    if (q.required && value === "") {
      alert("回答を入力してください。");
      input.focus();
      return false;
    }

    answers[q.id] = value;

    return true;
  }


  if (q.type === "radio") {

    const selected = document.querySelector(
      `input[name="${q.id}"]:checked`
    );

    if (q.required && !selected) {
      alert("回答を選択してください。");
      return false;
    }

    answers[q.id] = selected ? selected.value : "";

    return true;
  }


  if (q.type === "checkbox") {

    const selected = Array.from(
      document.querySelectorAll(`input[name="${q.id}"]:checked`)
    ).map(input => input.value);

    if (q.required && selected.length === 0) {
      alert("少なくとも1つ選択してください。");
      return false;
    }

    answers[q.id] = selected;

    return true;
  }

  return true;
}


// ===============================
// 次へ
// ===============================

nextButton.addEventListener("click", async () => {

  if (!saveCurrentAnswer()) {
    return;
  }

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    showQuestion();

  } else {

    await submitAnswers();
  }
});


// ===============================
// 戻る
// ===============================

backButton.addEventListener("click", () => {

  saveCurrentAnswer();

  if (currentQuestion > 0) {

    currentQuestion--;

    showQuestion();
  }
});


// ===============================
// 進捗表示
// ===============================

function updateProgress() {

  const number = currentQuestion + 1;

  const percent =
    (number / questions.length) * 100;

  progressBar.style.width = percent + "%";

  progressText.textContent =
    `${number} / ${questions.length}`;
}


// ===============================
// Apps Scriptへ送信
// ===============================

async function submitAnswers() {

  nextButton.disabled = true;
  backButton.disabled = true;

  nextButton.textContent = "送信中…";

  try {

    const response = await fetch(GAS_URL, {

      method: "POST",

      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },

      body: JSON.stringify(answers)

    });

    const result = await response.json();

    if (result.status === "success") {

      questionArea.innerHTML = `
        <div class="complete">
          <h2>回答ありがとうございました。</h2>
          <p>
            アンケートへのご協力ありがとうございました。
          </p>
        </div>
      `;

      nextButton.style.display = "none";
      backButton.style.display = "none";

      progressText.textContent = "完了";
      progressBar.style.width = "100%";

    } else {

      throw new Error("送信に失敗しました。");
    }

  } catch (error) {

    console.error(error);

    alert(
      "回答の送信に失敗しました。\n" +
      "インターネット接続を確認して、もう一度お試しください。"
    );

    nextButton.disabled = false;
    backButton.disabled = false;

    nextButton.textContent = "回答を送信";
  }
}


// ===============================
// 最初の質問を表示
// ===============================

showQuestion();
