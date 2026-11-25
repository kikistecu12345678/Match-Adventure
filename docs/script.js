/* Script menunggu HTML selesai dimuat agar tombol dapat menerima klik. */
(function () {
function boot() {
/* =====================================
   PETUALANGAN BUAH
   10 LEVEL + PETUNJUK 3X
   KESEMPATAN MENJAWAB MAKSIMAL 3X
   ANIMASI BONUS BINTANG
===================================== */

const ASSET = "assets/";

/* =====================================
   TERJEMAHAN
===================================== */

const I18N = {
    id: {
        settings: "Pengaturan",
        sound: "Suara",
        soundDesc: "Atur suara permainan",
        reader: "Pembaca Soal",
        readerDesc: "Bacakan soal secara otomatis",
        readerOn: "Pembaca soal aktif",
        readerOff: "Pembaca soal mati",
        hint: "Bantuan",
        language: "Bahasa",
        languageDesc: "Pilih bahasa permainan",
        welcome: "Ayo belajar berhitung sambil bermain!",
        intro: "Bantu teman kecil kita menyelesaikan tantangan buah.",
        start: "Mulai",
        map: "Peta Level",
        forest: "Hutan Buah",
        orangeGarden: "Kebun Jeruk",
        bananaIsland: "Pulau Pisang",
        grapeGarden: "Kebun Anggur",
        fruitFestival: "Pesta Buah",
        level: "Level",
        level1: "Level 1 • Menghitung",
        level2: "Level 2 • Penjumlahan",
        level3: "Level 3 • Pengurangan",
        level4: "Level 4 • Perkalian",
        level5: "Level 5 • Tantangan Campuran",
        level6Name: "Hutan Apel",
        level7Name: "Lembah Jeruk",
        level8Name: "Pulau Anggur",
        level9Name: "Kebun Stroberi",
        level10Name: "Kerajaan Buah",
        level6: "Level 6 • Perkalian Lanjutan",
        level7: "Level 7 • Penjumlahan dan Pengurangan",
        level8: "Level 8 • Perkalian",
        level9: "Level 9 • Tantangan Campuran",
        level10: "Level 10 • Tantangan Final",
        level11Name: "Lembah Semangka",
        level11Desc: "Level 11 • Pembagian Lanjutan",
        level12Name: "Kebun Nanas",
        level12Desc: "Level 12 • Operasi Campuran",
        level13Name: "Hutan Melon",
        level13Desc: "Level 13 • Perkalian dan Pembagian",
        level14Name: "Pulau Buah Naga",
        level14Desc: "Level 14 • Operasi Bilangan Besar",
        level15Name: "Gunung Durian",
        level15Desc: "Level 15 • Tantangan Sulit",
        level16Name: "Hutan Alpukat",
        level16Desc: "Level 16 • Operasi dengan Kurung",
        level17Name: "Istana Buah",
        level17Desc: "Level 17 • Hitungan Bertingkat",
        level18Name: "Gunung Apel Emas",
        level18Desc: "Level 18 • Tantangan Ahli",
        level19Name: "Negeri Jeruk",
        level19Desc: "Level 19 • Tantangan Master",
        level20Name: "Raja Buah",
        level20Desc: "Level 20 • Tantangan Final",   
        countBasket: "Hitung jumlah buah!",
        count: "Hitung jumlah buah",
        add: "Hitung penjumlahan buah",
        subtract: "Hitung pengurangan buah",
        multiply: "Hitung perkalian buah",
        choose: "Pilih jawaban yang benar!",
        score: "Bintang",
        next: "Lanjut",
        hint: "Bantu",
        hintMessage: "Perhatikan jawaban yang menyala!",
        noHints: "Petunjuk sudah habis!",
        great: "Hebat!",
        completed: "Kamu berhasil menyelesaikan level ini!",
        continue: "Lanjut",
        correct: "Hebat! Jawaban benar!",
        wrong: "Belum tepat. Coba lagi, ya!",
        finished: "Level selesai! Kamu hebat!",
        startHint: "Pilih jawaban terlebih dahulu.",
        locked: "Selesaikan level sebelumnya dahulu!",
        final: "Selamat! Kamu telah menyelesaikan semua level!",
        soundOn: "Suara aktif",
        soundOff: "Suara mati",
        attemptsLeft: "Kesempatan tersisa: ",
        gameOver: "Kesempatan habis! Mengulang level ini..."
    },

    en: {
        settings: "Settings",
        sound: "Sound",
        soundDesc: "Adjust game sound",
        reader: "Question Reader",
        readerDesc: "Read questions automatically",
        readerOn: "Question reader on",
        readerOff: "Question reader off",
        hint: "Hint",
        language: "Language",
        languageDesc: "Choose game language",
        welcome: "Learn to count while having fun!",
        intro: "Help our little friend complete the fruit challenges.",
        start: "Start",
        map: "Level Map",
        forest: "Fruit Forest",
        orangeGarden: "Orange Garden",
        bananaIsland: "Banana Island",
        grapeGarden: "Grape Island",
        fruitFestival: "Fruit Festival",
        level: "Level",
        level1: "Level 1 • Counting",
        level2: "Level 2 • Addition",
        level3: "Level 3 • Subtraction",
        level4: "Level 4 • Multiplication",
        level5: "Level 5 • Mixed Challenge",
        level6Name: "Apple Forest",
        level7Name: "Orange Valley",
        level8Name: "Grape Island",
        level9Name: "Strawberry Garden",
        level10Name: "Fruit Kingdom",
        level6: "Level 6 • Advanced Multiplication",
        level7: "Level 7 • Addition and Subtraction",
        level8: "Level 8 • Multiplication",
        level9: "Level 9 • Mixed Challenge",
        level10: "Level 10 • Final Challenge",
        level11Name: "Watermelon Valley",
        level11Desc: "Level 11 • Advanced Division",
        level12Name: "Pineapple Garden",
        level12Desc: "Level 12 • Mixed Operations",
        level13Name: "Melon Forest",
        level13Desc: "Level 13 • Multiplication and Division",
        level14Name: "Dragon Fruit Island",
        level14Desc: "Level 14 • Large Number Operations",
        level15Name: "Durian Mountain",
        level15Desc: "Level 15 • Difficult Challenge",
        level16Name: "Avocado Forest",
        level16Desc: "Level 16 • Operations with Parentheses",
        level17Name: "Fruit Palace",
        level17Desc: "Level 17 • Multi-Step Calculations",
        level18Name: "Golden Apple Mountain",
        level18Desc: "Level 18 • Expert Challenge",
        level19Name: "Orange Kingdom",
        level19Desc: "Level 19 • Master Challenge",
        level20Name: "King of Fruits",
        level20Desc: "Level 20 • Final Challenge",
        countBasket: "Count the fruits!",
        count: "Count the fruits",
        add: "Add the fruits",
        subtract: "Subtract the fruits",
        multiply: "Multiply the fruits",
        choose: "Choose the correct answer!",
        score: "Stars",
        next: "Next",
        hint: "Hint",
        hintMessage: "Look at the highlighted answer!",
        noHints: "No hints left!",
        great: "Great job!",
        completed: "You successfully completed this level!",
        continue: "Continue",
        correct: "Great! That's correct!",
        wrong: "Not quite. Try again!",
        finished: "Level completed! Well done!",
        startHint: "Please choose an answer first.",
        locked: "Complete the previous level first!",
        final: "Congratulations! You completed all levels!",
        soundOn: "Sound on",
        soundOff: "Sound off",
        attemptsLeft: "Attempts remaining: ",
        gameOver: "No attempts left! Restarting this level..."
    }
};

/* =====================================
   DATA BUAH
===================================== */

const FRUITS = {
    apple: "09_buah_apel.png",
    banana: "10_buah_pisang.png",
    grapes: "11_buah_anggur.png",
    watermelon: "12_buah_semangka.png",
    orange: "13_buah_jeruk.png",
    strawberry: "14_buah_stroberi.png"
};

/* =====================================
   DATA 10 LEVEL
   SETIAP LEVEL 3 SOAL
===================================== */

const LEVELS = [

    [
        { kind: "count", fruit: "apple", count: 3, options: [1, 2, 3, 4, 5] },
        { kind: "count", fruit: "strawberry", count: 5, options: [3, 4, 5, 6, 7] },
        { kind: "count", fruit: "grapes", count: 4, options: [2, 3, 4, 5, 6] }
    ],

    [
        { kind: "add", fruit: "banana", a: 3, b: 2, options: [3, 4, 5, 6, 7] },
        { kind: "add", fruit: "orange", a: 2, b: 2, options: [2, 3, 4, 5, 6] },
        { kind: "add", fruit: "apple", a: 1, b: 3, options: [2, 3, 4, 5, 6] }
    ],

    [
        { kind: "subtract", fruit: "orange", a: 6, b: 2, options: [2, 3, 4, 5, 6] },
        { kind: "subtract", fruit: "apple", a: 5, b: 2, options: [1, 2, 3, 4, 5] },
        { kind: "subtract", fruit: "banana", a: 5, b: 3, options: [1, 2, 3, 4, 5] }
    ],

    [
        { kind: "multiply", fruit: "watermelon", a: 2, b: 3, options: [2, 4, 6, 8, 10] },
        { kind: "multiply", fruit: "grapes", a: 3, b: 3, options: [5, 7, 9, 11, 12] },
        { kind: "multiply", fruit: "strawberry", a: 4, b: 2, options: [4, 6, 8, 10, 12] }
    ],

    [
        { kind: "add", fruit: "watermelon", a: 5, b: 4, options: [5, 7, 9, 10, 11] },
        { kind: "subtract", fruit: "orange", a: 9, b: 4, options: [3, 4, 5, 6, 7] },
        { kind: "count", fruit: "banana", count: 7, options: [5, 6, 7, 8, 9] }
    ],

    [
        { kind: "multiply", fruit: "apple", a: 5, b: 2, options: [8, 9, 10, 12, 15] },
        { kind: "multiply", fruit: "banana", a: 4, b: 3, options: [8, 10, 12, 14, 16] },
        { kind: "multiply", fruit: "orange", a: 6, b: 2, options: [10, 11, 12, 13, 14] }
    ],

    [
        { kind: "add", fruit: "strawberry", a: 7, b: 5, options: [10, 11, 12, 13, 14] },
        { kind: "subtract", fruit: "banana", a: 12, b: 5, options: [5, 6, 7, 8, 9] },
        { kind: "add", fruit: "apple", a: 8, b: 6, options: [12, 13, 14, 15, 16] }
    ],

    [
        { kind: "multiply", fruit: "grapes", a: 5, b: 3, options: [12, 13, 15, 16, 18] },
        { kind: "multiply", fruit: "watermelon", a: 4, b: 4, options: [12, 14, 16, 18, 20] },
        { kind: "multiply", fruit: "orange", a: 6, b: 3, options: [15, 16, 18, 20, 21] }
    ],

    [
        { kind: "add", fruit: "banana", a: 9, b: 8, options: [15, 16, 17, 18, 19] },
        { kind: "subtract", fruit: "orange", a: 15, b: 7, options: [6, 7, 8, 9, 10] },
        { kind: "multiply", fruit: "apple", a: 5, b: 4, options: [15, 18, 20, 22, 25] }
    ],

    [
        { kind: "multiply", fruit: "strawberry", a: 7, b: 3, options: [18, 19, 20, 21, 22] },
        { kind: "add", fruit: "watermelon", a: 15, b: 9, options: [22, 23, 24, 25, 26] },
        { kind: "subtract", fruit: "grapes", a: 20, b: 8, options: [10, 11, 12, 13, 14] }
    ],


    // LEVEL 11 - HUTAN MELON
    [
        { kind: "add", fruit: "watermelon", a: 4, b: 3, options: [5, 6, 7, 8, 9] },
        { kind: "subtract", fruit: "apple", a: 9, b: 4, options: [3, 4, 5, 6, 7] },
        { kind: "multiply", fruit: "banana", a: 2, b: 4, options: [6, 7, 8, 9, 10] }
    ],

    // LEVEL 12 - LEMBAH SEMANGKA
    [
        { kind: "add", fruit: "banana", a: 6, b: 5, options: [9, 10, 11, 12, 13] },
        { kind: "subtract", fruit: "orange", a: 12, b: 5, options: [5, 6, 7, 8, 9] },
        { kind: "multiply", fruit: "grapes", a: 3, b: 4, options: [9, 10, 12, 14, 15] }
    ],

    // LEVEL 13 - PULAU BUAH NAGA
    [
        { kind: "add", fruit: "strawberry", a: 8, b: 6, options: [12, 13, 14, 15, 16] },
        { kind: "subtract", fruit: "apple", a: 15, b: 7, options: [6, 7, 8, 9, 10] },
        { kind: "multiply", fruit: "banana", a: 4, b: 3, options: [10, 11, 12, 13, 14] }
    ],

    // LEVEL 14 - KEBUN ANGGUR
    [
        { kind: "add", fruit: "grapes", a: 9, b: 7, options: [14, 15, 16, 17, 18] },
        { kind: "subtract", fruit: "orange", a: 17, b: 8, options: [7, 8, 9, 10, 11] },
        { kind: "multiply", fruit: "watermelon", a: 3, b: 5, options: [12, 13, 15, 16, 18] }
    ],

    // LEVEL 15 - GUNUNG DURIAN
    [
        { kind: "add", fruit: "apple", a: 10, b: 8, options: [16, 17, 18, 19, 20] },
        { kind: "subtract", fruit: "banana", a: 20, b: 9, options: [9, 10, 11, 12, 13] },
        { kind: "multiply", fruit: "orange", a: 4, b: 4, options: [12, 14, 16, 18, 20] }
    ],

    // LEVEL 16 - HUTAN ALPUKAT
    [
        { kind: "add", fruit: "strawberry", a: 12, b: 9, options: [19, 20, 21, 22, 23] },
        { kind: "subtract", fruit: "grapes", a: 22, b: 10, options: [10, 11, 12, 13, 14] },
        { kind: "multiply", fruit: "apple", a: 5, b: 4, options: [16, 18, 20, 22, 24] }
    ],

    // LEVEL 17 - ISTANA BUAH
    [
        { kind: "add", fruit: "banana", a: 13, b: 9, options: [20, 21, 22, 23, 24] },
        { kind: "subtract", fruit: "orange", a: 25, b: 11, options: [12, 13, 14, 15, 16] },
        { kind: "multiply", fruit: "watermelon", a: 6, b: 3, options: [15, 16, 18, 20, 21] }
    ],

    // LEVEL 18 - GUNUNG APEL EMAS
    [
        { kind: "add", fruit: "grapes", a: 15, b: 9, options: [22, 23, 24, 25, 26] },
        { kind: "subtract", fruit: "strawberry", a: 28, b: 12, options: [14, 15, 16, 17, 18] },
        { kind: "multiply", fruit: "apple", a: 6, b: 4, options: [20, 22, 24, 26, 28] }
    ],

    // LEVEL 19 - NEGERI JERUK
    [
        { kind: "add", fruit: "orange", a: 17, b: 10, options: [25, 26, 27, 28, 29] },
        { kind: "subtract", fruit: "banana", a: 30, b: 13, options: [15, 16, 17, 18, 19] },
        { kind: "multiply", fruit: "grapes", a: 7, b: 4, options: [24, 25, 26, 27, 28] }
    ],

    // LEVEL 20 - RAJA BUAH
    [
        { kind: "add", fruit: "watermelon", a: 18, b: 12, options: [28, 29, 30, 31, 32] },
        { kind: "subtract", fruit: "apple", a: 35, b: 14, options: [19, 20, 21, 22, 23] },
        { kind: "multiply", fruit: "strawberry", a: 8, b: 4, options: [28, 30, 32, 34, 36] }
    ]
];

/* =====================================
   VARIABEL GAME
===================================== */

let language = "id";
let soundOn = true;
let readerOn = true;
let speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

let audioCtx = null;
let musicTimer = null;
let musicStep = 0;

let levelIndex = 0;
let questionIndex = 0;

let score = 0;
let levelStars = 0;
let levelScoreEarned = 0;

let answered = false;

let answerAttempts = 0;
const MAX_ATTEMPTS = 3;

let hintsLeft = 3;

/* =====================================
   PENYIMPANAN PROGRES
===================================== */

function loadProgress() {

    try {

        const saved = JSON.parse(
            localStorage.getItem("petualanganBuahProgress")
        );

        if (
            saved &&
            Array.isArray(saved.completed) &&
            Array.isArray(saved.stars)
        ) {

            return {

                completed: Array.from(
                    { length: LEVELS.length },
                    (_, i) => Boolean(saved.completed[i])
                ),

                stars: Array.from(
                    { length: LEVELS.length },
                    (_, i) => Math.min(
                        3,
                        Math.max(0, Number(saved.stars[i]) || 0)
                    )
                )

            };

        }

    } catch (error) {

        console.warn("Data progres tidak dapat dibaca.");

    }

    return {
        completed: Array(LEVELS.length).fill(false),
        stars: Array(LEVELS.length).fill(0)
    };

}

let progress = loadProgress();

function saveProgress() {

    try {

        localStorage.setItem(
            "petualanganBuahProgress",
            JSON.stringify(progress)
        );

    } catch (error) {

        console.warn("Progres tidak dapat disimpan.");

    }

}

/* =====================================
   SHORTCUT ELEMENT
===================================== */

const $ = id => document.getElementById(id);

function on(id, eventName, handler) {
    const element = $(id);
    if (element) element.addEventListener(eventName, handler);
}

function t(key) {

    return I18N[language][key] || key;

}



/* =====================================
   ANIMASI BINTANG BERTAMBAH
   DIBUAT OTOMATIS MELALUI JAVASCRIPT
===================================== */

const starStyle = document.createElement("style");

starStyle.textContent = `
.star-popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: linear-gradient(180deg, #fff3a0, #ffc044, #f49a22);
    color: #854000;
    padding: 15px 28px;
    border: 4px solid #fff2bd;
    border-radius: 22px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 6px 0 #b86a18, 0 10px 20px rgba(0,0,0,0.25);
    z-index: 99999;
    pointer-events: none;
    opacity: 0;
}

.star-popup.show {
    animation: starAnimation 1.5s ease forwards;
}

@keyframes starAnimation {
    0% {
        opacity: 0;
        transform: translate(-50%, -20%) scale(0.3);
    }
    25% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.25);
    }
    45% {
        transform: translate(-50%, -50%) scale(1);
    }
    75% {
        opacity: 1;
        transform: translate(-50%, -80%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -120%) scale(0.8);
    }
}
`;

document.head.appendChild(starStyle);

const starPopup = document.createElement("div");

starPopup.className = "star-popup";

document.body.appendChild(starPopup);

function showStarPopup(amount) {

    starPopup.textContent =
        language === "id"
            ? "⭐ +" + amount + " BINTANG!"
            : "⭐ +" + amount + " STARS!";

    starPopup.classList.remove("show");

    void starPopup.offsetWidth;

    starPopup.classList.add("show");

}

/* =====================================
   SISTEM PENGATURAN
===================================== */

const settingsToggle = $("settingsToggle");
const settingsPanel = $("settingsPanel");
const closeSettings = $("closeSettings");

if (settingsToggle && settingsPanel) {
    settingsToggle.addEventListener("click", () => {
        settingsPanel.classList.toggle("show");
        playClick();
    });
}

if (closeSettings && settingsPanel) {
    closeSettings.addEventListener("click", () => {
        settingsPanel.classList.remove("show");
        playClick();
    });
}

if (settingsPanel && settingsToggle) {
    document.addEventListener("click", event => {
        if (!settingsPanel.contains(event.target) &&
            !settingsToggle.contains(event.target)) {
            settingsPanel.classList.remove("show");
        }
    });
}

/* =====================================
   GANTI BAHASA
===================================== */

function applyLanguage() {

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (I18N[language][key]) {

            element.textContent = t(key);

        }

    });

    $("languageBtn").textContent =
        language === "id" ? "🇬🇧 English" : "🇮🇩 Bahasa";

    if ($("gamePage").classList.contains("active")) {
        renderQuestion();
    }

    if ($("successPage").classList.contains("active")) {
        updateSuccessMessage();
    }

    $("soundBtn").title = soundOn ? t("soundOn") : t("soundOff");
    updateReaderButton();

}

on("languageBtn", "click", () => {

    language = language === "id" ? "en" : "id";

    applyLanguage();
    playClick();

});

/* =====================================
   GANTI SUARA
===================================== */

function updateSoundButton() {

    $("soundBtn").textContent = soundOn ? "ON" : "OFF";

    $("soundBtn").style.background = soundOn
        ? "linear-gradient(#9af34e, #43b91c)"
        : "linear-gradient(#ffaaaa, #e85b5b)";

    $("soundBtn").title = soundOn ? t("soundOn") : t("soundOff");

}

on("soundBtn", "click", async () => {

    soundOn = !soundOn;

    updateSoundButton();

    if (soundOn) {

        await startMusic();
        playClick();

    } else {

        stopMusic();

    }

});

/* =====================================
   PEMBACA SOAL OTOMATIS
===================================== */

function stopQuestionReader() {
    if (speechSupported) {
        window.speechSynthesis.cancel();
    }
}

function getQuestionSpeech(q) {
    const isEnglish = language === "en";

    // Pembaca hanya menyebut instruksi soal.
    // Angka dan jumlah buah pada gambar tidak ikut dibacakan.
    const prompts = {
        count: isEnglish
            ? "Count the fruits. Choose the correct answer."
            : "Hitung jumlah buah. Pilih jawaban yang benar.",
        add: isEnglish
            ? "Add the fruits. Choose the correct answer."
            : "Hitung penjumlahan buah. Pilih jawaban yang benar.",
        subtract: isEnglish
            ? "Subtract the fruits. Choose the correct answer."
            : "Hitung pengurangan buah. Pilih jawaban yang benar.",
        multiply: isEnglish
            ? "Multiply the fruits. Choose the correct answer."
            : "Hitung perkalian buah. Pilih jawaban yang benar."
    };

    return prompts[q.kind] || (isEnglish
        ? "Choose the correct answer."
        : "Pilih jawaban yang benar.");
}

function speakCurrentQuestion(q) {
    stopQuestionReader();

    if (!readerOn || !speechSupported) return;

    const utterance = new SpeechSynthesisUtterance(getQuestionSpeech(q));
    utterance.lang = language === "id" ? "id-ID" : "en-US";
    utterance.rate = 0.88;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const languagePrefix = language === "id" ? "id" : "en";
    const matchingVoice = voices.find(voice =>
        voice.lang && voice.lang.toLowerCase().startsWith(languagePrefix)
    );

    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }

    window.speechSynthesis.speak(utterance);
}

