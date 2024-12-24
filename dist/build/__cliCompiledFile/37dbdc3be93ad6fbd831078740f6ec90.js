import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js";
import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js";
import {Component} from "/node_modules/@slyte/component/index.js";

class SiginComp extends Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			userName: this.$app.prop("string"),
      password: this.$app.prop("string"),
			errMsg : this.$app.prop("string")
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			submit: function (e) {
        e.preventDefault();
				this.setData("errMsg",this.$app.$ServiceProvider.validateUser({"userName":this.data.userName,"password":this.data.password}));
		}
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

SiginComp._template = "<template tag-name=\"sigin-comp\"> <form> <lyte-input lt-prop-placeholder=\"Enter UserName or EmployeeNumber\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(userName)}}\"></lyte-input> <lyte-input lt-prop-placeholder=\"Enter password\" lt-prop-password-icon=\"true\" lt-prop-type=\"password\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(password)}}\"></lyte-input> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lbind(errMsg)}}\" is=\"case\" lc-id=\"lc_id_0\"><span>{{errMsg}}</span></template></template> <lyte-button lt-prop-appearance=\"success\" onclick=\"{{action('submit',event)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> </form> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n\nsigin-comp{\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}</style>";;
SiginComp._dynamicNodes = [{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":4,"sibl":[3]},{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":3,"sibl":[2]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,7]},{"t":"r","p":[1,7,1],"dN":[],"in":1,"sibl":[0]},{"t":"cD","p":[1,7],"in":0},{"type":"dc","trans":true,"hc":true,"p":[4,3,0]}];;
SiginComp._observedAttributes = ["userName", "password", "errMsg"];

export {SiginComp};

SiginComp.register("sigin-comp", {
    hash: "SiginComp_16",
    refHash: "C_erm_app_0"
}); 
