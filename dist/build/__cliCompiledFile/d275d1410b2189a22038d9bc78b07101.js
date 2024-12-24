import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Route": function() {
        return Route;
    }
});

import {Route} from "/node_modules/@slyte/router/index.js";

let SigninComp;

class Sign extends Route {
    beforeFetch(){
        if(localStorage.getItem("auth")){
            this.navigation.abort();
            this.navigateTo("home.profile")
        }
    }
    render(){
        return { 
            outlet : "#outlet",
            component : SigninComp
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
        arguments[1].push(import(/* webpackChunkName: "components/javascript/signin-comp" */
        "../../components/javascript/signin-comp").then(function(res) {
            SigninComp = res.SigninComp;
        }));
    }
}

export {Sign};

