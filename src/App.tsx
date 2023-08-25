import React from "react";
import { ResetCSSGlobalStyle } from "./styles/reset";
import { MainPage } from "./Pages/MainPage";

const App = (): React.ReactElement => {
  return (
    <div>
      <ResetCSSGlobalStyle />
      <MainPage />
    </div>
  );
};

export default App;
