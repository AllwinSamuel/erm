import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    },

    "prop": function() {
        return prop;
    }
});

import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-table.js";
import {Component} from "/node_modules/@slyte/component/index.js";
import { prop } from "/node_modules/@slyte/core/index.js";

class UserComp extends Component {
    constructor() {
		super();
	}
    init(){
       
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

UserComp._template = "<template tag-name=\"user-comp\"> <lyte-table lt-prop-yield=\"true\" lt-prop-border=\"true\" lt-prop-resize=\"{&quot;horizontal&quot;: true, &quot;vertical&quot; : true}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-table-structure> <lyte-thead> <lyte-tr> <lyte-th>Attibutes</lyte-th> <lyte-th>Values</lyte-th> </lyte-tr> </lyte-thead> <lyte-tbody> <template object=\"{{user}}\" value=\"value\" key=\"key\" is=\"forIn\" _new=\"true\"><lyte-tr> <lyte-td> {{key}} </lyte-td> <lyte-td> {{value}} </lyte-td> </lyte-tr></template> </lyte-tbody> </lyte-table-structure> </template> </lyte-table> <lyte-yield yield-name=\"content\"> </lyte-yield> </template><style>@import url('/node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-table.css');\n@import url('/node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-button.css');\n\nlyte-table{\n  max-width: 100vw;\n  color:white;\n}\nlyte-thead lyte-tr{\n   background-color: rgb(45, 119, 210);\n}\nlyte-thead lyte-th{\n    background-color: rgb(45, 119, 210);\n    color:white;\n}\nuser-comp{\n  padding: 20px;\n  overflow: auto;\n}\nlyte-th{\n  color:white;\n}\n\nlyte-td , lyte-th{\n  font-size: 1.2rem;\n  padding: 10px;\n}\n\ndetails-comp user-comp lyte-td , lyte-th{\n  font-size: 1.4rem;\n  padding: 20px;\n}\n\nuser-comp lyte-yield{\n  display:flex;\n  justify-content: end;\n  gap:10px;\n\n}\n\nuser-comp lyte-yield button{\n  margin-top: 20px;\n  padding-block: 20px;\n  padding-inline: 50px;\n  border-radius: 8px;\n  font-size: 1.2rem;\n}</style>";;
UserComp._dynamicNodes = [{"t":"r","p":[1,1],"dN":[{"t":"cD","p":[1,1,1,1],"in":6,"sibl":[5]},{"t":"cD","p":[1,1,1,3],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3,1]},{"t":"fI","p":[1,3,1],"dN":[{"t":"tX","p":[0,1,1]},{"t":"cD","p":[0,1],"in":2,"sibl":[1]},{"t":"tX","p":[0,3,1]},{"t":"cD","p":[0,3],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[6,5,4,3,2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"i","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
UserComp._observedAttributes = [];

export {UserComp};

UserComp.register("user-comp", {
    hash: "UserComp_31",
    refHash: "C_erm_app_0"
}); 
