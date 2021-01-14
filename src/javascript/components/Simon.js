import {
    SCORE,
    BUTTONS,
    SIMON_SIZE,
    FLASH_DELAY,
    GLOBAL_DATA,
    BUTTONS_SIZE,
    START_SCREEN,
    addSimon,
    clearPoints,
    generateGuess,
    clearSimonSays,
    clearPlayerGuesses,
} from "./Constant";
import { flash, register, unRegister } from "./Buttons";
import { addSequence } from "./GuessLogic";

export const showcaseSequence = () => {
    const { easyMode, simon } = GLOBAL_DATA;
    let delay = FLASH_DELAY;
    const sequence = [];
    unRegister(BUTTONS, addSequence);
    if (easyMode) {
        simon.map((index) => {
            sequence.push(flash(index, delay));
            delay += FLASH_DELAY;
        });
    } else {
        const last = simon.length - 1;
        const guess = simon[last];
        sequence.push(flash(guess, delay));
    }
    Promise.all(sequence).then(() => {
        register(BUTTONS, addSequence);
    });
};

export const startGame = () => {
    addSimon(generateGuess(BUTTONS_SIZE));
    showcaseSequence();
};

export const gameOver = () => {
    unRegister(BUTTONS, addSequence);
    clearPlayerGuesses();
    clearSimonSays();
    SCORE.innerText = clearPoints();
    START_SCREEN.style.display = "flex";
};
