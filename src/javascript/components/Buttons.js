import { addSequence } from "./GuessLogic";

export const register = (buttons) => {
    for (const button of buttons) {
        button.addEventListener("click", addSequence);
    }
};

export const unRegister = (buttons) => {
    for (const button of buttons) {
        button.removeEventListener("click", addSequence);
    }
};

export const flash = (button, delay, color) => {
    setTimeout(() => {
        button.style.backgroundColor = color;
    }, delay);
};
