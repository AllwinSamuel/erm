import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Route": function() {
        return Route;
    }
});

import {Route} from "/node_modules/@slyte/router/index.js";

let MangerComp;

class Manager extends Route {
    beforeFetch(){
		var role = this.$app.$ServiceProvider.getRole();
		  if(role != "Manager"){
				this.$app.$ServiceProvider.goTo(role);
			}
	}
    render(){
        return {
            outlet : "#outlet",
            component : MangerComp
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
        arguments[1].push(import(/* webpackChunkName: "components/javascript/manger-comp" */
        "../../components/javascript/manger-comp").then(function(res) {
            MangerComp = res.MangerComp;
        }));
    }
}

export {Manager};

