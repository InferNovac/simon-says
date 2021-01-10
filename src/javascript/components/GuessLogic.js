import {
    SAME_LENGTH,
    GET_SIMON_GUESSES,
    SET_PLAYER_GUESSES,
    GET_PLAYER_GUESSES,
    CLEAR_PLAYER_GUESSES,
    GENERATE_GUESS,
    BUTTONS_SIZE,
    ADD_SIMON_GUESS,
    GET_BUTTONS,
} from "./Constant";
import { showcaseSequence } from "./Simon";

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

export const addSequence = (event) => {
    SET_PLAYER_GUESSES(guess(event.target.id));
    const simon = GET_SIMON_GUESSES();
    const player = GET_PLAYER_GUESSES();
    nextRound(simon, player);
};

const nextRound = (simon, player) => {
    if (SAME_LENGTH(simon, player) && checkPlayerSequence(simon, player)) {
        ADD_SIMON_GUESS(GENERATE_GUESS(BUTTONS_SIZE));
        CLEAR_PLAYER_GUESSES();
        showcaseSequence(simon, GET_BUTTONS());
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
