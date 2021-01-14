import { setEasyMode, START_SCREEN } from "./Constant";
import { register } from "./Buttons";
import { startGame } from "./Simon";

export const loadGame = (easy, hard) => {
    register(easy, loadEasy);
    register(hard, loadHard);
};

const loadEasy = () => {
    START_SCREEN.style.display = "none";
    setEasyMode(true);
    startGame();
};

const loadHard = () => {
    START_SCREEN.style.display = "none";
    setEasyMode(false);
    startGame();
};
