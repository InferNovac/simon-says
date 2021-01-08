import { GLOBAL_DATA } from "./Constant";
import { addSequence } from "./GuessLogic";

export const register = () => {
    const { buttons } = GLOBAL_DATA;
    for (const button of buttons) {
        button.addEventListener("click", addSequence);
    }
};

export const unRegister = () => {
    const { buttons } = GLOBAL_DATA;
    for (const button of buttons) {
        button.removeEventListener("click", addSequence);
    }
};

export const flash = (button, delay, color) => {
    setTimeout(() => {
        button.style.backgroundColor = color;
    }, delay);
};
