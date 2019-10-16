import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";
import ru from "./translations/ru";
import ptBR from "./translations/pt-br";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro", "ru", "pt-BR"];

export const messages = {
    en,
    it,
    ro,
    ru,
    ptBR,
};

export default language;
