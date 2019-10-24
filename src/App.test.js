import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import language, { messages } from "./i18n";
import App from "./components/App";

// eslint-disable-next-line no-undef
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
