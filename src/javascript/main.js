import "../css/style.css";
import {
    ADD_SIMON_GUESS,
    BUTTONS_SIZE,
    GENERATE_GUESS,
    GET_BUTTONS,
    GET_SIMON_GUESSES,
} from "./components/Constant";
import { register } from "./components/Buttons";
import { showcaseSequence } from "./components/Simon";

register(GET_BUTTONS());
ADD_SIMON_GUESS(GENERATE_GUESS(BUTTONS_SIZE));
showcaseSequence(GET_SIMON_GUESSES(), GET_BUTTONS());
