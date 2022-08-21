import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import End from "../End/End";
import "./App.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0b8e81",
      },
      secondary: {
        main: "#0b8e81",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understanding" exact>
            <Understanding />
          </Route>
          <Route path="/support" exact>
            <Support />
          </Route>
          <Route path="/comments" exact>
            <Comments />
          </Route>
          <Route path="/review" exact>
            <Review />
          </Route>
          <Route path="/end" exact>
            <End />
          </Route>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
