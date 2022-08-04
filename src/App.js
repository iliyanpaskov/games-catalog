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
import Dialog from "./components/Details/Dialog/Dialog";
import { AuthState } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <AuthState>
      <div >
        <Header />
        <main>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/dialog"} component={Dialog} />
            <Route path={"/our-mission"} component={OurMission} />
            <Route path={"/catalog"} component={Catalog} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Register} />
            <Route path={"/create"} component={CreateGame} />
            <Route path={"/my-games"} component={MyGames} />
            <Route path={"/details/:id"} component={Details} />
            <Route path={"/edit/:id"} component={EditGame} />
            <Route path={"/comment/:id"} component={Comment} />
            <Route path={""} component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    </AuthState>
  );
}

export default App;