function updateReaderButton() {
    const button = $("readerBtn");
    if (!button) return;

    button.textContent = readerOn ? "ON" : "OFF";
    button.title = readerOn ? t("readerOn") : t("readerOff");
    button.style.background = readerOn
        ? "linear-gradient(#9af34e, #43b91c)"
        : "linear-gradient(#ffaaaa, #e85b5b)";
    button.style.borderColor = readerOn ? "#328c20" : "#b83d3d";
}

on("readerBtn", "click", () => {
    readerOn = !readerOn;
    updateReaderButton();

    if (readerOn && $("gamePage").classList.contains("active")) {
        speakCurrentQuestion(LEVELS[levelIndex][questionIndex]);
    } else {
        stopQuestionReader();
    }

    playClick();
});

/* =====================================
   PINDAH HALAMAN
===================================== */

function showPage(id) {

    if (id !== "gamePage") {
        stopQuestionReader();
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    $(id).classList.add("active");

    if (id === "mapPage") {
        updateMap();
    }

}

/* =====================================
   SISTEM LEVEL
===================================== */

function isUnlocked(index) {

    // Level yang sudah selesai tidak boleh dimainkan kembali.
    if (progress.completed[index] === true) return false;

    // Level pertama terbuka selama belum pernah diselesaikan.
    if (index === 0) return true;

    // Level berikutnya terbuka setelah level sebelumnya selesai.
    return progress.completed[index - 1] === true;

}

function updateMap() {

    for (let i = 0; i < LEVELS.length; i++) {

        const starElement = $("mapStars" + i);

        if (starElement) {

            const stars = progress.stars[i] || 0;

            starElement.textContent =
                "★".repeat(stars) +
                "☆".repeat(3 - stars);

        }

        const button = document.querySelector(
            '.level-play[data-level="' + i + '"]'
        );

        if (!button) continue;

        const unlocked = isUnlocked(i);

        button.disabled = !unlocked;
        button.textContent = unlocked ? "▶" : "🔒";

    }

}

/* =====================================
   MUSIK LATAR
===================================== */

const melody = [
    523.25, 659.25, 783.99, 659.25,
    587.33, 698.46, 880, 698.46,
    523.25, 659.25, 783.99, 1046.5,
    783.99, 659.25, 587.33, 523.25
];

function playNote(frequency, duration = 0.22) {

    if (!soundOn || !audioCtx) return;

    try {

        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);

        gain.gain.exponentialRampToValueAtTime(
            0.045,
            audioCtx.currentTime + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioCtx.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration + 0.02);

    } catch (error) {

        console.warn("Audio tidak tersedia.");

    }

}

