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

  afterRouteNavigation = function (current) {};
}

export { ErmRouter };
