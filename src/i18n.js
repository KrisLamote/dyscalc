import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro"];

export const messages = {
    en,
    it,
    ro
};

export default language;