async function startMusic() {

    if (!soundOn) return;

    try {

        audioCtx = audioCtx || new (
            window.AudioContext || window.webkitAudioContext
        )();

        if (audioCtx.state === "suspended") {
            await audioCtx.resume();
        }

        if (musicTimer) return;

        musicStep = 0;

        playNote(melody[musicStep]);

        musicTimer = setInterval(() => {

            musicStep++;

            if (musicStep >= melody.length) {
                musicStep = 0;
            }

            playNote(melody[musicStep]);

        }, 300);

    } catch (error) {

        console.warn("Musik tidak dapat dimainkan.");

    }

}

function stopMusic() {

    if (musicTimer) {

        clearInterval(musicTimer);
        musicTimer = null;

    }

}

/* =====================================
   EFEK SUARA
===================================== */

function playTone(frequency = 600, duration = 0.12, type = "sine") {

    if (!soundOn) return;

    try {

        audioCtx = audioCtx || new (
            window.AudioContext || window.webkitAudioContext
        )();

        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);

        gain.gain.exponentialRampToValueAtTime(
            0.12,
            audioCtx.currentTime + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioCtx.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration + 0.02);

    } catch (error) {}

}

function playCorrect() {

    playTone(660, 0.12);

    setTimeout(() => {
        playTone(880, 0.16);
    }, 130);

}

