import "../css/style.css";
import { GLOBAL_DATA } from "./components/Constant";
import { register } from "./components/Buttons";
import { simonSays, showcaseSequence } from "./components/Simon";

const buttons = document.getElementsByClassName("buttons");
GLOBAL_DATA.buttons = [...buttons];
register();
simonSays();
simonSays();
simonSays();
simonSays();
simonSays();
simonSays();
simonSays();
simonSays();
simonSays();
showcaseSequence();
