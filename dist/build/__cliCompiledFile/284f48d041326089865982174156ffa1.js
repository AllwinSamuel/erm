import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import './list-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class AdminComp extends Component {
    constructor() {
		super();
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

AdminComp._template = "<template tag-name=\"admin-comp\"> <list-comp></list-comp> <div id=\"popup\"></div> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n\nadmin-comp{\n  background-color:rgb(193, 221, 231);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  border: 20px solid balck;\n  padding-inline: 30px;\n  padding-block: 10px;\n}\n\n</style>";;
AdminComp._dynamicNodes = [{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
AdminComp._observedAttributes = [];

export {AdminComp};

AdminComp.register("admin-comp", {
    hash: "AdminComp_10",
    refHash: "C_erm_app_0"
}); 