function playWrong() {

    playTone(220, 0.22, "triangle");

}

function playClick() {

    playTone(520, 0.07);

}

/* =====================================
   SISTEM PETUNJUK
===================================== */

function updateHintButton() {

    const button = $("hintBtn");
    const count = $("hintCount");
    const hintText = $("hintText");

    if (!button || !count) return;

    count.textContent = hintsLeft;

    if (hintText) {
        hintText.textContent = t("hint");
    }

    button.disabled = hintsLeft <= 0;

}

function getCorrectAnswer(q) {

    if (q.kind === "count") return q.count;
    if (q.kind === "add") return q.a + q.b;
    if (q.kind === "subtract") return q.a - q.b;
    if (q.kind === "multiply") return q.a * q.b;

}

function useHint() {

    if (answered) return;

    if (hintsLeft <= 0) {

        $("feedback").textContent = t("noHints");
        playWrong();

        return;

    }

    const q = LEVELS[levelIndex][questionIndex];

    const correctAnswer = getCorrectAnswer(q);

    $("answerList")
        .querySelectorAll(".answer-btn")
        .forEach(button => {
            button.classList.remove("hint");
        });

    const correctButton = Array.from(
        $("answerList").querySelectorAll(".answer-btn")
    ).find(button => {
        return Number(button.textContent) === correctAnswer;
    });

    if (correctButton) {
        correctButton.classList.add("hint");
    }

    hintsLeft--;

    updateHintButton();

    $("feedback").textContent = t("hintMessage");

    playTone(880, 0.18);

}

