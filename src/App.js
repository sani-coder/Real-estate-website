import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Listings,
  Login,
  Signup,
  Forgot,
  Listing,
  Dashboard,
  UserProfile,
  Messages,
  Password,
  AddLisiting,
  AdminListingList,
  AdminAgentsList,
  AgentListing,
} from "./pages";
//it imports a few pages from the "pages" directory.
//creates an App component that renders a Switch and Route components.

const App = () => {
  return (
    <Router>
      {/* //Switch component is used to render different routes based on what URL path they are matched against. */}
      <Switch>
        {/* Route component is used to render different components depending on what route matches their path prop value. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/listing" component={Listings} />
        <Route exact path="/property/:id" component={Listing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={Forgot} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/change-password" component={Password} />
        <Route path="/add-listing/:id?" component={AddLisiting} />
        <Route exact path="/all-listing" component={AdminListingList} />
        <Route exact path="/all-agents" component={AdminAgentsList} />
        <Route exact path="/mylisting" component={AgentListing} />
      </Switch>
    </Router>
  );
};

export default App;
