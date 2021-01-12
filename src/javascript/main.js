import "../css/style.css";
import { GET_EASY_BUTTON, GET_HARD_BUTTON } from "./components/Constant";
import { loadGame } from "./components/Modal";
import { GLOBAL_DATA } from "./components/Constant";

loadGame(GET_EASY_BUTTON(), GET_HARD_BUTTON());