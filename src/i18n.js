import en from "./translations/en.json";
import it from "./translations/it.json";
import ka from "./translations/ka.json";
import pt from "./translations/pt.json";
import ro from "./translations/ro.json";
import ru from "./translations/ru.json";
import ta from "./translations/ta.json";
import tr from "./translations/tr.json";
import ur from "./translations/ur.json";
import hu from "./translations/hu.json";
import es from "./translations/es.json";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ka", "pt", "ro", "ru", "ta", "tr", "ur", "hu", "es"];
export const messages = { en, it, ka, pt, ro, ru, ta, tr, ur, hu, es };

export default language;
