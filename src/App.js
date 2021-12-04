import { init } from "./utils/initDroneLayer.js";
import { useEffect } from "react";

import { T, useSetLanguage, useCurrentLanguage } from "@tolgee/react";

function App() {

  useEffect(() => {
    init()
  }, [])

  const setLanguage = useSetLanguage();
  const getLanguage = useCurrentLanguage();

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title"><T>page_title</T></h1>
        <p className="text">
          <T>lorem</T>
        </p>
        <p>
          <button className="btn" onClick={() => setLanguage("en")} style={{background: getLanguage() === "en" ? "#ffba02" : "#a7a7a7"}}>
            <T>english_button</T>
          </button>
          <button className="btn" onClick={() => setLanguage("fr-FR")} style={{ background: getLanguage() === "fr-FR" ? "#ffba02" : "#a7a7a7" }}>
            <T>french_button</T>
          </button>
          <button className="btn" onClick={() => setLanguage("ru-RU")} style={{ background: getLanguage() === "ru-RU" ? "#ffba02" : "#a7a7a7" }}>
            <T>russian_button</T>
          </button>
        </p>
      </div>
      <div className="pricing">
        <h1 className="title">
          <T>package_title</T>
        </h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="card-title">
              <T>basic_title</T>
            </p>
            <p className="card-info">
              <T>card_info</T>
            </p>
            <button className="btn">
              <T>buy_button</T>
            </button>
          </div>

          <div className="pricing-card">
            <p className="card-title">
              <T>standard_title</T>
            </p>
            <p className="card-info">
              <T>card_info</T>
            </p>
            <button className="btn">
              <T>buy_button</T>
            </button>
          </div>
          <div className="pricing-card">
            <p className="card-title">
              <T>premium_title</T>
            </p>
            <p className="card-info">
              <T>card_info</T>
            </p>
            <button className="btn">
              <T>buy_button</T>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
