import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import './navbar-comp.js';
import './profile-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class HomeComp extends Component {
    constructor() {
		super();
	}
    init(){
          //  this.$app.$router.navigateTo("home.user");
      }
    data(arg1) {
		return Object.assign(super.data({
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

HomeComp._template = "<template tag-name=\"home-comp\"> <navbar-comp></navbar-comp> <div id=\"outlet2\"> <profile-comp></profile-comp> </div> <div id=\"toast\"></div> </template><style>#outlet2{\n  height: calc(100vh - 100px);\n}</style>";;
HomeComp._dynamicNodes = [{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"cD","p":[3,1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
HomeComp._observedAttributes = [];

export {HomeComp};

HomeComp.register("home-comp", {
    hash: "HomeComp_8",
    refHash: "C_erm_app_0"
}); 
