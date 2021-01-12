import {
    SAME_LENGTH,
    GET_BUTTONS,
    BUTTONS_SIZE,
    GENERATE_GUESS,
    ADD_SIMON_GUESS,
    ADD_PLAYER_GUESS,
    GET_SIMON_GUESSES,
    GET_PLAYER_GUESSES,
    CLEAR_PLAYER_GUESSES,
    GLOBAL_DATA,
    FLASH_DELAY,
    SPEED_UP,
} from "./Constant";
import { gameOver, showcaseSequence } from "./Simon";
import { flash } from "./Buttons";

const guess = (color) => {
    switch (color) {
        case "green":
            return 0;
        case "red":
            return 1;
        case "yellow":
            return 2;
        case "blue":
            return 3;
        default:
            console.error("This color does not exist");
    }
};

const nextRound = (simon, player) => {
    if (SAME_LENGTH(simon, player) && checkPlayerSequence(simon, player)) {
        GLOBAL_DATA.score.innerText = ++GLOBAL_DATA.points;
        ADD_SIMON_GUESS(GENERATE_GUESS(BUTTONS_SIZE));
        showcaseSequence(GET_SIMON_GUESSES(), GET_BUTTONS());
        CLEAR_PLAYER_GUESSES();
    } else if (!checkPlayerSequence(simon, player)) {
        gameOver();
    }
};

const checkPlayerSequence = (simon, player) => {
    for (let index = 0; index < player.length; index++) {
        if (player[index] !== simon[index]) {
            return false;
        }
    }
    return true;
};

const timeToGuess = (callback, time) => {
    const guessID = setTimeout(callback, time);
    return guessID;
};

export const addSequence = (event) => {
    const index = guess(event.target.id);
    const buttons = GET_BUTTONS();
    const sequence = [];
    ADD_PLAYER_GUESS(index);
    sequence.push(flash(index, buttons[index], 0, "opacity(40%)"));
    Promise.all(sequence).then(() => {
        nextRound(GET_SIMON_GUESSES(), GET_PLAYER_GUESSES());
    });
};
