import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
// import ShareThis from "./components/core/front/ShareThis";

import Global from "./Global";

// import Containers For react Router
import Navigation from "./components/navigation";
import Footer from "./components/main/Footer";

import DeputiesContainer from "./components/deputies/DeputiesContainer";

import DeputyContainer from "./components/deputies/DeputyContainer";
import PartyContainer from "./components/parties/PartyContainer";
import GroupContainer from "./components/groups/GroupContainer";

// import Admin from "./components/admin";
// import Create from "./components/admin/Create";

// import AddDeputy from "./components/admin/add/AddDeputy";
// import AddLaw from "./components/admin/add/AddLaw";
// import AddParty from "./components/admin/add/AddParty";
// import AddGroup from "./components/admin/add/AddGroup";
// import AddVote from "./components/admin/add/AddVote";
// import AddLawCategory from "./components/admin/add/AddLawCategory";

import EditDeputy from "./components/admin/edit/EditDeputy";
import EditLaw from "./components/admin/edit/EditLaw";
import EditParty from "./components/admin/edit/EditParty";
import EditGroup from "./components/admin/edit/EditGroup";
import EditVote from "./components/admin/edit/EditVote";
import EditLawCategory from "./components/admin/edit/EditLawCategory";

// import DeputiesList from "./components/admin/lists/DeputiesList";
// import PartiesList from "./components/admin/lists/PartiesList";
// import GroupsList from "./components/admin/lists/GroupsList";
// import VotesList from "./components/admin/lists/VotesList";
// import LawsList from "./components/admin/lists/LawsList";
// import CategoriesList from "./components/admin/lists/CategoriesList";

import Login from "./components/admin/auth/Login";
import Methode from "../src/components/main/Methode";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-144017472-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const AppContainer = styled.div`
  color: ${Global.color.body};
  font-family: ${Global.font.body};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${Global.color.background};
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Navigation />
          {/* <ShareThis /> */}
          <Route exact path="/" component={DeputiesContainer} />
          <Route exact path="/depute/:slug" component={DeputyContainer} />
          {/* <Route exact path="/partis" component={Parties} /> */}
          <Route exact path="/parti/:slug" component={PartyContainer} />
          {/* <Route exact path="/groupes" component={GroupsContainer} /> */}
          <Route exact path="/groupe/:slug" component={GroupContainer} />
          <Route exact path="/methode" component={Methode} />

          {/********** ADMIN ROUTES **********/}
          <Route exact path="/admin" component={Login} />

          {/* J'ai envie d'enlever toutes ces routes mais j'attends ta confirmation pour le faire */}

          {/* <Route exact path="/admin/deputes" component={DeputiesList} />
          <Route exact path="/admin/partis" component={PartiesList} />
          <Route exact path="/admin/groupes" component={GroupsList} />
          <Route exact path="/admin/votes" component={VotesList} />
          <Route exact path="/admin/lois" component={LawsList} />
          <Route exact path="/admin/categories" component={CategoriesList} />

          <Route exact path="/admin/creer" component={Create} />
          <Route exact path="/admin/ajouter/depute" component={AddDeputy} />
          <Route exact path="/admin/ajouter/loi" component={AddLaw} />
          <Route exact path="/admin/ajouter/parti" component={AddParty} />
          <Route exact path="/admin/ajouter/groupe" component={AddGroup} />
          <Route
            exact
            path="/admin/ajouter/categorie"
            component={AddLawCategory}
          />
          <Route exact path="/admin/ajouter/vote" component={AddVote} /> */}

          <Route exact path="/admin/edit/deputy/:id" component={EditDeputy} />
          <Route exact path="/admin/edit/law/:id" component={EditLaw} />
          <Route exact path="/admin/edit/party/:id" component={EditParty} />
          <Route exact path="/admin/edit/group/:id" component={EditGroup} />
          <Route
            exact
            path="/admin/edit/lawcategory/:id"
            component={EditLawCategory}
          />
          <Route exact path="/admin/edit/vote/:id" component={EditVote} />
          {/* <Route exact path="/admin/supprimer/:type/:id" component={Delete} /> */}

          <Footer />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
