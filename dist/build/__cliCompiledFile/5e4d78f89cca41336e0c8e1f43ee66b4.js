import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js";
import './user-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class DetailsComp extends Component {
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
			deleteUser:function(empNo){
				this.$app.$ServiceProvider.showAlert("DELETE EMPLOYEE!","Are you sure want to delete this employee "+empNo,()=>{this.$app.$ServiceProvider.deleteUser(empNo)});
			},
			updateUser:function(user){
				this.$app.$ServiceProvider.showFormComp("update",user);
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

DetailsComp._template = "<template tag-name=\"details-comp\"> <user-comp user=\"{{user}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{show}}\" is=\"case\" lc-id=\"lc_id_0\"><template is=\"yield\" yield-name=\"content\"> <lyte-button lt-prop-appearance=\"success\" onclick=\"{{action('updateUser',user)}}\"> <template is=\"registerYield\" yield-name=\"text\"> UPDATE </template> </lyte-button> <lyte-button lt-prop-appearance=\"failure\" onclick=\"{{action('deleteUser',user.employeeNumber)}}\"> <template is=\"registerYield\" yield-name=\"text\"> DELETE </template> </lyte-button> </template></template></template> </user-comp> <div id=\"popup\"></div> </template><style>details-comp{\n  padding: 30px;\n  display: flex;\n  background: rgb(193, 221, 231);\n  height: 100vh;\n}\n\ndetails-comp user-comp{\n  width: 100%;\n}</style>";;
DetailsComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"r","p":[0],"dN":[{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[],"in":3,"sibl":[2]},{"t":"cD","p":[1],"in":2,"sibl":[1]},{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[],"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0}],"dc":[2,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
DetailsComp._observedAttributes = [];

export {DetailsComp};

DetailsComp.register("details-comp", {
    hash: "DetailsComp_23",
    refHash: "C_erm_app_0"
}); 
