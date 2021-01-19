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

for (let index = 0; index < BUTTONS_SIZE; index++) {
    SOUNDS[index].addEventListener("play", () => {
        BUTTONS[index].style.filter = FLASH;
    });

    SOUNDS[index].addEventListener("ended", () => {
        BUTTONS[index].style.filter = "";
    });
}

loadGame(EASY_MODE, HARD_MODE);
