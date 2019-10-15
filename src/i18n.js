import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";
import ru from "./translations/ru";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro", "ru"];

export const messages = {
    en,
    it,
    ro,
    ru,
};

export default language;
