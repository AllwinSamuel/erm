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

class SigninComp extends Component {
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
				const { userName , password} = this.data;
					if (!userName || !password) {
						this.$app.$ServiceProvider.toast("All fields are required!", "error");
						return;
					}
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

SigninComp._template = "<template tag-name=\"signin-comp\"> <form> <h1>LOGIN</h1> <lyte-input lt-prop-placeholder=\"Enter UserName or EmployeeNumber\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(userName)}}\"></lyte-input> <lyte-input lt-prop-placeholder=\"Enter password\" lt-prop-password-icon=\"true\" lt-prop-type=\"password\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(password)}}\"></lyte-input> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lbind(errMsg)}}\" is=\"case\" lc-id=\"lc_id_0\"><span>{{errMsg}}</span></template></template> <lyte-button lt-prop-appearance=\"success\" onclick=\"{{action('submit',event)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> </form> <!-- for testing purpose --> <div> <p>empno - password - role</p> <p>---------------------------------</p> <p>emp101 - password - admin</p> <p>emp104 - password - employee</p> <p>emp106 - password - Manager</p> </div> <div id=\"toast\"></div> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n\nsignin-comp{\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f8f8f8;\n}\n\nsignin-comp form{\n    width:400px;\n    height: fit-content;\n    display: flex;\n    background-color: white;\n    flex-direction: column;\n    box-shadow: 12px 12px 12px rgba(0,0,0,0.2);\n    border-radius: 12px;\n    padding: 20px;\n    gap:20px;\n    border: 0.5px solid rgb(46, 127, 203);\n}\n\nsignin-comp form input{\n  height: 60px;\n  text-indent: 10px;\n  font-size: 1.2rem;\n  background-color: #f8f8f8 !important;\n  border: 0.5px solid rgb(46, 127, 203) !important;\n}\nsignin-comp button{\n  width: 100%;\n  height: 60px;\n  border-radius: 12px;\n  font-size: 1.4rem;\n}\n.lyteField{\n  padding: 0;\n}\n\nsignin-comp h1 {\n  text-align: center;\n  color: rgb(46, 127, 203);\n}</style>";;
SigninComp._dynamicNodes = [{"t":"a","p":[1,3]},{"t":"cD","p":[1,3],"in":4,"sibl":[3]},{"t":"a","p":[1,5]},{"t":"cD","p":[1,5],"in":3,"sibl":[2]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[0,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"a","p":[1,9]},{"t":"r","p":[1,9,1],"dN":[],"in":1,"sibl":[0]},{"t":"cD","p":[1,9],"in":0},{"type":"dc","trans":true,"hc":true,"p":[4,3,0]}];;
SigninComp._observedAttributes = ["userName", "password", "errMsg"];

export {SigninComp};

SigninComp.register("signin-comp", {
    hash: "SigninComp_22",
    refHash: "C_erm_app_0"
}); 
