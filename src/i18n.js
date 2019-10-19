import en from "./translations/en";
import it from "./translations/it";
import ro from "./translations/ro";
import ru from "./translations/ru";
import ptBR from "./translations/pt-br";
import ka from "./translations/ka";
import tr from "./translations/tr";
import ta from "./translations/ta";

const language = navigator.language.split(/[-_]/)[0];

export const appLocales = ["en", "it", "ro", "ru", "pt-BR", "ka", "tr", "ta"];

export const messages = {
    en,
    it,
    ro,
    ru,
    ptBR,
    ka,
    tr,
    ta
};

export default language;