on("hintBtn", "click", () => {
    useHint();
});

/* =====================================
   MEMULAI LEVEL
===================================== */

function startLevel(index = 0) {

    if (index < 0 || index >= LEVELS.length) return;

    if (!isUnlocked(index)) {

        showPage("mapPage");
        playWrong();

        return;

    }

    levelIndex = index;
    questionIndex = 0;
    levelStars = 0;
    levelScoreEarned = 0;
    answerAttempts = 0;
    answered = false;
    hintsLeft = 3;

    updateHintButton();

    showPage("gamePage");

    renderQuestion();

    startMusic();

    playClick();

}

/* =====================================
   MEMBUAT GAMBAR BUAH
===================================== */

function fruitImg(name) {

    const img = document.createElement("img");

    img.src = ASSET + FRUITS[name];
    img.alt = name;
    img.draggable = false;

    img.onerror = function () {
        console.error("Gambar buah tidak ditemukan:", this.src);
    };

    return img;

}

/* =====================================
   MEMBUAT KELOMPOK BUAH
===================================== */

function addFruitGroup(container, fruit, amount) {

    const group = document.createElement("span");

    group.className = "fruit-group";

    for (let i = 0; i < amount; i++) {
        group.appendChild(fruitImg(fruit));
    }

    container.appendChild(group);

}

