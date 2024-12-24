import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Route": function() {
        return Route;
    }
});

import { Route } from "/node_modules/@slyte/router/index.js";

let AdminComp;

class Index extends Route {
    beforeFetch(){
          var role = this.$app.$ServiceProvider.getRole();
            if(role != "Admin" && role != "Manager"){
                     this.navigation.abort();
                       this.navigateTo("home.profile");
              }
      }
    render() {
		return {outlet : "#outlet2",component : AdminComp}
	}
    onError(e){
          console.log(e);
      }
    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/admin-comp" */
        "../../../components/javascript/admin-comp").then(function(res) {
            AdminComp = res.AdminComp;
        }));
    }
}

export {Index};

