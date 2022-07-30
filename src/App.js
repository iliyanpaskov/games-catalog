import { Switch, Route } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OurMission from "./components/OurMission/OurMission";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import Details from "./components/Details/Details"
import MyGames from "./components/MyGames/MyGames";
import EditGame from "./components/EditGame/EditGame"
import Comment from "./components/Comment/Comment"
import PageNotFound from "./components/PageNotFound/PageNotFound";
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
            <Route path={"/my-games"} component={MyGames} />
            <Route path={"/details/:id"} component={Details} />
            <Route path={"/edit/:id"} component={EditGame}/>
            <Route path={"/comment/:id"} component={Comment}/>
            <Route path={""} component={PageNotFound}/>

          </Switch>
        </main>

        <Footer />
      </div>
      </GameState>
    </AuthState>
  );
}

export default App;