/* =====================================
   MEMBUAT OPERATOR
===================================== */

function addOperator(container, symbol) {

    const operator = document.createElement("span");

    operator.className = "equation-operator";
    operator.textContent = symbol;

    container.appendChild(operator);

}

/* =====================================
   MENAMPILKAN SOAL
===================================== */

function renderQuestion() {

    const q = LEVELS[levelIndex][questionIndex];

    $("levelNumber").textContent = levelIndex + 1;

    $("stars").textContent =
        "★".repeat(levelStars) +
        "☆".repeat(3 - levelStars);

    $("score").textContent = score;
    $("feedback").textContent = "";

    const angkaSaja = false;

    $("questionTitle").textContent = q.kind === "count" ? t("countBasket") : t(q.kind);

    $("questionText").textContent = t("choose");

    const visual = $("visualEquation");
    visual.innerHTML = "";

    if (angkaSaja) {

        addOperator(visual, q.a);
        addOperator(visual, "×");
        addOperator(visual, q.b);
        addOperator(visual, "= ?");

    } else if (q.kind === "count") {

        addFruitGroup(visual, q.fruit, q.count);
        addOperator(visual, "= ?");

    } else if (q.kind === "add") {

        addFruitGroup(visual, q.fruit, q.a);
        addOperator(visual, "+");
        addFruitGroup(visual, q.fruit, q.b);
        addOperator(visual, "= ?");

    } else if (q.kind === "subtract") {

        addFruitGroup(visual, q.fruit, q.a);
        addOperator(visual, "−");
        addFruitGroup(visual, q.fruit, q.b);
        addOperator(visual, "= ?");

    } else if (q.kind === "multiply") {

        addFruitGroup(visual, q.fruit, q.a);
        addOperator(visual, "×");
        addFruitGroup(visual, q.fruit, q.b);
        addOperator(visual, "= ?");

    }

    const answerList = $("answerList");
    answerList.innerHTML = "";

    const correctAnswer = getCorrectAnswer(q);

    const shuffledOptions = [...q.options];

    for (let i = shuffledOptions.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffledOptions[i], shuffledOptions[randomIndex]] =
            [shuffledOptions[randomIndex], shuffledOptions[i]];

    }

    shuffledOptions.forEach(number => {

        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = number;

        button.addEventListener("click", () => {
            checkAnswer(number, correctAnswer, button);
        });

        answerList.appendChild(button);

    });

    $("nextBtn").querySelector("span").textContent = t("next");

    updateHintButton();

    // Bacakan soal baru secara otomatis.
    speakCurrentQuestion(q);

}

