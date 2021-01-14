import "../css/style.css";
import {
    BUTTONS_SIZE,
    EASY_MODE,
    HARD_MODE,
    FLASH,
    SOUNDS,
    BUTTONS,
} from "./components/Constant";
import { loadGame } from "./components/StartScreen";
import { addSequence } from "./components/GuessLogic";

for (let index = 0; index < BUTTONS_SIZE; index++) {
    SOUNDS[index].addEventListener("play", () => {
        BUTTONS[index].style.filter = FLASH;
        for (const button of BUTTONS) {
            if (BUTTONS[index] !== button) {
                button.removeEventListener("click", addSequence);
            }
        }
    });

    SOUNDS[index].addEventListener("ended", () => {
        BUTTONS[index].style.filter = "";
        for (const button of BUTTONS) {
            if (BUTTONS[index] !== button) {
                button.addEventListener("click", addSequence);
            }
        }
    });
}

loadGame(EASY_MODE, HARD_MODE);
