import { FLASH_DELAY, FLASH_COLOR, REAPPEAR_DELAY } from "./Constant";
import { flash } from "./Buttons";

export const showcaseSequence = (simonGuesses, buttons) => {
    let delay = FLASH_DELAY;
    simonGuesses.map((index) => {
        const button = buttons[index];
        const color = button.style.backgroundColor;
        flash(button, delay, FLASH_COLOR);
        flash(button, delay + REAPPEAR_DELAY, color);
        delay += FLASH_DELAY;
    });
};
