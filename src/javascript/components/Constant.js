export let GLOBAL_DATA = {
    player: [],
    computer: [],
    buttons: [],
};

export const SAME_LENGTH = (computer, player) =>
    player.length === computer.length;

export const FLASH_DELAY = 1000;
export const REAPPEAR_DELAY = 500;
export const BUTTONS_SIZE = 4;
export const FLASH_COLOR = "#ecf0f1";
