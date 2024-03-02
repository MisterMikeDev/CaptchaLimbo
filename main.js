const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const $checkbox = $("div#checkbox");
const $svg = $("svg#svg");
const $span = $("span#spanError");
const $keysSection = $("section#keysSection");
const $wrapper = $("div#wrapper");
const $mainKeys = $("main.mainKeys");
const $keys = $$("img.key");

const mainWidth = $mainKeys.offsetWidth;
const mainHeight = $mainKeys.offsetHeight;
const keyWidth = $keys[0].offsetWidth;
const keyHeight = $keys[0].offsetHeight;

const AnimeDuration = 500;
const AnimeDelay = 650;

const audio = new Audio("/limbo.mp3");
audio.volume = 0.9;

function StartGame() {
    $svg.classList.remove("active");
    $checkbox.classList.add("loading");
    $wrapper.style.transform = "translateY(0)";
    $keysSection.style.opacity = "1";

    $keys[1].classList.add("glowing");
    setTimeout(() => $keys[1].classList.remove("glowing"), 1000);

    audio.play();
}

function EndGame() {
    $keys[6].classList.add("glowing");
    setTimeout(() => $keys[6].classList.remove("glowing"), 1500);
    $keys[6].addEventListener("click", () => {
        alert("ITS BLUE, ITS BLUE!!!!!!!");
        window.location.reload();
    });

    $keys.forEach((key, i) => {
        key.style.cursor = "pointer";
        if (i !== 6) {
            key.addEventListener("click", () => {
                alert("Fallaste el captcha, intentalo de nuevo.");
                window.location.reload();
            });
        }
    });
}

function KeyStep1() {
    $keys.forEach((key, i) => {
        key.style.animation = `moveKeys${i + 1}step1 ${AnimeDuration}ms ease-in-out`;
    });
}

function KeyStep2() {
    $keys.forEach((key, i) => {
        key.style.animation = `moveKeys${i + 1}step2 ${AnimeDuration}ms ease-in-out`;
    });
}

function KeyStep3() {
    $keys.forEach((key, i) => {
        key.style.animation = `moveKeys${i + 1}step3 ${AnimeDuration}ms ease-in-out`;
    });
}

function KeyStep4() {
    $keys.forEach((key, i) => {
        key.style.animation = `moveKeys${i + 1}step4 ${AnimeDuration}ms ease-in-out`;
    });
}

function KeyStep5() {
    $keys.forEach((key, i) => {
        key.style.animation = `moveKeys${i + 1}step5 ${AnimeDuration}ms ease-in-out`;
    });
}

$checkbox.addEventListener("click", () => {
    $svg.classList.add("active");
    $span.classList.add("active");

    setTimeout(StartGame, 1500);

    setTimeout(KeyStep1, 1500 + 2600);

    setTimeout(KeyStep2, 1500 + 2600 + AnimeDelay);

    setTimeout(KeyStep3, 1500 + 2600 + AnimeDelay * 2);

    setTimeout(KeyStep4, 1500 + 2600 + AnimeDelay * 3);

    setTimeout(KeyStep1, 1500 + 2600 + AnimeDelay * 4);

    setTimeout(KeyStep2, 1500 + 2600 + AnimeDelay * 5);

    setTimeout(KeyStep3, 1500 + 2600 + AnimeDelay * 6);

    setTimeout(KeyStep4, 1500 + 2600 + AnimeDelay * 7);

    setTimeout(KeyStep1, 1500 + 2600 + AnimeDelay * 8);

    setTimeout(KeyStep2, 1500 + 2600 + AnimeDelay * 9);

    setTimeout(KeyStep3, 1500 + 2600 + AnimeDelay * 10);

    setTimeout(KeyStep4, 1500 + 2600 + AnimeDelay * 11);

    setTimeout(KeyStep1, 1500 + 2600 + AnimeDelay * 12);

    setTimeout(KeyStep5, 1500 + 2600 + AnimeDelay * 13);

    setTimeout(EndGame, 1500 + 2600 + AnimeDelay * 14 + AnimeDuration);
});
