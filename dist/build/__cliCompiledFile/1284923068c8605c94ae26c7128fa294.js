import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import './avatar-comp.js';
import './user-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class ProfileComp extends Component {
    constructor() {
		super();
	}
    init(){
          this.setData("user",this.$app.$ServiceProvider.getUser(JSON.parse(localStorage.getItem("auth")).empNo));
      }
    data(arg1) {
		return Object.assign(super.data({
			"user":this.$app.prop("object")
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

ProfileComp._template = "<template tag-name=\"profile-comp\"> <div id=\"avatar\"><avatar-comp name=\"{{user.name}}\"></avatar-comp></div> <user-comp user=\"{{user}}\"></user-comp> </template><style>#avatar{\n  height: 150px;\n  width:150px;\n}\nprofile-comp{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgb(193, 221, 231);\n  height: 100vh;\n  padding-top: 30px;\n  gap:50px;\n}</style>";;
ProfileComp._dynamicNodes = [{"t":"a","p":[1,0]},{"t":"cD","p":[1,0],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ProfileComp._observedAttributes = ["user"];

export {ProfileComp};

ProfileComp.register("profile-comp", {
    hash: "ProfileComp_16",
    refHash: "C_erm_app_0"
}); 
