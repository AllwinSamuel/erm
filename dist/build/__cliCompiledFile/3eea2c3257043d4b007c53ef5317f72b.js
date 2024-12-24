import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Route": function() {
        return Route;
    }
});

import {Route} from "/node_modules/@slyte/router/index.js";

class Wildcard extends Route {
    render(){
       return {
           outlet : "#outlet",
           html : "<h2 style='text-align:center'>Oops! No such page found </h2>" 
       }
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {}
}

export {Wildcard};

