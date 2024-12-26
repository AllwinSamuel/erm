import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Route": function() {
        return Route;
    }
});

import {Route} from "/node_modules/@slyte/router/index.js";

let HomeComp;

class Home extends Route {
    render(){
        return {
            outlet : "#outlet",
            component:HomeComp
        }
    }
    divert(){
        if(this.navigation.info.route == "home")
        this.$app.$router.navigateTo("home.profile"); 
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(import(/* webpackChunkName: "components/javascript/home-comp" */
        "../../components/javascript/home-comp").then(function(res) {
            HomeComp = res.HomeComp;
        }));
    }
}

export {Home};

