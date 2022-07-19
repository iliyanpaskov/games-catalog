import { Switch, Route } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OurMission from "./components/OurMission/OurMission";
import Register from "./components/Register/Register";


function App() {
  return (
    <div >
      <Header />

      <main>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/our-mission"} component={OurMission} />
          <Route path={"/catalog"} component={Catalog} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Register} />

        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