/* =====================================
   MEMERIKSA JAWABAN
   MAKSIMAL 3 KALI KLIK PER SOAL
===================================== */

function checkAnswer(value, correct, selectedButton) {

    if (answered || selectedButton.disabled) return;

    answerAttempts++;

    if (value === correct) {

        answered = true;

        const bonusBintang = (levelIndex + 1) * 10;

        score += bonusBintang;

        levelScoreEarned += bonusBintang;

        $("score").textContent = score;

        // TAMPILKAN ANIMASI BINTANG
        showStarPopup(bonusBintang);

        levelStars++;

        $("stars").textContent =
            "★".repeat(levelStars) +
            "☆".repeat(3 - levelStars);

        $("feedback").textContent = t("correct");

        $("gameMascot").src =
            ASSET + "07_maskot_serigala_melompat.png";

        $("answerList").querySelectorAll("button").forEach(button => {

            button.disabled = true;

            button.classList.remove("hint");

            if (Number(button.textContent) === correct) {
                button.classList.add("correct");
            }

        });

        playCorrect();

    }

    else {

        selectedButton.classList.add("wrong");

        selectedButton.disabled = true;

        $("gameMascot").src =
            ASSET + "06_maskot_serigala_bingung.png";

        playWrong();

        const remaining = MAX_ATTEMPTS - answerAttempts;

        if (answerAttempts >= MAX_ATTEMPTS) {

            answered = true;

            $("answerList").querySelectorAll("button").forEach(button => {
                button.disabled = true;
            });

            $("feedback").textContent = t("gameOver");

            setTimeout(() => {
                restartCurrentLevel();
            }, 1500);

        }

        else {

            $("feedback").textContent =
                t("wrong") + " " +
                t("attemptsLeft") + remaining;

        }

    }

}

