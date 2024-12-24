import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
  "Route": function() {
    return Route;
  }
});

import {Route} from "/node_modules/@slyte/router/index.js";

let DetailsComp;

class Details extends Route {
  fetch(params){
    return  {
      "user":this.$app.$ServiceProvider.getUser(params.dynamicParam),
      "show":this.$app.$ServiceProvider.getRole() == "Admin"
    }
  }
  render(data,params){
     return {
       outlet : "#outlet2",
       component : DetailsComp
     }
  }
  static actions(arg1) {
      return Object.assign(super.actions({
          
      }), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(import(/* webpackChunkName: "components/javascript/details-comp" */
    "../../../components/javascript/details-comp").then(function(res) {
      DetailsComp = res.DetailsComp;
    }));
  }
}

export {Details};

