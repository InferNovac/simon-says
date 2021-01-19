import { SOUNDS } from "./Constant";

export const register = (buttons, event) => {
    for (const button of buttons) {
        button.addEventListener("click", event);
    }
};

export const unRegister = (buttons, event) => {
    for (const button of buttons) {
        button.removeEventListener("click", event);
    }
};

export const flash = (index, delay) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(SOUNDS[index].play());
        }, delay);
    });

export const userFlash = (index) => {
    SOUNDS[index].play();
};
