import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    }
});

import {Component} from "/node_modules/@slyte/component/index.js";

class ToastComp extends Component {
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

ToastComp._template = "<template tag-name=\"toast-comp\"> <lyte-messagebox lt-prop-type=\"{{type}}\" lt-prop-yield=\"true\" lt-prop-show=\"true\"> <template is=\"registerYield\" yield-name=\"messageboxYield\"> <span>{{message}}</span> </template> </lyte-messagebox> </template><style>@import '/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-messagebox.css';\n</style>";;
ToastComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,0]}],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ToastComp._observedAttributes = [];

export {ToastComp};

ToastComp.register("toast-comp", {
    hash: "ToastComp_9",
    refHash: "C_erm_app_0"
}); 
