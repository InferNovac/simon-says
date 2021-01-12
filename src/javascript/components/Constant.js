import firstButton from "./assets/firstButton.mp3";
import secondButton from "./assets/secondButton.mp3";
import thirdButton from "./assets/thirdButton.mp3";
import fourthButton from "./assets/fourthButton.mp3";

export let GLOBAL_DATA = {
    points: 0,
    easyMode: false,
    player: [],
    simon: [],
    buttons: document.getElementsByClassName("buttons"),
    buttonSounds: [
        new Audio(firstButton),
        new Audio(secondButton),
        new Audio(thirdButton),
        new Audio(fourthButton),
    ],
    easy: document.getElementById("easy"),
    hard: document.getElementById("hard"),
    score: document.getElementById("score"),
};

export const GET_EASY_MODE = () => GLOBAL_DATA.easyMode;

export const GET_EASY_BUTTON = () => [GLOBAL_DATA.easy];

export const GET_HARD_BUTTON = () => [GLOBAL_DATA.hard];

export const GET_SOUNDS = () => [...GLOBAL_DATA.buttonSounds];

export const GET_BUTTONS = () => [...GLOBAL_DATA.buttons];

export const GET_SIMON_GUESSES = () => [...GLOBAL_DATA.simon];

export const GET_PLAYER_GUESSES = () => [...GLOBAL_DATA.player];

export const ADD_SIMON_GUESS = (guess) => {
    const { simon } = GLOBAL_DATA;
    GLOBAL_DATA.simon = [...simon, guess];
};

export const ADD_PLAYER_GUESS = (guess) => {
    const { player } = GLOBAL_DATA;
    GLOBAL_DATA.player = [...player, guess];
};

export const SET_EASY_MODE = (mode) => (GLOBAL_DATA.easyMode = mode);

export const CLEAR_PLAYER_GUESSES = () => (GLOBAL_DATA.player = []);

export const CLEAR_SIMON_SAYS = () => (GLOBAL_DATA.simon = []);

export const SAME_LENGTH = (computer, player) =>
    player.length === computer.length;

export const GENERATE_GUESS = (range) => Math.floor(Math.random() * range);

export const FLASH_DELAY = 1300;
export const REAPPEAR_DELAY = FLASH_DELAY / 2;
export const BUTTONS_SIZE = 4;
export const FLASH_COLOR = "#f1f2f6";
