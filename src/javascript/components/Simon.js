import {
    FLASH_DELAY,
    FLASH_COLOR,
    GET_BUTTONS,
    BUTTONS_SIZE,
    REAPPEAR_DELAY,
    GENERATE_GUESS,
    ADD_SIMON_GUESS,
    CLEAR_SIMON_SAYS,
    GET_SIMON_GUESSES,
    CLEAR_PLAYER_GUESSES,
    GET_EASY_BUTTON,
    GET_HARD_BUTTON,
    GET_EASY_MODE,
    GLOBAL_DATA,
} from "./Constant";
import { flash, register, unRegister } from "./Buttons";
import { addSequence } from "./GuessLogic";
import { loadGame } from "./Modal";

export const showcaseSequence = (simonGuesses, buttons) => {
    let delay = FLASH_DELAY;
    const sequence = [];
    unRegister(GET_BUTTONS(), addSequence);
    if (GET_EASY_MODE()) {
        simonGuesses.map((index) => {
            const button = buttons[index];
            sequence.push(flash(index, button, delay, "opacity(40%)"));
            delay += FLASH_DELAY;
        });
    } else {
        const guesses = GET_SIMON_GUESSES();
        const guess = guesses[guesses.length - 1];
        const buttons = GET_BUTTONS();
        sequence.push(flash(guess, buttons[guess], delay, "opacity(40%)"));
        delay += FLASH_DELAY;
    }
    Promise.all(sequence).then(() => {
        register(GET_BUTTONS(), addSequence);
    });
};

export const startGame = () => {
    GLOBAL_DATA.points = 0;
    GLOBAL_DATA.score.innerText = "0";
    ADD_SIMON_GUESS(GENERATE_GUESS(BUTTONS_SIZE));
    showcaseSequence(GET_SIMON_GUESSES(), GET_BUTTONS());
};

export const gameOver = () => {
    unRegister(GET_BUTTONS(), addSequence);
    CLEAR_PLAYER_GUESSES();
    CLEAR_SIMON_SAYS();
    const modal = document.getElementById("start-screen");
    modal.style.display = "flex";
};
