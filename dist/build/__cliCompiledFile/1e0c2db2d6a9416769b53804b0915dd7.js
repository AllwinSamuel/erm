import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
  "ErmComponentRegistry": function() {
    return ErmComponentRegistry;
  },

  "Router": function() {
    return Router;
  },

  "ErmMap": function() {
    return ErmMap;
  }
});

import { Router } from "/node_modules/@slyte/router/index.js";
import { ErmMap } from "./maps/map";
import { ErmComponentRegistry } from "../components/component";
class ErmRouter extends Router {
  constructor() {
    super(...arguments);

    this.beforeRouteNavigation = function (prev, current) {
      if (current.info.route != "sign") {
        if (!localStorage.getItem("auth")) {
          this.navigateTo("sign");
        }
      }
    };

    this.afterRouteNavigation = function (current) {};
  }

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

  _() {
    _;
  }
}

export { ErmRouter };
