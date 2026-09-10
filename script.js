const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxJCrbpjGUQIvkOSGzWfNrM0vB_HJA8WftpKRRwX_nL69G8S0L4909SoWjB9FGpVo0Ghw/exec";


const questions = [

  {
    id: "q1",
    type: "radio",
    title: "これまでに、哲学・倫理学について学んだことがありますか？",
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
    title: "どのような機会・場所で哲学・倫理学について学びましたか？",
    placeholder: "例：大学の授業、高校の授業、本を読んだ、独学など"
  },

  {
    id: "q3",
    type: "radio",
    title: "あなたは現在、哲学・倫理学にどの程度興味がありますか？",
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
    title: "あなたは「倫理学」と聞いて、どのようなものをイメージしますか？",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q5",
    type: "textarea",
    title: "あなたは「哲学」と聞いて、どのようなものをイメージしますか？",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q6",
    type: "textarea",
    title: "哲学・倫理学について、あなたが知っていることがあれば教えてください。",
    placeholder: "特になければ「特になし」と書いてください。"
  },

  {
    id: "q7",
    type: "radio",
    title: "「善いこと・悪いこと」は、実際に存在すると考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q8",
    type: "radio",
    title: "人や社会によらず、誰にとっても普遍的に「善い」と言えるものは存在すると考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q9",
    type: "radio",
    title: "人や社会によらず、誰にとっても普遍的に「悪い」と言えるものは存在すると考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q10",
    type: "radio",
    title: "どのような状況でも「間違っている」と言える行為は存在すると考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q11",
    type: "radio",
    title: "「正しいこと」は、人によって異なるものだと考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q12",
    type: "radio",
    title: "「善いこと・悪いこと」は、文化や社会の時代によって変わると考えますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q13",
    type: "radio",
    title: "多くの人が正しいと考えることは、それだけで正しいと言えると思いますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q14",
    type: "radio",
    title: "真理は、人によって異なるものではなく、最終的には一つに定まると思いますか？",
    options: [
      "強くそう思う",
      "ややそう思う",
      "どちらともいえない",
      "あまりそう思わない",
      "まったくそう思わない"
    ]
  },

  {
    id: "q15",
    type: "textarea",
    title: "ある社会Aでは奴隷制度が広く受け入れられており、ほとんどの人が奴隷制度を正しいと考えています。この社会において、奴隷制度を「正しい」と言えると思いますか？また、そう考える理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q16",
    type: "textarea",
    title: "ある人が、何の罪もない複数の人を無差別に殺害したいと考え、実際に殺害したとします。この行為は倫理的に許されると思いますか？また、そう考える理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q17",
    type: "radio",
    title: "トロッコ問題です。制御不能になったトロッコが5人に向かって走っています。あなたの前には線路を切り替えるレバーがあり、レバーを操作するとトロッコの進路が変わり、別の線路にいる1人が犠牲になります。あなたはレバーを操作しますか？",
    options: [
      "操作する",
      "操作しない"
    ]
  },

  {
    id: "q18",
    type: "textarea",
    title: "Q17でその回答を選んだ理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q19",
    type: "radio",
    title: "別のトロッコ問題です。5人に向かって走っているトロッコを止めるためには、橋の上にいる1人を線路へ突き落とす必要があります。その人を突き落とせば5人を救えます。あなたはその人を突き落としますか？",
    options: [
      "突き落とす",
      "突き落とさない"
    ]
  },

  {
    id: "q20",
    type: "textarea",
    title: "Q19でその回答を選んだ理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q21",
    type: "textarea",
    title: "ある人が、病気の家族を助けるために必要な薬を購入できず、薬局からその薬を盗みました。この行為は正しいと思いますか？また、そう考える理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q22",
    type: "textarea",
    title: "Q21でその回答を選んだ理由を教えてください。",
    placeholder: "自由に書いてください。"
  },

  {
    id: "q23",
    type: "checkbox",
    title: "あなたが「善い・悪い」「正しい・間違っている」と判断するとき、どのようなことを重視しますか？（複数選択可）",
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
    title: "Q23で選んだもののうち、あなたが最も重視するものを1つ選んでください。",
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
    title: "ここまでアンケートに回答してみて、現在のあなたは哲学・倫理学にどの程度興味がありますか？",
    options: [
      "とても興味がある",
      "ある程度興味がある",
      "どちらともいえない",
      "あまり興味がない",
      "まったく興味がない"
    ]
  },

  {
    id: "q26",
    type: "textarea",
    title: "このアンケートの中で、答えるのが最も難しいと感じた質問があれば教えてください。理由もあれば自由に書いてください。",
    placeholder: "自由に書いてください。"
  }

];


let currentQuestion = 0;
const answers = {};


const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const completeScreen = document.getElementById("completeScreen");

const startButton = document.getElementById("startButton");
const questionArea = document.getElementById("questionArea");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");


/* =========================
   アンケート開始
========================= */

startButton.addEventListener("click", () => {

  const studentNo =
    document.getElementById("studentNo").value.trim();

  const studentName =
    document.getElementById("studentName").value.trim();

  const gender =
    document.getElementById("gender").value;


  /* 氏名は必須 */

  if (studentName === "") {
    alert("氏名を入力してください。");
    document.getElementById("studentName").focus();
    return;
  }


  answers.studentNumber = studentNo;
  answers.name = studentName;
  answers.gender = gender;


  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");


  showQuestion();

});


/* =========================
   質問を表示
========================= */

