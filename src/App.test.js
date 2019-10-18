import React from "react";
import ReactDOM from "react-dom";
import language, { messages } from "./i18n";
import { IntlProvider } from "react-intl";
import App from "./components/App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
