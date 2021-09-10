import "./App.css";
import ReactTooltip from "react-tooltip";
import { ToastContainer } from "react-toastify";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inquiry from "./components/Inquiry";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <ReactTooltip />
      <Navbar phone={9535584464} />
      <ToastContainer />
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        {/* <Route path="/" exact component={HomePage}></Route> */}
        <Route
          path="/about-us"
          exact
          render={(props) => <AboutPage {...props} />}
        />
        {/* <Route path="/about-us" exact component={AboutPage}></Route> */}
        <Route
          path="/services"
          exact
          render={(props) => <ServicePage {...props} />}
        />
        {/* <Route path="/services" exact component={ServicePage}></Route> */}
        <Route path="/projects" exact component={ProjectPage}></Route>
        <Route path="/contact-us" exact component={ContactPage}></Route>
      </Switch>
      <Inquiry
        head="Inquery form"
        para="Write your Query related to Project Making we will give to clear
              solution."
      />
      <Footer />
    </Router>
  );
}

export default App;
