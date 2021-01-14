import {
    SCORE,
    GLOBAL_DATA,
    BUTTONS_SIZE,
    addPoint,
    addSimon,
    addPlayer,
    generateGuess,
    clearPlayerGuesses,
} from "./Constant";
import { gameOver, showcaseSequence } from "./Simon";
import { userFlash } from "./Buttons";

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

const sameLength = (simon, player) => simon.length === player.length;

const nextRound = () => {
    const { simon, player } = GLOBAL_DATA;
    if (sameLength(simon, player) && checkPlayerSequence(simon, player)) {
        SCORE.innerText = addPoint();
        clearPlayerGuesses();
        addSimon(generateGuess(BUTTONS_SIZE));
        showcaseSequence();
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

export const addSequence = (event) => {
    const index = guess(event.target.id);
    addPlayer(index);
    userFlash(index);
    nextRound();
};
