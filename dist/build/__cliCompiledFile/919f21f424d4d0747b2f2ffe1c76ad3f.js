import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
   "Route": function() {
      return Route;
   }
});

import {Route} from "/node_modules/@slyte/router/index.js";

let ProfileComp;

class User extends Route {
   fetch(){
      return {"user":this.$app.$ServiceProvider.getUser(JSON.parse(localStorage.getItem("auth")).empNo)};
   }
   render(data,params){
      return { 
        outlet : "#outlet2",
        component : ProfileComp
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
      arguments[1].push(import(/* webpackChunkName: "components/javascript/profile-comp" */
      "../../components/javascript/profile-comp").then(function(res) {
         ProfileComp = res.ProfileComp;
      }));
   }
}

export {User};

