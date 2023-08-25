import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainPage } from "./Pages/MainPage";
import { ArticleList } from "./Pages/ArticleList";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" Component={MainPage}/>
                <Route path="/article_list" Component={ArticleList}/>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);