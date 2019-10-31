import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";
import ru from "./translations/ru";
import pt from "./translations/pt";
import ka from "./translations/ka";
import tr from "./translations/tr";
import ur from "./translations/ur";
import ta from "./translations/ta";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro", "ru", "pt", "ka", "tr", "ur", "ta"];
export const messages = { en, it, ka, pt, ro, ru, ta, tr, ur };

export default language;
