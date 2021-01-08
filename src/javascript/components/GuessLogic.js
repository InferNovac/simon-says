import { GLOBAL_DATA } from "./Constant";

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
    const { player } = GLOBAL_DATA;
    GLOBAL_DATA.player = [...player, guess(event.target.id)];
};


