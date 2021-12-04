import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TolgeeProvider } from "@tolgee/react";

ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
      staticData={{
        en: () => import("./localization/en.json"),
        "fr-FR": () => import("./localization/fr-FR.json"),
        "ru-RU": () => import("./localization/ru-RU.json")
      }}
      loadingFallback={<>Loading...</>}
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

