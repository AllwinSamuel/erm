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
    }
});

import {Component} from "/node_modules/@slyte/component/index.js";

class AlertComp extends Component {
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

AlertComp._template = "<template tag-name=\"alert-comp\"> <lyte-alert lt-prop-wrapper-class=\"sampleAlert\" lt-prop=\"{&quot;buttons&quot; : [{&quot;type&quot;:&quot;accept&quot;,&quot;text&quot;:&quot;Ok&quot;,&quot;appearance&quot;:&quot;success&quot;},{&quot;type&quot;:&quot;reject&quot;,&quot;text&quot;:&quot;Cancel&quot;,&quot;appearance&quot;:&quot;failure&quot;}]}\" lt-prop-type=\"warning\" lt-prop-yield=\"true\" lt-prop-show=\"true\" on-accept=\"{{method('perform')}}\"> <template is=\"registerYield\" yield-name=\"alert\"> <lyte-alert-header> {{header}} </lyte-alert-header> <lyte-alert-content> {{content}} </lyte-alert-content> </template> </lyte-alert> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-alert.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n</style>";;
AlertComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"tX","p":[3,1]},{"t":"cD","p":[3],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
AlertComp._observedAttributes = [];

export {AlertComp};

AlertComp.register("alert-comp", {
    hash: "AlertComp_5",
    refHash: "C_erm_app_0"
}); 
