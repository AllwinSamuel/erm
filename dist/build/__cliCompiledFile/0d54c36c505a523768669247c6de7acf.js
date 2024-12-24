import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    }
});

import {Component} from "/node_modules/@slyte/component/index.js";

class AvatarComp extends Component {
    constructor() {
		super();
	}
    init(){
          this.$node.style.backgroundImage = `url("https://ui-avatars.com/api/?name=${this.data.name.trim().charAt(0).toUpperCase()}&color=fff&background=${this.$app.$ServiceProvider.getRandomColor()}&font-weight=900")`
      }
    didConnect(){
       this.$node.addEventListener("click",()=>{
           this.$app.$router.navigateTo("home");
       })
    }
    data(arg1) {
		return Object.assign(super.data({
			name:this.$app.prop("string")
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

AvatarComp._template = "<template tag-name=\"avatar-comp\" class=\"avatar-comp\"> </template><style>.avatar-comp{\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size:cover;\n  outline: 1.5px solid rgb(24, 21, 21);\n  outline-offset: 1px;\n  border-radius :50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10em;\n}</style>";;
AvatarComp._dynamicNodes = [];;
AvatarComp._observedAttributes = ["name"];

export {AvatarComp};

AvatarComp.register("avatar-comp", {
    hash: "AvatarComp_13",
    refHash: "C_erm_app_0"
}); 
