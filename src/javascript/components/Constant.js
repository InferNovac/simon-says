export let GLOBAL_DATA = {
    player: [],
    simon: [],
    buttons: document.getElementsByClassName("buttons"),
};

export const GET_BUTTONS = () => GLOBAL_DATA.buttons;

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

export const CLEAR_PLAYER_GUESSES = () => (GLOBAL_DATA.player = []);

export const SAME_LENGTH = (computer, player) =>
    player.length === computer.length;

export const GENERATE_GUESS = (range) => Math.floor(Math.random() * range);

export const FLASH_DELAY = 1000;
export const REAPPEAR_DELAY = 500;
export const BUTTONS_SIZE = 4;
export const FLASH_COLOR = "#ecf0f1";
