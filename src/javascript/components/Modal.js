import { GLOBAL_DATA, SET_EASY_MODE, UI } from "./Constant";
import { register, unRegister } from "./Buttons";
import { startGame } from "./Simon";

export const loadGame = (easy, hard) => {
    register(easy, loadEasy);
    register(hard, loadHard);
};

const loadEasy = () => {
    const modal = document.getElementById("start-screen");
    modal.style.display = "none";
    SET_EASY_MODE(true);
    startGame();
};

const loadHard = () => {
    const modal = document.getElementById("start-screen");
    modal.style.display = "none";
    SET_EASY_MODE(false);
    startGame();
};
