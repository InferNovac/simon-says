import GREEN from "./assets/firstButton.mp3";
import RED from "./assets/secondButton.mp3";
import YELLOW from "./assets/thirdButton.mp3";
import BLUE from "./assets/fourthButton.mp3";

export let GLOBAL_DATA = {
    points: 0,
    easyMode: false,
    player: [],
    simon: [],
};
export const EASY = document.getElementById("easy");
export const HARD = document.getElementById("hard");
export const SCORE = document.getElementById("score");
export const SOUNDS = [
    new Audio(GREEN),
    new Audio(RED),
    new Audio(YELLOW),
    new Audio(BLUE),
];
export const BUTTONS = document.getElementsByClassName("buttons");
export const START_SCREEN = document.getElementById("start-screen");
export const EASY_MODE = [document.getElementById("easy")];
export const HARD_MODE = [document.getElementById("hard")];
export const FLASH = "opacity(40%)";
export const FLASH_DELAY = 1300;
export const BUTTONS_SIZE = BUTTONS.length;
export const REAPPEAR_DELAY = FLASH_DELAY / 2;

export const addSimon = (says) =>
    (GLOBAL_DATA.simon = [...GLOBAL_DATA.simon, says]);

export const addPlayer = (guess) =>
    (GLOBAL_DATA.player = [...GLOBAL_DATA.player, guess]);

export const addPoint = () => ++GLOBAL_DATA.points;

export const clearPlayerGuesses = () => (GLOBAL_DATA.player = []);

export const clearSimonSays = () => (GLOBAL_DATA.simon = []);

export const clearPoints = () => (GLOBAL_DATA.points = 0);

export const setEasyMode = (mode) => (GLOBAL_DATA.easyMode = mode);

export const generateGuess = (range) => Math.floor(Math.random() * range);
