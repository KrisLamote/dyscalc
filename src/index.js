import React from "react";
import { render } from "react-dom";
import "./css/App.scss";
import { IntlProvider } from "react-intl";
import language, { messages } from "./i18n";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

render(
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
