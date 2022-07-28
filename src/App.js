import { Switch, Route } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
// import { useState } from "react";

import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OurMission from "./components/OurMission/OurMission";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import Details from "./components/Details/Details"
import { AuthState } from "./context/AuthContext";
import { GameState } from "./context/GameContext";



function App() {



  return (
    <AuthState>
      <GameState>
      <div >
        <Header />
        <main>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/our-mission"} component={OurMission} />
            <Route path={"/catalog"} component={Catalog} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Register} />
            <Route path={"/create"} component={CreateGame} />
            <Route path={"/data/games/:id"} component={Details} />

          </Switch>
        </main>

        <Footer />
      </div>
      </GameState>
    </AuthState>
  );
}

export default App;
