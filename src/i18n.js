import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";
import ru from "./translations/ru";
import ptBR from "./translations/pt-br";
import ka from "./translations/ka";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro", "ru", "pt-BR", "ka"];

export const messages = {
    en,
    it,
    ro,
    ru,
    ptBR,
    ka,
};

export default language;
