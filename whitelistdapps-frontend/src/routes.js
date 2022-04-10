import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Success from "./component/Success/Success";
import WalletList from "./component/WalletList/WalletList";
// import FourZeroFour from "./component/FourZeroFour";

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wallets" component={WalletList} />
      <Route exact path="/success" component={Success} />
      {/* <Route component={FourZeroFour} /> */}
    </Switch>
  );
};

export default BaseRouter;