/* =====================================
   MENGULANG LEVEL AKTIF
===================================== */

function restartCurrentLevel() {

    score = Math.max(0, score - levelScoreEarned);

    questionIndex = 0;
    levelStars = 0;
    levelScoreEarned = 0;
    answerAttempts = 0;
    answered = false;
    hintsLeft = 3;

    $("score").textContent = score;
    $("stars").textContent = "☆☆☆";
    $("feedback").textContent = "";

    updateHintButton();

    renderQuestion();

    playClick();

}

/* =====================================
   SOAL BERIKUTNYA
===================================== */

function nextQuestion() {

    if (!answered) {

        $("feedback").textContent = t("startHint");
        playWrong();

        return;

    }

    if (questionIndex < LEVELS[levelIndex].length - 1) {

        questionIndex++;

        answered = false;
        answerAttempts = 0;

        renderQuestion();

        playClick();

    }

    else {

        finishLevel();

    }

}

/* =====================================
   MENYELESAIKAN LEVEL
===================================== */

function finishLevel() {

    progress.completed[levelIndex] = true;

    progress.stars[levelIndex] = Math.max(
        progress.stars[levelIndex],
        levelStars
    );

    saveProgress();

    $("reward").textContent = "⭐ " + levelStars + "/3";

    updateSuccessMessage();

    showPage("successPage");

    playCorrect();

}

/* =====================================
   PESAN SUKSES
===================================== */

function updateSuccessMessage() {

    const message = $("successMessage");

    if (levelIndex === LEVELS.length - 1) {
        message.textContent = t("final");
    }

    else {
        message.textContent = t("completed");
    }

}

/* =====================================
   TOMBOL LANJUT SETELAH SUKSES
===================================== */

function continueGame() {

    const nextLevel = levelIndex + 1;

    if (nextLevel < LEVELS.length) {
        startLevel(nextLevel);
    }

    else {
        showPage("mapPage");
    }

}

/* =====================================
   TOMBOL UTAMA
===================================== */

on("startBtn", "click", () => {
    startLevel(0);
});

on("mapBtn", "click", () => {

    showPage("mapPage");
    playClick();

});

on("successMapBtn", "click", () => {

    showPage("mapPage");
    playClick();

});

on("continueBtn", "click", () => {
    continueGame();
});

on("nextBtn", "click", () => {
    nextQuestion();
});

on("gameBack", "click", () => {

    showPage("mapPage");
    playClick();

});

/* =====================================
   TOMBOL KEMBALI
===================================== */

document.querySelectorAll("[data-go]").forEach(button => {

    button.addEventListener("click", () => {

        showPage(button.dataset.go);

        playClick();

    });

});

/* =====================================
   TOMBOL LEVEL
===================================== */

document.querySelectorAll(".level-play").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.level);

        if (!isUnlocked(index)) {

            playWrong();

            return;

        }

        startLevel(index);

    });

});

/* =====================================
   AWAL GAME
===================================== */

applyLanguage();

updateMap();

updateSoundButton();

updateReaderButton();

updateHintButton();

/* =====================================
   RESTART PERMAINAN MANUAL
===================================== */

const restartLevelBtn = $("restartLevelBtn");

if (restartLevelBtn) {

    restartLevelBtn.addEventListener("click", () => {

        const confirmRestart = confirm(

            language === "id"

                ? "Apakah kamu yakin ingin mengulang permainan dari awal? Semua progres dan bintang akan direset."

                : "Are you sure you want to restart the game? All progress and stars will be reset."

        );

        if (!confirmRestart) return;

        progress = {

            completed: Array(LEVELS.length).fill(false),
            stars: Array(LEVELS.length).fill(0)

        };

        localStorage.removeItem("petualanganBuahProgress");

        saveProgress();

        levelIndex = 0;
        questionIndex = 0;
        score = 0;
        levelStars = 0;
        levelScoreEarned = 0;
        answerAttempts = 0;
        answered = false;
        hintsLeft = 3;

        $("score").textContent = "0";
        $("stars").textContent = "☆☆☆";
        $("levelNumber").textContent = "1";
        $("feedback").textContent = "";

        updateHintButton();
        updateMap();

        showPage("mapPage");

        playClick();

        alert(

            language === "id"

                ? "Permainan berhasil direset! Selamat bermain kembali."

                : "Game successfully restarted! Have fun playing again."

        );

    });

}


}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
} else {
    boot();
}
})();
