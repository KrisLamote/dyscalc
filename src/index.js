import React from "react";
import { render } from "react-dom";
import "./css/bootstrap.min.css";
import "./css/App.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";
import messages_en from "./translations/en";
import messages_it from "./translations/it";
import messages_ro from "./translations/ro";

const messages = {
    'en': messages_en,
    'it': messages_it,
    'ro': messages_ro
};

const language = navigator.language.split(/[-_]/)[0];

render (
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>
    , document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
