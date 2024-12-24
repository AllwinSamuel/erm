import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import './list-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class MangerComp extends Component {
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
			addUser:function(){
				this.$app.$ServiceProvider.showAddComp();
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

MangerComp._template = "<template tag-name=\"manger-comp\"> from manager <button onclick=\"{{action('addUser')}}\">ADD+</button> <list-comp></list-comp> <div id=\"popup\"></div> </template>";;
MangerComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
MangerComp._observedAttributes = [];

export {MangerComp};

MangerComp.register("manger-comp", {
    hash: "MangerComp_12",
    refHash: "C_erm_app_0"
}); 
