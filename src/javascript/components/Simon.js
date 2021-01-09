import {
    GLOBAL_DATA,
    BUTTONS_SIZE,
    FLASH_DELAY,
    FLASH_COLOR,
    REAPPEAR_DELAY,
} from "./Constant";
import { flash } from "./Buttons";

export const showcaseSequence = () => {
    const { computer, buttons } = GLOBAL_DATA;
    let delay = FLASH_DELAY;
    computer.map((index) => {
        const button = buttons[index];
        const color = button.style.backgroundColor;
        flash(button, delay, FLASH_COLOR);
        flash(button, delay + REAPPEAR_DELAY, color);
        delay += FLASH_DELAY;
    });
};

export const simonSays = () => {
    const { computer } = GLOBAL_DATA;
    const simonsOrder = Math.floor(Math.random() * BUTTONS_SIZE);
    GLOBAL_DATA.computer = [...computer, simonsOrder];
    console.log(GLOBAL_DATA);
};
