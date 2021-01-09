import "../css/style.css";
import { GLOBAL_DATA } from "./components/Constant";
import { register } from "./components/Buttons";
import { showcaseSequence, simonSays } from "./components/Simon";

const buttons = document.getElementsByClassName("buttons");
GLOBAL_DATA.buttons = [...buttons];
register();
simonSays();
showcaseSequence();
