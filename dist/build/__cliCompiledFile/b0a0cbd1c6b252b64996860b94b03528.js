import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js";
import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js";
import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-accordion.js";
import {Component} from "/node_modules/@slyte/component/index.js";

class ListComp extends Component {
    constructor() {
		super();
	}
    init(){
          this.setData("users",this.$app.$ServiceProvider.getUsers());
          this.setData("updatedUsers",this.data.users);
      }
    data(arg1) {
		return Object.assign(super.data({  
			"users":this.$app.prop("array"),
			"updatedUsers":this.$app.prop("array")
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			search:function(e){
				 this.setData("updatedUsers",
					                           this.data.users.filter((user)=>
																			        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.employeeNumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.role.toLowerCase().includes(e.target.value.toLowerCase()) 
																		));
			},
			addUser:function(){
				this.$app.$ServiceProvider.showFormComp("add");
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

ListComp._template = "<template tag-name=\"list-comp\"> <div class=\"wrapper\"> <lyte-input lt-prop-class=\"list-input\" lt-prop-placeholder=\"Search Employee Here..\" oninput=\"{{action('search',event)}}\"> </lyte-input> <lyte-button lt-prop-class=\"btn-add\" lt-prop-appearance=\"success\" onclick=\"{{action('addUser')}}\"> <template is=\"registerYield\" yield-name=\"text\"> ADD EMPLOYEE + </template> </lyte-button> </div> <template items=\"{{updatedUsers}}\" item=\"user\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-accordion> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-accordion-item> <lyte-accordion-header>{{user.name}}<lyte-icon class=\"lyteAccordionArrow\"></lyte-icon></lyte-accordion-header> <lyte-accordion-body> <pre>                  <span>EMPLOYEE NUMBER : {{user.employeeNumber}}</span>\n                  <span>EMPLOYEE ROLE   : {{user.role}}</span>\n                  <go-to lt-prop-route=\"home.details\" lt-prop-dp=\"[&quot;{{user.employeeNumber}}&quot;]\">View More</go-to>\n                 </pre> </lyte-accordion-body> </lyte-accordion-item> </template> </lyte-accordion> </template> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-accordion.css\");\n@import url('/node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-input.css');\nlist-comp{\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\nlyte-accordion-body{\n  width: 100%;\n}\n\n.wrapper{\n  display: flex;\n  justify-content: space-between;\n  gap:30px;\n  margin-block: 20px;\n}\n.btn-add{\n  width: max-content;\n  height: 60px;\n  border-radius: 7px;\n  &:hover{\n    opacity: 1.1;\n  }\n}\n.list-input{\n  flex-grow: 1;\n  text-indent: 10px;\n  height: 60px;\n  border-radius: 7px;\n}\n.lyteField{\n  padding: 0;\n}\n\nlyte-accordion-header{\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding-left: 50px;\n  margin-left: 20px;\n  font-size: 1.3rem;\n}\nlyte-icon.lyteAccordionArrow {\n  background-position: -42px 0;\n  width: 15px;\n  height: 10px;\n  position: absolute;\n  left: 10px;\n  top:20px;\n}\n\nlist-comp lyte-accordion-body pre span{\n  display: inline-block;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n}\n\nlist-comp go-to{\n   background-color: rgb(74, 131, 166);\n   display: inline-block;\n   padding: 10px;\n   margin-top: 10px;\n   color: #ffffff;\n   border-radius: 7px;\n   transition: all 0.2s ease-in-out;\n   &:hover{\n    scale:1.1;\n   }\n}</style>";;
ListComp._dynamicNodes = [{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3]},{"t":"r","p":[1,3,1],"dN":[],"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"f","p":[3],"dN":[{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,1,2],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,3,1,1,1]},{"t":"tX","p":[1,3,1,3,1]},{"t":"a","p":[1,3,1,5]},{"t":"cD","p":[1,3,1,5],"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[3,1,0]}];;
ListComp._observedAttributes = ["users", "updatedUsers"];

export {ListComp};

ListComp.register("list-comp", {
    hash: "ListComp_22",
    refHash: "C_erm_app_0"
}); 
