import { GLOBAL_DATA, SAME_LENGTH } from "./Constant";
import { showcaseSequence, simonSays } from "./Simon";

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
    const { computer, player } = GLOBAL_DATA;
    GLOBAL_DATA.player = [...player, guess(event.target.id)];
    if (SAME_LENGTH(computer, GLOBAL_DATA.player) && checkPlayerSequence()) {
        simonSays();
        showcaseSequence();
        GLOBAL_DATA.player = [];
    }
};

const checkPlayerSequence = () => {
    const { player, computer } = GLOBAL_DATA;
    for (let index = 0; index < player.length; index++) {
        if (player[index] !== computer[index]) {
            return false;
        }
    }
    return true;
};
