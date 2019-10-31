import en from "./translations/en";
import it from "./translations/it";
import ka from "./translations/ka";
import pt from "./translations/pt";
import ro from "./translations/ro";
import ru from "./translations/ru";
import ta from "./translations/ta";
import tr from "./translations/tr";
import ur from "./translations/ur";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ka", "pt", "ro", "ru", "ta", "tr", "ur"];
export const messages = { en, it, ka, pt, ro, ru, ta, tr, ur };

export default language;
