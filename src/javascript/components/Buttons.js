import { GLOBAL_DATA } from "./Constant";

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

export const flash = (index, button, delay, filter) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const { buttonSounds } = GLOBAL_DATA;
            buttonSounds[index].addEventListener("play", () => {
                button.style.filter = filter;
            });

            buttonSounds[index].addEventListener("ended", () => {
                button.style.filter = "";
            });
            resolve(buttonSounds[index].play());
        }, delay);
    });