function showQuestion() {

  const question = questions[currentQuestion];

  questionArea.innerHTML = "";


  const title = document.createElement("h2");

  title.textContent =
    `${currentQuestion + 1}. ${question.title}`;

  questionArea.appendChild(title);


  /* ラジオボタン */

  if (question.type === "radio") {

    question.options.forEach(option => {

      const label = document.createElement("label");

      label.className = "option";


      const input = document.createElement("input");

      input.type = "radio";
      input.name = question.id;
      input.value = option;


      if (answers[question.id] === option) {
        input.checked = true;
      }


      label.appendChild(input);

      label.appendChild(
        document.createTextNode(option)
      );


      questionArea.appendChild(label);

    });

  }


  /* チェックボックス */

  if (question.type === "checkbox") {

    const saved =
      answers[question.id] || [];


    question.options.forEach(option => {

      const label = document.createElement("label");

      label.className = "option";


      const input = document.createElement("input");

      input.type = "checkbox";
      input.name = question.id;
      input.value = option;


      if (saved.includes(option)) {
        input.checked = true;
      }


      label.appendChild(input);

      label.appendChild(
        document.createTextNode(option)
      );


      questionArea.appendChild(label);

    });


    /* その他 */

    const otherInput =
      document.createElement("input");

    otherInput.type = "text";
    otherInput.id = "other-q23";
    otherInput.placeholder = "その他の内容";


    if (answers["q23_other"]) {
      otherInput.value =
        answers["q23_other"];
    }


    questionArea.appendChild(otherInput);

  }


  /* テキストエリア */

  if (question.type === "textarea") {

    const textarea =
      document.createElement("textarea");

    textarea.id = question.id;

    textarea.rows = 6;

    textarea.placeholder =
      question.placeholder || "";


    if (answers[question.id]) {
      textarea.value =
        answers[question.id];
    }


    questionArea.appendChild(textarea);

  }


  updateProgress();


  /* 戻るボタン */

  if (currentQuestion === 0) {

    backButton.style.visibility = "hidden";

  } else {

    backButton.style.visibility = "visible";

  }


  /* 最後の質問 */

  if (currentQuestion === questions.length - 1) {

    nextButton.textContent =
      "回答を送信";

  } else {

    nextButton.textContent =
      "次へ";

  }

}


/* =========================
   回答を保存
========================= */

function saveCurrentAnswer() {

  const question =
    questions[currentQuestion];


  /* ラジオ */

  if (question.type === "radio") {

    const selected =
      document.querySelector(
        `input[name="${question.id}"]:checked`
      );


    if (!selected) {
      return false;
    }


    answers[question.id] =
      selected.value;

  }


  /* チェックボックス */

  if (question.type === "checkbox") {

    const selected =
      document.querySelectorAll(
        `input[name="${question.id}"]:checked`
      );


    if (selected.length === 0) {
      return false;
    }


    answers[question.id] =
      Array.from(selected).map(
        input => input.value
      );


    const otherInput =
      document.getElementById("other-q23");


    if (otherInput) {

      answers.q23_other =
        otherInput.value.trim();

    }

  }


  /* テキストエリア */

  if (question.type === "textarea") {

    const textarea =
      document.getElementById(question.id);


    if (!textarea) {
      return false;
    }


    answers[question.id] =
      textarea.value.trim();

  }


  return true;

}


/* =========================
   次へ
========================= */

nextButton.addEventListener("click", async () => {

  const saved =
    saveCurrentAnswer();


  if (!saved) {

    alert("回答を選択または入力してください。");

    return;

  }


  /* Q1の回答によってQ2をスキップ */

  if (
    currentQuestion === 0 &&
    (
      answers.q1 === "ほとんどない" ||
      answers.q1 === "まったくない"
    )
  ) {

    currentQuestion = 2;

  } else {

    currentQuestion++;

  }


  /* 最後まで来た場合 */

  if (currentQuestion >= questions.length) {

    await submitAnswers();

    return;

  }


  showQuestion();

});


/* =========================
   戻る
========================= */

backButton.addEventListener("click", () => {

  saveCurrentAnswer();


  if (currentQuestion === 2) {

    const q1 =
      answers.q1;


    if (
      q1 === "ほとんどない" ||
      q1 === "まったくない"
    ) {

      currentQuestion = 0;

    } else {

      currentQuestion = 1;

    }

  } else {

    currentQuestion--;

  }


  showQuestion();

});


/* =========================
   進捗表示
========================= */

function updateProgress() {

  const total =
    questions.length;


  const current =
    currentQuestion + 1;


  progressText.textContent =
    `${current} / ${total}`;


  const percentage =
    (current / total) * 100;


  progressFill.style.width =
    `${percentage}%`;

}


/* =========================
   Google Sheetsへ送信
========================= */

async function submitAnswers() {

  nextButton.disabled = true;
  backButton.disabled = true;


  nextButton.textContent =
    "送信中…";


  const data = {

    studentNumber:
      answers.studentNumber || "",

    name:
      answers.name || "",

    gender:
      answers.gender || ""

  };


  /* Q1〜Q26 */

  for (let i = 1; i <= 26; i++) {

    const key =
      `q${i}`;


    if (Array.isArray(answers[key])) {

      data[key] =
        answers[key].join("、");

    } else {

      data[key] =
        answers[key] || "";

    }

  }


  /* Q23「その他」の自由記述 */

  if (answers.q23_other) {

    data.q23 =
      `${data.q23}：${answers.q23_other}`;

  }


  try {

    await fetch(GAS_URL, {

      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body: JSON.stringify(data)

    });


    quizScreen.classList.add("hidden");

    completeScreen.classList.remove("hidden");

  } catch (error) {

    console.error(error);

    alert(
      "回答の送信に失敗しました。もう一度お試しください。"
    );


    nextButton.disabled = false;

    backButton.disabled = false;

    nextButton.textContent =
      "回答を送信";

  }

}
