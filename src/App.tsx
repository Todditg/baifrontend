import React from "react";
import { ResetCSSGlobalStyle } from "./styles/reset";
import { MainPage } from "./Pages/MainPage";    
import { ArticleList } from "./Pages/ArticleList";
import { ArticleDetails } from "./Pages/ArticleDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div>
      <ResetCSSGlobalStyle />
      <Router>
            <Routes>
                <Route path="/" Component={MainPage}/>
                <Route path="/article_list" Component={ArticleList}/>
                <Route path="/article_id" Component={ArticleDetails}/>
            </Routes>
        </Router>
    </div>
  );
};

export default App;
