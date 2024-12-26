import { Router } from "@slyte/router";
import { ErmMap } from "./maps/map";
import { ErmComponentRegistry } from "../components/component";
class ErmRouter extends Router {
  lookups() {
    return [{ component: ErmComponentRegistry }];
  }

  getComponentRegistry() {
    return this.$component;
  }

  getConfig() {
    var config = {
      baseMap: ErmMap,
      history: "html5",
    };
    return config;
  }

  beforeRouteNavigation = function (prev, current) {
    if (current.info.route != "sign") {
      if (!localStorage.getItem("auth")) {
        this.navigateTo("sign");
      }
    }
  };

  afterRouteNavigation = function (current) {
    if(["home.index","home.profile","home.sendMail","home.inbox"].includes(current.info.route))
    this.$app.triggerEvent("routeChanged",current.info.route);
  };
}

export { ErmRouter };
